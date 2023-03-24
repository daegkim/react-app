import classNames from 'classnames';
import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function InputText(
  { label, ...rest }: InputTextProps,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <>
      {label && <label htmlFor={`input-${label}`}>{label}</label>}
      <input
        id={`input-${label}`}
        {...rest}
        className={classNames(
          'px-1',
          'border border-solid border-black',
          'focus:border-teal-600 outline-none',
          { 'bg-slate-200': rest.readOnly }
        )}
        ref={ref}
      />
    </>
  );
}

export default forwardRef<HTMLInputElement, InputTextProps>(InputText);
