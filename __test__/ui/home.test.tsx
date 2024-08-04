import { theme } from '@/styles';
import { render } from '@/utils/test/testUtils';

import Home from 'pages';
import { ThemeProvider } from 'styled-components';

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
