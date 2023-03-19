import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { FcSearch } from 'react-icons/fc';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  text?: string;
  icon?: 'search';
}

function Button({ text, icon, ...rest }: ButtonProps) {
  const renderIcon = () => {
    switch (icon) {
      case 'search':
        return <FcSearch />;
      default:
        return null;
    }
  };
  return (
    <button
      {...rest}
      className="flex items-center border border-solid border-teal-700 px-1 bg-teal-100"
    >
      <div className={classNames({ 'mr-1': icon })}>{text}</div>
      {renderIcon()}
    </button>
  );
}

export default Button;
