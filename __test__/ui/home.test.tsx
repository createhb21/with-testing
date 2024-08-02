import { render } from '@testing-library/react';

import Home from 'pages';

describe('HomePage', () => {
  const renderHomePage = () => render(<Home />);

  it('Should be visible "Sign In"', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Sign in');
  });
});
