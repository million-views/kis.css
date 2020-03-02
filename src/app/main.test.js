import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('Application', () => {
  it('should render the page', () => {
    const { container } = render(<App />);
    expect(container.childElementCount).toEqual(2);
  });
});
