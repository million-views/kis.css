import React from 'react';
import { render } from 'react-dom';

// NOTE:
// - do not import main.scss in this module
// - main.scss is an entry point and is inlined
// - main.scss should typically contain critical PRPL related css
import App from './App.js';

render(
  <App />,
  document.getElementById('root')
);
