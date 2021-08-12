import React, {useState} from 'react'
import axios from 'axios';

const Login = () => {

const [username, setUsername] = useState(null);
const [password, setPassword] = useState(null);

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/login',{username,password}).then((res) => {
        console.log(res.data.Message);
    }).catch((err) => {
        console.log(err);
    })
}

    return (
        <div style={{height:"100vh", display: 'flex', justifyContent: 'center', paddingTop:60}}>
           <form onSubmit={handleSubmit} style={{width:'400px'}}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)}/>
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
           </form> 
        </div>
    )
}

export default Login
