import React from 'react';

export default () => (
  <div className="container" style={{ textAlign: 'center' }}>
    <h2>Tooltip</h2>
    <p />
    <button data-tooltip="This is a great tooltip" data-tooltip-left>
      Left
    </button>
    <button data-tooltip="This is a great tooltip" data-tooltip-bottom>
      Bottom
    </button>
    <button data-tooltip="This is a great tooltip" data-tooltip-top>
      Top
    </button>
    <button data-tooltip="This is a great tooltip" data-tooltip-right>
      Right
    </button>
    <br /><br /><br />
  </div>
);
