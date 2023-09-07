import { useEffect, useState } from 'react'

type objectProps = {
  firstName: string
  email: string
}

export default function Show({}: objectProps) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://dashboard-ed4b9-default-rtdb.firebaseio.com/users.json')
          .then(response => response.json())
          .then(data => {
            setUsers(data)
            // console.log(Object.entries(data));
          })
        }, [users])
        console.log(Object.entries(users)[0][1])
        
        return (
    <div></div>
  )
}
