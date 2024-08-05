import React, { PropsWithChildren } from 'react';

import { Header } from '@/components/organism';

export function Layout({ children }:PropsWithChildren) {
  return (
    <>
      <Header />
      <main css={{ marginTop: '60px' }}>
        {children}
      </main>
      {/* {isOpenAlert && (
        <UiComponent.Alert title={alertTitle} handleClose={() => dispatch(closeAlert())}>
          {alertContent}
        </UiComponent.Alert>
      )} */}
      {/* {loading && <UiComponent.Loading />} */}
    </>
  );
}
