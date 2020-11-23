import React from 'react';
import cn from 'classnames';

import { Root } from './Iconbutton.styles';

interface Props {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}
const IconButton: React.FC<Props> = ({
  onClick = () => {},
  className,
  children,
  ...props
}) => {
  return (
    <Root
      className={cn(className, 'transition duration-150 ease-in-out')}
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
        else if (e.key === 'Escape') e.currentTarget.blur();
      }}
      {...props}
    >
      {children}
    </Root>
  );
};

export default IconButton;
