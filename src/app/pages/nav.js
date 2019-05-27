import React from 'react';

export default () => (
  <div className="container">
    <h2>Nav</h2>
    <p />

    <nav style={{ position: 'relative', zIndex: 9 }}>
      <a href="#" className="brand">
        <img className="logo" alt="logo" src="assets/branding/kiscss.svg.png" />
      </a>
      {/* <!-- responsive--> */}
      <input id="demo-nav" type="checkbox" className="show" />
      <label htmlFor="demo-nav" className="burger icon-menu" />

      {/* what happens when you have more than 6 items? */}
      <ul className="menu">
        <li><a href="#" className="icon-login">Login</a></li>
        <li><a href="#" className="icon-logout">Logout</a></li>
        <li><a href="#" className="icon-cog">Settings</a></li>
        <li><a href="#" className="icon-cloud">Cloud</a></li>
        <li><a href="#" className="icon-user-add">Add User</a></li>
        <li><a href="#" className="icon-user-remove">Remove User</a></li>
        <li><a href="#" className="icon-list">List</a></li>
      </ul>
    </nav>
  </div>
);
