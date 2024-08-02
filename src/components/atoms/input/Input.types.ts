import type { ComponentPropsWithoutRef } from 'react';

type Size = 'lg' | 'md' | 'sm' | 'xs';

export type InputProps = UseInputProps & {
  color?: string;
  placeholderColor?: string;
  size?: Size;
  variant?: 'outline' | 'filled';
};

export type UseInputProps = {
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  value?: string;
} & Omit<ComponentPropsWithoutRef<'input'>, 'disabled' | 'readOnly'>;

export type UseInputResult = {
  inputProps: ComponentPropsWithoutRef<'input'> & {
    'data-disabled': boolean;
    'data-invalid': boolean;
    'aria-invalid': boolean;
    'aria-required': boolean;
  };
  valueCount: number;
};
