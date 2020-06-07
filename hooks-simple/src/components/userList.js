import React from 'react'
import UseResources from './useResources'

const UserList = () => {
    const users = UseResources('users')
    return(
        <ul>
            {users.map(
                user => (
                <li key={user.key}>{user.name}</li>
                )
            )}
        </ul>
    )
}
export default UserList