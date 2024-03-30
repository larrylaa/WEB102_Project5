import React from 'react';

function Nav() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <nav>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '10px 0' }}>
          <a href="#" style={{ fontSize: '30px', fontWeight: '400', color: 'black' }} onClick={refreshPage}>🏠 Home</a>
        </li>
        <li style={{ margin: '10px 0' }}>
          <a href="#" style={{ fontSize: '30px', fontWeight: '400', color: 'black'}} onClick={refreshPage}>🔍 Search</a>
        </li>
        <li style={{ margin: '10px 0' }}>
          <a href="#" style={{ fontSize: '30px', fontWeight: '400', color: 'black'}} onClick={refreshPage}>🛈 About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
