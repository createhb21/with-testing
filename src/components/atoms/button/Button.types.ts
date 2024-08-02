import type { ComponentPropsWithoutRef } from 'react';

export type ButtonProps = {
  color?: string;
  enableColor?: string;
  hoverColor?: string;
  activeColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'ghost';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type UseButtonReturn = {
  buttonProps: ComponentPropsWithoutRef<'button'> & {
    role?: string;
    type?: 'button' | 'submit' | 'reset';
    tabIndex?: number;
    disabled?: boolean;
    'data-loading'?: boolean;
  };
};
