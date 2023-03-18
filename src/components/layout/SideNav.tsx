import { HTMLAttributes } from 'react';
import classNames from 'classnames/dedupe';
import { Link } from 'react-router-dom';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Links = [{ id: 0, path: '/post', name: 'post' }];

function SideNav({ className, ...rest }: HeaderProps) {
  return (
    <div className={classNames(className, 'bg-purple-400')} {...rest}>
      {Links.map((link) => (
        <Link to={link.path}>{link.name}</Link>
      ))}
    </div>
  );
}

export default SideNav;
