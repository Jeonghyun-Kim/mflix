import React from 'react';
import cn from 'classnames';

import { Root } from './Input.styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  name?: string;
  required?: boolean;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<Props> = ({
  className,
  label,
  name = label,
  required,
  error = false,
  onChange,
  ...props
}) => {
  return (
    <Root className={cn({ error, required })}>
      <label htmlFor={name}>
        {label}
        {required && ' (*)'}
      </label>
      <input
        name={name}
        className={cn(className, 'transition duration-150 ease-in-out')}
        onChange={onChange}
        {...props}
      />
    </Root>
  );
};

export default Input;
