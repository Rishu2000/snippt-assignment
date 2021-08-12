import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../styles/App.css'
import Welcome from './Welcome';
import Login from './Login';

const App = () => {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/login').then((res) => {
      setUser(res.data.Message);
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      {user?<Welcome user={user} setUser={setUser}/>:<Login setUser={setUser} error={error} setError={setError}/>}
    </div>
  )
}

export default App
