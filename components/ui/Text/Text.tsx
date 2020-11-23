import React from 'react';

import { Body, Heading, PageHeading, SectionHeading } from './Text.styles';

export type TextVariant = 'heading' | 'body' | 'pageHeading' | 'sectionHeading';

interface Props {
  variant?: TextVariant;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
const Text: React.FC<Props> = ({
  variant = 'body',
  className,
  style,
  children,
  ...props
}) => {
  const Component = React.useMemo(() => {
    switch (variant) {
      case 'body': {
        return Body;
      }
      case 'heading': {
        return Heading;
      }
      case 'pageHeading': {
        return PageHeading;
      }
      case 'sectionHeading': {
        return SectionHeading;
      }
    }
  }, []);

  return (
    <Component className={className} style={style} {...props}>
      {children}
    </Component>
  );
};

export default Text;
