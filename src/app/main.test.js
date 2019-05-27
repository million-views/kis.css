import React from 'react';
import { render } from 'react-testing-library';

import App from './App';

describe('Application', () => {
  it('should render the page', () => {
    const { container } = render(<App />);
    expect(container.childElementCount).toEqual(2);
  });
});
