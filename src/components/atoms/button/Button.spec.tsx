import React from 'react';

import { render, screen, fireEvent } from '@/utils/test/testUtils';

import { Button } from './Button'; // Button 컴포넌트 가져오기

describe('Button Component Tests', () => {
  it('renders with default props', () => {
    const args = {
      children: 'Click me',
    };

    render(<Button {...args} />);

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const args = {
      onClick: handleClick,
      children: 'Click me',
    };

    render(<Button {...args} />);
    const buttonElement = screen.getByText('Click me');

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when isDisabled is true', () => {
    const args = {
      isDisabled: true,
      children: 'Disabled',
      'data-testid': 'disabled',
    };

    render(<Button {...args} />);
    const buttonElement = screen.getByTestId('disabled');

    expect(buttonElement).toBeDisabled();
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveAttribute('disabled');
  });

  it('sets data-loading attribute when isLoading is true', () => {
    const args = {
      isLoading: true,
      children: 'Loading',
      'data-testid': 'loading',
    };

    render(<Button {...args} />);
    const buttonElement = screen.getByTestId('loading');

    expect(buttonElement).toHaveAttribute('data-loading', 'true');
  });

  it('handles Enter key press', () => {
    const handleClick = jest.fn();
    const args = {
      onClick: handleClick,
      children: 'Press Enter',
    };

    render(<Button {...args} />);
    const buttonElement = screen.getByText('Press Enter');

    fireEvent.keyDown(buttonElement, { key: 'Enter', code: 'Enter', keyCode: 13 });

    expect(handleClick).toHaveBeenCalled();
  });

  it('does not call onClick when Enter key is pressed if disabled', () => {
    const handleClick = jest.fn();
    const args = {
      onClick: handleClick,
      isDisabled: true,
      children: 'Disabled',
    };

    render(<Button {...args} />);
    const buttonElement = screen.getByText('Disabled');

    fireEvent.keyDown(buttonElement, { key: 'Enter', code: 'Enter', keyCode: 13 });

    expect(handleClick).not.toHaveBeenCalled();
  });
});
