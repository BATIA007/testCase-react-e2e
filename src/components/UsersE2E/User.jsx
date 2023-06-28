import React from 'react'

export const UserTestComponent = ({ user, handleDelete }) => {
  return (
    <li>
      <p id="user-name">{user.name}</p>
      <button id='user-delete' onClick={() => handleDelete(user.id)}>Delete user {user.id}</button>
    </li>
  )
}
