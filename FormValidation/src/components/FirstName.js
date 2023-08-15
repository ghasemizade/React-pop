import React from "react"


export default function FirstName({value, onChange}) {
        
        return (
            <input value={value} type="text" placeholder="firstname" style={{
                margin: "20px",
                padding: "10px",
                background: "#eee"
            }} onChange={onChange}></input>
        )
      
        }

      





