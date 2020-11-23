import React from 'react';
import NextHead from 'next/head';
import { DefaultSeo } from 'next-seo';
import { createGlobalStyle } from 'styled-components';
import { globalCSS } from '@assets/GlobalStyles';
import config from '@config/seo.json';

const GlobalStyle = createGlobalStyle`
  ${globalCSS}
`;

const Head: React.FC = () => (
  <>
    <GlobalStyle />
    <DefaultSeo {...config} />
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  </>
);

export default Head;
