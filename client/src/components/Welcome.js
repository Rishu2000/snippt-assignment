import React from 'react'

const Welcome = ({user}) => {
    return (
        <div style={{height:"100vh", display: 'flex', justifyContent: 'center', paddingTop:60}}>
            Welcome {user}
        </div>
    )
}

export default Welcome
