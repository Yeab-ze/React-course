import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
  if(loggedIn && isAdmin) {
    return <h2>welcome admin</h2>
  } else {
    return <h2>welcome user</h2>
  }
}

export default UserStatus