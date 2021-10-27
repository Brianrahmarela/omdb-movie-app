import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <Link to='/'>Home</Link>
      <Link to='/detail-movie'>Detail Movie</Link>
      <Link to='/user-page-context'>User Context</Link>
    </div>
  )
}

export default Header
