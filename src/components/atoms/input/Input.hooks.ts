import { type ChangeEvent, useState } from 'react';
import type { UseInputProps, UseInputResult } from './Input.types';

export const useInput = (props: UseInputProps): UseInputResult => {
  const {
    isInvalid = false,
    isReadOnly = false,
    isRequired = false,
    isDisabled = false,
    defaultValue,
    value,
    onChange,
    ...rest
  } = props;

  const isControlled = value !== undefined && onChange !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (isControlled) {
      onChange(event);
    } else {
      setUncontrolledValue(event.target.value);
    }
  };

  const currentValue = isControlled ? value : uncontrolledValue;

  return {
    inputProps: {
      ...rest,
      defaultValue,
      value: currentValue,
      onChange: handleChange,
      disabled: isDisabled,
      readOnly: isReadOnly,
      'data-invalid': isInvalid,
      'aria-invalid': isInvalid,
      'aria-required': isRequired,
      'data-disabled': isDisabled,
    },
    valueCount: currentValue.toString().length,
  };
};
