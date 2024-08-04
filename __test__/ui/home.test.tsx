import { ThemeProvider } from 'styled-components';

import Home from 'pages';

import { theme } from '@/styles';
import { render } from '@/utils/test/testUtils';

describe('HomePage', () => {
  const renderHomePage = () => render(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>,
  );

  it('Should be visible "Sign In"', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Sign In');
  });
});
