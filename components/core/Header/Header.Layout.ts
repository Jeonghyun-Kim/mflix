import styled from 'styled-components';

export const Root = styled.div`
  .logo {
    cursor: pointer;
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }

  .link {
    display: inline-flex;
    align-items: center;
    color: var(--accents-6);
    line-height: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      color: var(--accents-9);
    }
    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      color: var(--accents-8);
    }
  }
`;
