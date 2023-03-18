import { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/dedupe';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

function Header({ className, ...rest }: HeaderProps) {
  return (
    <div
      className={classNames(
        className,
        'h-full w-full bg-orange-500',
        'flex items-center'
      )}
      {...rest}
    >
      <Link to="/">home</Link>
    </div>
  );
}

export default Header;
