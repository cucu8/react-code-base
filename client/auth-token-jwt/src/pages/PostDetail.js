import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        getPost()
    }, [])

    const getPost = async () => {
        const loading = toast.loading('Loading...');

        try {
            const response = await axios.post("http://localhost:5000/getPost", { id })
            if (response.status === 200) {
                setPost({ ...response.data })
                toast.success("işlem başarılı")
            } else {

                toast.error("İşlem başarısız")
            }
        } catch (error) {
            toast.error(error.message)
        }
        toast.dismiss(loading);

    }

    return (
        <div className="flex flex-col p-20">
            <div className="flex flex-col">
                <span>user: {post?.user} </span>
                <span>title: {post?.title} </span>
                <span>description: {post?.description} </span>
            </div>
        </div>
    )
}

export default PostDetail