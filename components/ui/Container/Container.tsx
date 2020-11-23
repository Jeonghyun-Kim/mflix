import React from 'react';
import cn from 'classnames';

import { Root } from './Container.styles';

interface Props {
  className?: string;
  children?: any;
  full?: boolean;
}
const Container: React.FC<Props> = ({ children, className, full }) => {
  return (
    <Root
      className={cn(className, {
        full: full,
      })}
    >
      {children}
    </Root>
  );
};

export default Container;
