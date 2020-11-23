import React, { ButtonHTMLAttributes, JSXElementConstructor } from 'react';
import mergeRefs from 'react-merge-refs';
import cn from 'classnames';
import { useButton } from '@react-aria/button';
import { LoadingDots } from '@components/ui';

import { Root } from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'flat' | 'slim';
  active?: boolean;
  type?: 'submit' | 'reset' | 'button';
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = React.forwardRef((props, buttonRef) => {
  const {
    className,
    variant = 'flat',
    children,
    active,
    onClick,
    width,
    loading = false,
    disabled = false,
    style = {},
    ...rest
  } = props;
  const ref = React.useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(
    {
      ...rest,
      // @ts-ignore onClick === onPress for our purposes
      onPress: onClick,
      isDisabled: disabled,
      elementType: 'button',
    },
    ref
  );

  const rootClassName = cn(
    'button-root',
    'transition',
    'ease-in-out',
    'duration-150',
    {
      slim: variant === 'slim',
      loading: loading,
      disabled: disabled,
    }
  );

  return (
    <Root
      aria-pressed={active}
      data-variant={variant}
      ref={mergeRefs([ref, buttonRef])}
      {...buttonProps}
      data-active={isPressed ? '' : undefined}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
    >
      {loading ? (
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      ) : (
        children
      )}
    </Root>
  );
});

export default Button;
