import React from 'react';

export default () => (
  <div className="container">
    <h2 id="input-test">Input</h2>
    <p />

    <form>
      <div className="flex two">
        <label aria-describedby="input-test">
          <input placeholder="Full name" />
        </label>
        <label aria-describedby="input-test">
          <input type="number" placeholder="Number" />
        </label>
      </div>
      <div className="flex two">
        <label aria-describedby="input-test">
          <input type="email" placeholder="Email" />
        </label>
        <label aria-describedby="input-test">
          <input type="password" placeholder="Password" />
        </label>
      </div>
      <div className="flex two">
        <label aria-describedby="input-test">
          <input type="file" />
        </label>
        <label aria-describedby="input-test">
          <input type="color" />
        </label>
      </div>
      <div className="flex one">
        <label aria-describedby="input-test">
          <textarea placeholder="Full description" />
        </label>
      </div>
    </form>
  </div>
);
