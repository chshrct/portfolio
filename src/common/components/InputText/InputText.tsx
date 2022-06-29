/* eslint-disable react/jsx-props-no-spreading */
import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

import s from './InputText.module.scss';

type IncomingPropsType = { error?: string };

type PropsType = IncomingPropsType &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const InputText: FC<PropsType> = ({ error, ...restProps }) => {
  return (
    <div className={s.tooltip}>
      <input
        className={error ? `${s.input} ${s.error}` : s.input}
        type="text"
        {...restProps}
      />
      {error && <span className={s.tooltiptext}>{error}</span>}
    </div>
  );
};
