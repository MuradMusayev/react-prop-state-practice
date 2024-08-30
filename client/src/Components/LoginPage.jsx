import React, { useState } from 'react'

function Login({ setRegisterStatus, setIsLogin }) {
    const [formData, setFormData] = useState({
        fullName: "",
        password: ""
    })

    function loginUser(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/users?email=${formData.email}&password=${formData.password}`)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setIsLogin(true)
                    localStorage.setItem("userData", JSON.stringify({
                        ...data[0], password:""
                    }))
                }else{
                    alert("Email ve ya sifre yalnisdir!")
                }

            })
    }
    return (
        <form onSubmit={loginUser}>
            <h2>Login</h2>
            <input
                type="email"
                placeholder='email...'
                required
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
                type="password"
                placeholder='password...'
                required
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button>Login</button>
            <span onClick={() => setRegisterStatus(true)}>Register Page</span>
        </form>
    )
}

export default Login