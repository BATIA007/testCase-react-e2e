import React, { useEffect, useState } from 'react';
import { UserTestComponent } from "./User";

export const UserTest = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = () => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          setUsers(json)
          setIsLoading(false)
        }, 1000)
      })
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const onDelete = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div>
      {isLoading && <h1 id="user-loading">Loading</h1>}
      {users.length && (
        <ul id="user-list">
          {users.map(user => (
            <UserTestComponent key={user.id} handleDelete={onDelete} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
};