import styled from 'styled-components';

export const Root = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  z-index: 50;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-left: 2.5rem;
  max-width: 100%;
  display: flex;
  outline: none;
`;
