const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const PostSchema = require("../models/postModel.js")

const getPosts = async (req, res) => {

    try {
        //* tüm postları getirir
        const getPosts = await PostSchema.find()

        return res.status(200).json(getPosts)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getPost = async (req, res) => {
    const { id } = req.body
    try {
        const getPost = await PostSchema.findById(id)

        return res.status(200).json(getPost)

    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}
const createPost = async (req, res) => {

    const { user, title, description } = req.body

    try {
        const newPost = await PostSchema.create({ user, title, description })

        return res.status(201).json(newPost)

    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}
const updatePost = async (req, res) => {

    try {
        const { id } = req.params
        const updated = await PostSchema.findByIdAndUpdate(id, req.body, { new: true })

        return res.status(200).json(updated)

    } catch (error) {
        return res.status(500).json({ message: "Gücelleme Başarılı" })

    }
}
const deletePost = async (req, res) => {

    try {
        const { id } = req.params;

        await PostSchema.findByIdAndRemove(id)

        res.status(200).json({ message: "Silme işlemi başarılı" })

    } catch (error) {
        return res.status(500).json({ message: "asd" })

    }
}


module.exports = { getPosts, createPost, updatePost, deletePost, getPost }