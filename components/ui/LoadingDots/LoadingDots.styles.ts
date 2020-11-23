import styled from 'styled-components';
import { blink } from '@components/ui/keyframes';

export const Root = styled.span`
  display: inline-flex;
  text-align: center;
  align-items: center;
`;

export const Dot = styled.span`
  width: 2px;
  height: 2px;
  background-color: var(--accents-6);
  border-radius: 50%;
  animation-name: ${blink};
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  margin: 0 2px;
  &:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.4s;
  }
`;
