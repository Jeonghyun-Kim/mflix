import styled from 'styled-components';

export const Root = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.35);
  color: var(--text-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
`;

export const Container = styled.div`
  background-color: var(--primary);
  padding: 3rem;
  border: 1px solid var(--accents-2);
`;
