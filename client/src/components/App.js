import React, {useState} from 'react'
import '../styles/App.css'
import Welcome from './Welcome';
import Login from './Login';

const App = () => {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div>
      {user?<Welcome user={user}/>:<Login setUser={setUser} error={error} setError={setError}/>}
    </div>
  )
}

export default App
