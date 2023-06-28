import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const User = () => {
  const [users, setUsers] = useState(null)

  const fetchUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      {users && users?.map(user => (
        <Link data-testid='user-link' to={`/users/${user.id}`} key={user.id}>{user.name}</Link>
      ))}
    </div>
  )
}
