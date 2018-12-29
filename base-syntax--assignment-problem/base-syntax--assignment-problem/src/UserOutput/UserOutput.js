import React from 'react'

const userOutput = (props) => {
    return (
        <div>
            <p>This is my username : </p>
            <p>{props.username}</p>
        </div>
    )
}

export default userOutput;