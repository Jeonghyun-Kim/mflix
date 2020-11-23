import '@assets/main.css';

import React from 'react';
import type { AppProps } from 'next/app';

import ManagedUIContext from '@components/ui/context';
import { Head } from '@components/core';

const Noop: React.FC = ({ children }) => <>{children}</>;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  );
};

export default MyApp;
