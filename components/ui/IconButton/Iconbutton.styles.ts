import styled from 'styled-components';

export const Root = styled.div`
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;

  &:hover {
    background-color: var(--accents-1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(118, 169, 250, 0.45);
  }
`;
