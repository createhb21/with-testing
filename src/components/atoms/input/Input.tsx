import * as React from 'react';

import { useInput } from './Input.hooks';
import type { InputProps } from './Input.types';

function Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  const { className, ...rest } = props;
  const { inputProps } = useInput(rest);

  return <input {...inputProps} ref={ref} spellCheck="false" className={className} />;
}

const _Input = React.forwardRef(Input);
if (process.env.NODE_ENV === 'development') {
  _Input.displayName = 'Input';
}
export { _Input as Input };
