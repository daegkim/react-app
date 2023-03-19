import classNames from 'classnames';
import { HTMLAttributes, PropsWithChildren, useState } from 'react';
import { FcExpand, FcCollapse } from 'react-icons/fc';

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

function Accordion({
  title,
  children,
  ...rest
}: PropsWithChildren<AccordionProps>) {
  const [isFolded, setFolded] = useState(false);

  return (
    <div
      {...rest}
      className={classNames(rest.className, 'border border-solid border-black')}
    >
      <div
        className="flex items-center justify-between bg-slate-200 border-b border-black cursor-pointer"
        onClick={() => {
          setFolded((prev) => !prev);
        }}
      >
        <div>{title}</div>
        <div>
          {isFolded && (
            <FcExpand
              className="cursor-pointer"
              onClick={() => {
                setFolded((prev) => !prev);
              }}
            />
          )}
          {!isFolded && (
            <FcCollapse
              className="cursor-pointer"
              onClick={() => {
                setFolded((prev) => !prev);
              }}
            />
          )}
        </div>
      </div>
      <div className={classNames({ hidden: isFolded })}>{children}</div>
    </div>
  );
}

export default Accordion;
