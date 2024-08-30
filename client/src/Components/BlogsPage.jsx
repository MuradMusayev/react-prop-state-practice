import React, { useEffect, useState } from 'react'


function Blogs({ fullName, id, setIsLogin }) {
    const [blogs, setBlogs] = useState([])

    const [formData, setFormData] = useState({
        title: "",
        imgUrl: "",
        description: "",
        userId: id
    })


    useEffect(() => {
        getBlogData()
    }, [])

    function getBlogData() {
        fetch(`http://localhost:3000/blogs?userId=${id}`)
        .then(res => res.json())
        .then(data => setBlogs(data))
    }
    function logOutUser(params) {
        localStorage.removeItem("userData")
        setIsLogin(true)
    }
    function createBlog(e) {
        e.preventDefault()
        fetch("http://localhost:3000/blogs", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(res => {
            if (res.ok) {
                getBlogData()

                setFormData({
                    title: "",
                    imgUrl: "",
                    description: "",
                    userId: id
                })
            } 
            else {
                alert("Ugursuz emeliyyat")
            }
        })

    }
    return (
        <div className='blogPage'>
            <h1>Welcome to Admin Panel, {fullName}</h1>
            <button onClick={logOutUser}>Log out</button>
qwertyuio
            <form onSubmit={createBlog}>
                <input
                    type="text"
                    placeholder='Blog Title...'
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    value={formData.title}
                />
                <input
                    type="text"
                    placeholder='Blog Image Url...'
                    onChange={(e) => setFormData({ ...formData, imgUrl: e.target.value })}
                    value={formData.imgUrl}
                />
                <textarea
                    placeholder='Description...'
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    value={formData.description}>
                </textarea>
                <button>
                    Create Blog
                </button>

            </form>

            <div className='blogs'>
                {blogs.map(item => {
                    return <div className='blogcard'>
                        <img src={item.imgUrl} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Blogs