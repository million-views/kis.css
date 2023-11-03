import React from 'react';
// import { render } from 'react-dom';
import {createRoot} from 'react-dom/client';

// NOTE:
// - do not import main.scss in this module
// - main.scss is an entry point and is inlined
// - main.scss should typically contain critical PRPL related css
import App from './App.js';

// render(
//   <App />,
//   document.getElementById('root')
// );

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
