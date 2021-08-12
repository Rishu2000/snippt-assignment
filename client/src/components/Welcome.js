import React, {useState} from 'react'
import axios from 'axios'

const Welcome = ({user,setUser}) => {

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const [day, setDay] = useState(null);
    const [time, setTime] = useState(null);

    const handleLogout = (e) => {
        e.preventDefault();
        axios.get('/logout').then((res) =>{
            setUser(null);
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('day= '+day+"Time= "+time);
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', paddingTop:60}}>
            <div style={{width: "300px"}}>
                <p>Welcome {user}</p>
                <form onSubmit={handleSubmit}>
                <select className="form-select mb-3" onChange={(e) => setDay(e.target.value)}>
                    <option selected>Select Day</option>
                    {days.map((day,key) => (
                        <option value={day} key={key}>{day}</option>
                    ))}
                </select>
                <select className="form-select mb-3" onChange={(e) => setTime(e.target.value)}>
                    <option selected>Select Slot</option>
                    <option value="1 to 2">1 to 2</option>
                    <option value="4 to 5">4 to 5</option>
                    <option value="6 to 7">6 to 7</option>
                </select>
                <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
            <div style={{marginLeft:30}}>
                <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Welcome
