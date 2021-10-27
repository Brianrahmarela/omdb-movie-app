import React from 'react';
import UserList from '../components/UserList';
import UserListHooks from '../components/UserListHooks';


function UserPage() {
  return (
    <div>
      <h1>User Page</h1>
      <UserList/>
      <p>Hooks</p>
      <UserListHooks/>
    </div>
  )
}

export default UserPage
