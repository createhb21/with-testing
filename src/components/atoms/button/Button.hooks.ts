import type { KeyboardEvent } from 'react';
import type { ButtonProps, UseButtonReturn } from './Button.types';

export const useButton = (props: ButtonProps): UseButtonReturn => {
  const { isDisabled, isLoading, tabIndex, onKeyDown, type = 'button' } = props;

  const disabled = isDisabled || isLoading;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);

    if (event.key === 'Enter' || event.key === '13') {
      if (disabled) return;
      if (event.defaultPrevented) return;

      event.preventDefault();
      event.currentTarget.click();
    }
  };

  const buttonProps = {
    ...props,
    type: type ?? 'button',
    disabled,
    'data-loading': isLoading,
    tabIndex: disabled ? undefined : (tabIndex ?? 0),
    onKeyDown: handleKeyDown,
  };

  return {
    buttonProps,
  };
};
