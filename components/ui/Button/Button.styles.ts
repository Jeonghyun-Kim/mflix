import styled from 'styled-components';

export const Root = styled.button`
  background-color: var(--secondary);
  color: var(--accents-1);
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 5px;
  line-height: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  font-weight: 400;
  text-transform: uppercase;
  border-width: 1px;
  border-color: transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    background-color: var(--accents-0);
    color: var(--text-primary);
    border-width: 1px;
    border-color: var(--secondary);
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(118, 169, 250, 0.45);
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &[data-active] {
    background-color: rgba(75, 85, 99, 1);
  }

  &.loading {
    background-color: var(--accents-1);
    color: var(--accents-3);
    border-color: var(--accents-2);
    cursor: not-allowed;
  }

  &.slim {
    padding: 4px 10px;
    transform: none;
    text-transform: none;
  }

  &.disabled,
  &.disabled:hover {
    color: var(--accents-4);
    border-color: var(--accents-2);
    background-color: var(--accents-1);
    cursor: not-allowed;
    filter: grayscale(1);
    transform: translateZ(0);
    perspective: 1000;
    backface-visibility: hidden;
  }
`;
