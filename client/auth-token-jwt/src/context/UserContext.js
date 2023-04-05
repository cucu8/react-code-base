import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import jwtDecode from "jwt-decode";
import secureLocalStorage from "react-secure-storage";

const AuthContext = createContext();
export default AuthContext;

//* componentleri sarmaladıgımız yer <UserProvider> dır.
//* ama verileri componentler içinde,  const {user} = useContext(AuthContext) ile alırız.

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {

        const authUser = secureLocalStorage.getItem("auth") || null
        let userInformation;

        if (authUser?.accessToken) {
            try {
                const userInformation = jwtDecode(authUser.accessToken)
                setUser({ ...userInformation })
                navigate("/")
                toast.success("Giriş başarılı")
            } catch (error) {
                toast.error("Invalid token2")
            }
        }

    }, [])

    const login = async (form) => {

        const toastId = toast.loading('Loading...');
        try {
            const response = await axios.post(`http://localhost:5000/login`, form)

            if (response.status === 200) {
                secureLocalStorage.setItem("auth", response.data);
                const authUser = secureLocalStorage.getItem("auth")
                try {
                    const userInformation = jwtDecode(authUser.accessToken)
                    setUser({ ...userInformation })
                    navigate("/")
                    toast.success("Giriş başarılı")
                } catch (error) {
                    toast.error("Invalid token")
                }
            } else {
                toast.error(response.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
        toast.dismiss(toastId);
    }

    const register = async (form) => {
        const toastId = toast.loading('Veriler gönderiliyor..');
        try {
            const response = await axios.post("http://localhost:5000/register", form)

            if (response.status === 200) {
                navigate("/login")
                toast.success("Uye oldunuz, Tekrar giriş yapınız")
            }
        } catch (error) {
            console.log(error.response)
            toast.error(error.response.data.message)
        }
        toast.dismiss(toastId);

    }

    const value = {
        user,
        setUser,
        login,
        register
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
