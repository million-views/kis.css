import React from 'react';

export default () => (
  <div className="container">
    <h2>Label</h2>
    <p />
    <div>
      <h1>h1 is important<span className="label">Normal</span></h1>
      <h2>h2 is important too<span className="label success">Success</span></h2>
      <h3>Is h3 important?<span className="label warning">Warning</span></h3>
      <h4>h4 is not so important<span className="label error">Error</span></h4>
      <p>p is normal text<span className="label">Normal</span></p>
    </div>
  </div>
);
