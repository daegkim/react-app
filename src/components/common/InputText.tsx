import classNames from 'classnames';
import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputText(
  { ...rest }: InputTextProps,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <input
      {...rest}
      className={classNames(
        'px-1',
        'border border-solid border-black',
        'focus:border-teal-600 outline-none'
      )}
      ref={ref}
    />
  );
}

export default forwardRef<HTMLInputElement, InputTextProps>(InputText);
