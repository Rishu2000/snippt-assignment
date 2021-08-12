import React from 'react'

const Login = () => {

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
}

    return (
        <div style={{height:"100vh", display: 'flex', justifyContent: 'center', paddingTop:60}}>
           <form onSubmit={handleSubmit} style={{width:'400px'}}>
            <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control"/>
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"/>
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
           </form> 
        </div>
    )
}

export default Login
