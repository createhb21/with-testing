import * as React from 'react';

import type { FullScreenProps } from './FullScreen.types';

function FullScreen(props: FullScreenProps, ref: React.Ref<HTMLElement>) {
  const { as = 'div', width = '100%', height = '100vh', children, className } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className,
      style: {
        width,
        height,
        ...props.style,
      },
    },
    children,
  );
}

const _FullScreen = React.forwardRef(FullScreen);
export { _FullScreen as FullScreen };
