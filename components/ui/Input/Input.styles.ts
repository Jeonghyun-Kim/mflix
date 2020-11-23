import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  label {
    line-height: 1.125rem;
    margin-bottom: 0.75rem;
    font-size: 1rem;
    font-weight: 400;
  }

  input {
    color: var(--accents-6);
    border: 1px solid var(--accents-3);
    background-color: var(--primary);
    padding: 0.5rem 2.5rem 0.5rem 1.5rem;
    width: 100%;
    appearance: none;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(159, 166, 178, 0.45);
    }
  }

  &.required {
    label {
      font-weight: 500;
    }

    input {
      border-color: var(--accents-6);
    }
  }

  &.error {
    label {
      color: var(--red);
      font-weight: 500;
    }

    input {
      border-color: var(--red);
      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(218, 60, 60, 0.45);
      }
    }
  }
`;
