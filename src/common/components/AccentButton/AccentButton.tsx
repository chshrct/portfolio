import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
  useId,
} from 'react';

import s from './AccentButton.module.scss';

type IncomingPropsType = { label?: string; children?: ReactNode };

type PropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  IncomingPropsType;

export const AccentButton: FC<PropsType> = ({ type, label, disabled, children }) => {
  const BUTTON_ID = useId();

  return (
    <label className={s.label} htmlFor={BUTTON_ID}>
      {label}
      <button
        className={s.button}
        type={type === 'submit' ? 'submit' : 'button'}
        name={BUTTON_ID}
        disabled={disabled}
      >
        {children}
      </button>
    </label>
  );
};
