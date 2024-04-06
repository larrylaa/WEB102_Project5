import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '10px 0' }}>
          <Link to="/" style={{ fontSize: '30px', fontWeight: '400', color: 'black' }}>🏠 Home</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to="/" style={{ fontSize: '30px', fontWeight: '400', color: 'black'}}>🔎 Search</Link>
        </li>
        <li style={{ margin: '10px 0' }}>
          <Link to="/about" style={{ fontSize: '30px', fontWeight: '400', color: 'black'}}>🛈 About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
