import React from 'react';

export default () => (
  <div className="container">
    <h2>Radio button</h2>
    <p />
    <label>
      <input type="radio" name="radiodemo" />
      <span className="checkable">Select me</span>
    </label>
    <br />
    <label>
      <input defaultChecked type="radio" name="radiodemo" />
      <span className="checkable">Or me</span>
    </label>
  </div>
);
