/* eslint-disable import/no-extraneous-dependencies */
import { cleanup, render } from '@testing-library/react';

import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
