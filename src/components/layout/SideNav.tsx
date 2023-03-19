import { HTMLAttributes } from 'react';
import classNames from 'classnames/dedupe';
import { Link } from 'react-router-dom';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Links = [
  { id: 0, path: '/post', name: 'post' },
  { id: 1, path: '/component', name: 'component' },
];

function SideNav({ className, ...rest }: HeaderProps) {
  return (
    <div
      className={classNames(className, 'flex flex-col bg-purple-400')}
      {...rest}
    >
      {Links.map((link) => (
        <Link className={'py-2'} to={link.path} key={link.id}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default SideNav;
