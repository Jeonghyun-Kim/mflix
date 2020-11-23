import React from 'react';
// import cn from 'classnames';
import { Layout, Search } from '@components/core';
import styled from 'styled-components';

const Root = styled.div``;

export default function Home() {
  return (
    <Root className="mx-auto max-w-screen-xl px-2 pt-10 pb-20">
      <Search />
    </Root>
  );
}

Home.Layout = Layout;
