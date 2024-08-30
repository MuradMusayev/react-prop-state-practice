import React, { useState } from 'react'

function Register({ setRegisterStatus }) {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    })

    function createUser(e){
        e.preventDefault()
        fetch(`http://localhost:3000/users?email=${formData.email}).then(res=>res.json()`)
        .then(data=>{
            if (!data.length) {
                fetch("http://localhost:3000/users",{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(formData)
        
                }).then(res=>{
                    console.log(res);
                    
                    if (res.ok){
                        setRegisterStatus(false)
                    }else{
                        alert("Ugursuz emeliyyat!")
                    }
                }
            )
            }else{
                alert("Istifadeci movcuddur!")
            }
        })
       
    }
    return (
        <form onSubmit={createUser}>
            <h2>Register</h2>
            <input
                type="text"
                placeholder='fullname...'
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
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
            <button>Register</button>
            <span onClick={() => setRegisterStatus(false)}>Login Page</span>
        </form>
    )
}

export default Register