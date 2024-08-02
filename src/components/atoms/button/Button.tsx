import * as React from 'react';

import { useButton } from './Button.hooks';
import type { ButtonProps } from './Button.types';

function Button(props: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
  const { buttonProps } = useButton(props);
  const { children, className } = props;

  return (
    <button {...buttonProps} ref={ref} className={className}>
      {/* {isLoading && <div className={spinnerStyle({ size })} />} */}
      {/* {leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>} */}
      <span>{children}</span>
      {/* {rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>} */}
    </button>
  );
}

const _Button = React.forwardRef(Button);
if (process.env.NODE_ENV === 'development') {
  _Button.displayName = 'Button';
}
export { _Button as Button };
