import React from 'react'
import axios from 'axios'

const Welcome = ({user,setUser}) => {

    const handleLogout = (e) => {
        e.preventDefault();
        axios.get('/logout').then((res) =>{
            setUser(null);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', paddingTop:60}}>
            <div>
                <p>Welcome {user}</p>
                <input type="select"/>
                <input type="select"/>
            </div>
            <div style={{marginLeft:30}}>
                <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Welcome
