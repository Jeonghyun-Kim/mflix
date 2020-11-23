import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { Link, LogoSquared } from '@components/ui';
import { ThemeSwitcher } from '@components/product';

import { Root } from './Header.Layout';

const Logo = styled(LogoSquared)`
  width: 32px;
  height: 32px;
`;

interface Props {
  className?: string;
}
const Header: React.FC<Props> = ({ className, ...props }) => {
  return (
    <Root
      className={cn(
        className,
        'flex justify-between items-center py-4 md:py-6 relative'
      )}
      {...props}
    >
      <div className="flex flex-1 items-center">
        <Link href="/" className="logo transition ease-in-out duration-100">
          <Logo />
        </Link>
      </div>
      <nav className="flex flex-1 justify-end space-x-4">
        <Link href="/" className="link transition ease-in-out duration-75">
          All
        </Link>
        <Link href="/test" className="link transition ease-in-out duration-75">
          Tests
        </Link>
        <ThemeSwitcher />
      </nav>
    </Root>
  );
};

export default Header;
