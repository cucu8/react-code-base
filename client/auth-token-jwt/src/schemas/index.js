import * as yup from "yup"

const inputSchema = yup.object({
    userName: yup.string()
        .required("name is required")
        .min(3, "name must be 3 characters")
        .matches(/^[a-zA-Z0-9]+$/, "kullanıcı adında özel isim ve boşluk olamaz"),
    email: yup.string().required("email is required").email("invalid email"),
    password: yup.string().required("password required").min(4, "password min 4 characters"),
    confirmPassword: yup.string()
        .required("confirm password required")
        .oneOf([yup.ref("password")], "password much match")

})

export { inputSchema }