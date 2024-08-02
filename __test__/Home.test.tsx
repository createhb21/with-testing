import { render } from '@testing-library/react';
import Home from 'pages';

describe('HomePage', () => {
  const renderHomePage = () => render(<Home />);

  it('Should be visible "app/page.tsx"', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('src/pages/index.tsx');
  });
});
