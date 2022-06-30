import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
  useId,
} from 'react';

import { ReactComponent as ButtonLoader } from '../../../assets/loaders/button-loader.svg';

import s from './AccentButton.module.scss';

type IncomingPropsType = { label?: string; children?: ReactNode; loading?: boolean };

type PropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  IncomingPropsType;

export const AccentButton: FC<PropsType> = ({
  type,
  label,
  disabled,
  children,
  loading,
}) => {
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
        {loading ? <ButtonLoader height={50} width={50} /> : children}
      </button>
    </label>
  );
};
