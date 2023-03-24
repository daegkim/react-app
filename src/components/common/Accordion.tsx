import classNames from 'classnames';
import { HTMLAttributes, MouseEvent, PropsWithChildren, useState } from 'react';
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

  const reverseFolded = (
    e: MouseEvent<SVGElement | HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();
    setFolded((prev) => !prev);
  };

  return (
    <div
      {...rest}
      className={classNames(rest.className, 'border border-solid border-black')}
    >
      <div
        className="flex items-center justify-between bg-slate-200 border-b border-black px-2 cursor-pointer"
        onClick={reverseFolded}
      >
        <div>{title}</div>
        <div>
          {isFolded && (
            <FcExpand className="cursor-pointer" onClick={reverseFolded} />
          )}
          {!isFolded && (
            <FcCollapse className="cursor-pointer" onClick={reverseFolded} />
          )}
        </div>
      </div>
      <div className={classNames({ hidden: isFolded }, 'px-2')}>{children}</div>
    </div>
  );
}

export default Accordion;
