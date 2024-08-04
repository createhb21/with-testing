import React, { PropsWithChildren } from 'react';
import { background, wrap, backgroundCover } from './Dim.styled';

interface Props {
  opacity?: number;
  isWhite?: boolean;
}

export function Dim({ opacity = 0, isWhite = false, children }: PropsWithChildren<Props>) {
  return (
    <div css={wrap}>
      <div css={backgroundCover(opacity, isWhite)} />
      <div css={background}>{children}</div>
    </div>
  );
}
