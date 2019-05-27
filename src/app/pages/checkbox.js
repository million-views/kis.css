import React from 'react';

export default () => (
  <div className="container">
    <h2>Checkbox</h2>
    <p />
    <label>
      <input type="checkbox" />
      <span className="checkable">Check me out (;</span>
    </label>
    <br />
    <input id="checktest" type="checkbox" defaultChecked />
    <label htmlFor="checktest" className="checkable">Uncheck me</label>
  </div>
);
