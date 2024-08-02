// Input.test.tsx

import React from 'react';
import { render, screen, userEvent } from '@/utils/test/testUtils';

import { Input } from './Input';

describe('Input Component Tests', () => {
  it('renders with default state', async () => {
    const args = {
      placeholder: 'Default Input',
    };

    render(<Input {...args} />);

    expect(screen.getByPlaceholderText('Default Input')).toBeInTheDocument();
  });

  it('displays the provided value', async () => {
    const args = {
      value: 'Test Value',
      placeholder: 'Default Input',
      onChange: jest.fn(),
    };

    render(<Input {...args} />);

    const inputElement = screen.getByPlaceholderText('Default Input');
    expect(inputElement).toHaveValue('Test Value');
  });

  it('calls onChange when value changes in controlled mode', async () => {
    const handleChange = jest.fn();
    const args = {
      placeholder: 'Please enter',
      value: '',
      onChange: handleChange,
    };

    render(<Input {...args} />);
    const inputElement = screen.getByPlaceholderText('Please enter') as HTMLInputElement;

    await userEvent.type(inputElement, 'New Value');

    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledTimes(9); // 'New Value' is 9 characters
  });

  it('renders defaultValue in uncontrolled mode', () => {
    const args = {
      placeholder: 'Default Input',
      defaultValue: 'Initial Value',
    };

    render(<Input {...args} />);

    const inputElement = screen.getByPlaceholderText('Default Input');
    expect(inputElement).toHaveValue('Initial Value');
  });

  it('is disabled when isDisabled is true', async () => {
    const args = {
      placeholder: 'Disabled Input',
      isDisabled: true,
    };

    render(<Input {...args} />);

    const inputElement = screen.getByPlaceholderText('Disabled Input');
    expect(inputElement).toBeDisabled();
  });

  it('sets aria-invalid when isInvalid is true', async () => {
    const args = {
      placeholder: 'Invalid Input',
      isInvalid: true,
    };

    render(<Input {...args} />);

    const inputElement = screen.getByPlaceholderText('Invalid Input');
    expect(inputElement).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders default value when defaultValue is set', async () => {
    const args = {
      defaultValue: 'Initial Value',
      placeholder: 'Default Input',
    };

    render(<Input {...args} />);

    const inputElement = screen.getByPlaceholderText('Default Input');
    expect(inputElement).toHaveValue('Initial Value');
  });
});
