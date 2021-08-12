import React, {useState} from 'react'
import '../styles/App.css'
import Welcome from './Welcome';
import Login from './Login';

const App = () => {

  const [user, setUser] = useState(null);

  return (
    <div>
      {user?<Welcome/>:<Login/>}
    </div>
  )
}

export default App
