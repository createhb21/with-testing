import * as React from 'react';

import { FormField } from '@/components/molecules';
import { Input } from '@/components/atoms';

import type { InputFieldProps } from './InputField.types';

function InputField(props: InputFieldProps, ref: React.Ref<HTMLInputElement>) {
  const { label, isRequired, ...inputRest } = props;
  const { variant = 'filled' } = inputRest;

  return (
    <FormField label={label} isRequired={isRequired}>
      <Input ref={ref} {...inputRest} isRequired={isRequired} variant={variant} />
    </FormField>
  );
}

const _InputField = React.forwardRef(InputField);
if (process.env.NODE_ENV === 'development') {
  _InputField.displayName = '_InputField';
}
export { _InputField as InputField };
