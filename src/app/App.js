import React from 'react';

import TypographyTest from './pages/typography';
import ButtonTest from './pages/button';
import CardTest from './pages/card';
import CheckboxTest from './pages/checkbox';
import DropZoneTest from './pages/dropzone';
import FlexTest from './pages/flex';
import MoreFlexTest from './pages/more-flex';
import InputTest from './pages/input';
import LabelTest from './pages/label';
import ModalTest from './pages/modal';
import NavigationTest from './pages/nav';
import RadioButtonTest from './pages/radio-button';
import SelectTest from './pages/select';
import StackTest from './pages/stack';
import TableTest from './pages/table';
import TabsTest from './pages/tabs';
import ToolTipTest from './pages/tooltip';

// css module
import './App.scss';
const logo = new URL('../web/assets/branding/kiscss.svg.png', import.meta.url);

const Header = () => (
  <nav>
    <a href="index.html" className="brand">
      <img className="logo" alt="logo" height="2.4rem" src={logo} />
    </a>
    <input id="nav" type="checkbox" className="show" />
    <label htmlFor="nav" className="burger icon-menu" />
    <ul className="menu">
      <li>
        <a href="kitchen-sink.html" className="icon-docs">Kitchen-Sink-Test</a>
      </li>
      <li>
        <a
          href="https://github.com/million-views/kis.css"
          target="_blank"
          rel="noreferrer noopener"
          className="icon-puzzle"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://github.com/million-views/kis.css/blob/master/README.md"
          className="icon-help"
        >Documentation
        </a>
      </li>
    </ul>
  </nav>
);

const App = () => {
  return (
    <>
      <Header />
      <main className="intro test">
        <h1>Keep it Simple CSS</h1>
        <blockquote>
          <p>
            Simplicity is the glory of expression.
          </p>
          <cite>Walt Whitman</cite>
        </blockquote>
        <br />
        <TypographyTest />
        <hr />
        <ButtonTest />
        <hr />
        <CardTest />
        <hr />
        <CheckboxTest />
        <hr />
        <DropZoneTest />
        <hr />
        <FlexTest />
        <hr />
        <MoreFlexTest />
        <hr />
        <InputTest />
        <hr />
        <LabelTest />
        <hr />
        <ModalTest />
        <hr />
        <NavigationTest />
        <hr />
        <RadioButtonTest />
        <hr />
        <SelectTest />
        <hr />
        <StackTest />
        <hr />
        <TableTest />
        <hr />
        <TabsTest />
        <hr />
        <ToolTipTest />
        <hr />
      </main>
    </>
  );
};

export default App;
