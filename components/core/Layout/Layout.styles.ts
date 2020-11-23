import styled from 'styled-components';

export const Root = styled.div.attrs({
  className: 'transition-colors duration-150',
})`
  height: 100%;
  max-width: 2460px;
  background-color: var(--primary);
`;

export const Main = styled.main`
  height: calc(100vh - 80px);
`;
