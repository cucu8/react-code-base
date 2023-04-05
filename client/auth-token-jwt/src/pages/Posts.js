import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import AuthContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [posts, setPosts] = useState([]);
    const [refresh, setRefresh] = useState(false)
    const [form, setForm] = useState({ user: "", title: "", description: "" })

    useEffect(() => {
        const controller = new AbortController();
        setForm({ ...form, user: user?.user?.username || "cuneyt" })
        getPosts(controller)
        return () => controller.abort();
    }, [refresh])

    const getPosts = async (controller) => {
        const loading = toast.loading('Loading...');

        try {
            const response = await axios.get("http://localhost:5000/getposts", { signal: controller.signal })
            if (response.status === 200) {
                setPosts([...response.data])
            }
        } catch (error) {
            console.log(error)
            toast.error(error)
        }
        toast.dismiss(loading);
    }

    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const createPost = async () => {
        const sendPost = toast.loading('Post Gönderiliyor..');
        try {
            const response = await axios.post("http://localhost:5000/createPost",
                {
                    user: form.user,
                    title: form.title,
                    description: form.description
                }
            )
            if (response.status === 201) {
                setPosts([...posts, response.data])
                toast.success("İşlem başarılı")
                setForm({ ...form, title: "", description: "" })
            } else {
                toast.error("işlem başarısız")
                console.log(response)
            }
        } catch (e) {
            console.log(e)
            toast.error(e.message)
        }
        toast.dismiss(sendPost);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost()
    }

    const handleDeletePost = async (id) => {
        const deletePost = toast.loading('Post Siliniyor');
        console.log(form)
        try {
            const response = await axios.delete(`http://localhost:5000/deletePost/${id}`)
            if (response.status === 200) {
                toast.success(response.message)
                setRefresh(!refresh)
                setForm({ ...form, title: "", description: "" })
            } else {
                toast.error("işlem başarısız")
                console.log(response)
            }
        } catch (error) {
            toast.error("işlem başarısız")

            console.log(error.message)
        }
        toast.dismiss(deletePost);

    }

    const handleUpdatePost = async (id) => {
        const updatePost = toast.loading('Post Güncelleniyor');
        console.log(form)
        try {
            const response = await axios.patch(`http://localhost:5000/updatePost/${id}`, form)
            if (response.status === 200) {
                toast.success(response.message)
                setRefresh(!refresh)
                setForm({ ...form, title: "", description: "" })
            } else {
                toast.error("işlem başarısız")
                console.log(response)
            }
        } catch (error) {
            toast.error("işlem başarısız")

            console.log(error.message)
        }
        toast.dismiss(updatePost);

    }


    return (
        <div className='flex flex-col p-10'>
            <div className='flex flex-col gap-5'>
                <span>Post Ekle</span>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <label>Title</label>
                    <input value={form.title} type="text" className=' border-2' name="title" onChange={handleOnChange} />
                    <label>Description</label>
                    <input type="text" value={form.description} className=' border-2' name="description" onChange={handleOnChange} />
                    <button
                        className='bg-green-700 text-white'
                        type="submit"
                        disabled={!form.title || !form.description}
                    >Ekle</button>
                </form>
            </div>
            <div className='grid grid-cols-4 gap-5'>

                {
                    posts.length > 0
                        ? posts.map((post) => <div key={post._id}
                            className='flex flex-col  cursor-pointer bg-gray-400 rounded'

                        >
                            <span>user: {post.user}</span>
                            <span>title: {post.title}</span>
                            <span>dscription: {post.description}</span>
                            <button
                                className='bg-red-500 text-white'
                                onClick={() => handleDeletePost(post._id)}>Sil</button>
                            <button
                                className='bg-blue-500 text-white'
                                onClick={() => navigate(`/posts/${post._id}`)}>Detay</button>
                            <button
                                className='bg-yellow-500 text-white'
                                onClick={() => handleUpdatePost(post?._id)}>Düzenle</button>
                        </div>
                        ) : <div>Henüz eklenmiş post yok</div>
                }
            </div>
        </div>
    )
}

export default Posts