import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface Props extends NextLinkProps {
  className?: string;
}
const Link: React.FC<Props> = ({ href, children, className, ...props }) => (
  <NextLink href={href}>
    <a className={className} {...props}>
      {children}
    </a>
  </NextLink>
);

export default Link;
