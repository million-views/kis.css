import React from 'react';

export default () => (
  <div className="container">
    <h2>Button types and colors</h2>
    <p />
    <div>
      <button>Button</button>
      <button className="success">Button</button>
      <button className="warning">Button</button>
      <button className="error">Button</button>
      <button className="pseudo">Button</button>
      <button disabled>Button</button>
    </div>

    <div>
      <a className="button">Link</a>
      <a className="button success">Link</a>
      <a className="button warning">Link</a>
      <a className="button error">Link</a>
      <a className="button pseudo">Link</a>
      <a className="button" disabled>Link</a>
    </div>

    <div>
      <input type="submit" value="Submit" />
      <input type="submit" className="success" value="Submit" />
      <input type="submit" className="warning" value="Submit" />
      <input type="submit" className="error" value="Submit" />
      <input type="submit" className="pseudo" value="Submit" />
      <input disabled type="submit" value="Submit" />
    </div>

    <div>
      <label>
        <input type="checkbox" />
        <span className="toggle button">Toggle</span>
      </label>
      <label>
        <input type="checkbox" />
        <span className="toggle button success">Toggle</span>
      </label>
      <label>
        <input type="checkbox" />
        <span className="toggle button warning">Toggle</span>
      </label>
      <label>
        <input type="checkbox" />
        <span className="toggle button error">Toggle</span>
      </label>
      <label>
        <input type="checkbox" />
        <span className="toggle button pseudo">Toggle</span>
      </label>
      <label>
        <input disabled type="checkbox" />
        <span disabled className="toggle button">Toggle</span>
      </label>
    </div>
  </div>
);
