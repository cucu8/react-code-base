const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const AuthSchema = require("../models/authModel.js")

const register = async (req, res, mext) => {

    try {
        const { username, email, password } = req.body

        const emailResult = ValidateEmail(email)

        if (!emailResult) return res.status(500).json({ message: "Geçerli email giriniz" })

        const existUser = await AuthSchema.findOne({ email: email })

        if (existUser) return res.status(500).json({ message: "Kullanıcı zaten var" })

        if (password.length < 6) return res.status(500).json({ message: "Şifreniz 6 karakterden kısa olmamalı" })

        const passwordHashed = await bcrypt.hash(password, 10)

        // const newUser = await AuthSchema.create({ email: email, username: username, password: passwordHashed })

        //* üstteki new userın kısaltılmış hali
        const newUser = await AuthSchema.create({ ...req.body, password: passwordHashed })

        // const token = await jwt.sign({ id: newUser._id }, "SECRET_KEY", { expiresIn: "1h" })

        return res.status(200).json({
            newUser,
            // token
        })


    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

const login = async (req, res) => {

    try {
        const { email, password } = req.body

        const emailResult = ValidateEmail(email)

        if (!emailResult) return res.status(500).json({ message: "Geçerli email giriniz" })

        const user = await AuthSchema.findOne({ email: email })

        if (!user) return res.status(500).json({ message: "Kullanıcı bulunamadı" })

        //* clientten gelen password ile, serverdaki password karşılaştırılır
        const passwordCompare = await bcrypt.compare(password, user.password)

        if (!passwordCompare) return res.status(500).json({ message: "Girilen şifre hatalı" })

        const accessToken = jwt.sign(
            {
                userType: user.userType,
                username: user.username,
                email: user.email,
            },
            process.env.ACCESS_TOKEN_SECRET_KEY,
            { expiresIn: "1d" }
        )

        const refreshToken = jwt.sign(
            {
                isAdmin: user.isAdmin,
                username: user.username,
                email: user.email,
            },
            process.env.REFRESH_TOKEN_SECRET_KEY
        )

        return res.cookie("token", accessToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }).status(200).json({
            accessToken,
            refreshToken
        })

    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

const getAllUsers = async () => {
    try {
        const allUsers = await AuthSchema.find()
        return res.status(200).json(allUsers)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

function ValidateEmail(email) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
        return true;
    } else {
        return false;
    }

}


module.exports = { login, register, getAllUsers }