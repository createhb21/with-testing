import React, { PropsWithChildren } from 'react';
import { Portal, Dim } from '@/components/atoms';

import IconClose from '@/static/icons/system/IconClose';
import { IDialogProps } from './Dialog.types';
import useDisableScroll from './Dialog.hooks';
import { closeStyle, contents } from './Dialog.styled';

export function Dialog({
  children,
  handleClose,
  opacity = 0,
}: PropsWithChildren<IDialogProps>) {
  useDisableScroll();

  return (
    <Portal>
      <Dim opacity={opacity}>
        <div css={contents}>
          <button css={closeStyle} type="button" onClick={handleClose}>
            <IconClose />
          </button>
          <div>{children}</div>
        </div>
      </Dim>
    </Portal>
  );
}
