import React from 'react'

const userInput = (props) => {
    return (
        <div>
            <input style = {{
                textAlign:"center",
                borderRadius: 3
            }} type="text" onChange={props.change} value={props.username}/>
        </div>
    )
}

export default userInput;