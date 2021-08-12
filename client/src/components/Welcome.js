import React, {useState} from 'react'
import axios from 'axios'

const Welcome = ({user,setUser}) => {

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const [day, setDay] = useState(null);
    const [time, setTime] = useState(null);
    const [slotError, setSlotError] = useState(null);
    const [slotSuccess, setSlotSuccess] = useState(null);

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
        axios.post('/login/welcome',{username:user, day, time}).then((res) => {
            setSlotError(null);
            console.log(res.data.Message);
            setSlotSuccess(res.data.Message);
        }).catch((err) => {
            //console.dir(err);
            setSlotError(err.response.data.Message);
            setSlotSuccess(null);
        })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', paddingTop:60}}>
            <div style={{width: "300px"}}>
                <p>Welcome {user}</p>
                <form onSubmit={handleSubmit}>
                {slotError && (
                    <div className="alert alert-danger">{slotError}</div>
                )}
                {slotSuccess && (
                    <div className="alert alert-success">{slotSuccess}</div>
                )}
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
