/* eslint-disable react/jsx-props-no-spreading */
import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';

import s from './Textarea.module.scss';

type IncomingPropsType = { error?: string };

type PropsType = IncomingPropsType &
  DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export const Textarea: FC<PropsType> = ({ error, ...restProps }) => {
  return (
    <div className={s.tooltip}>
      <textarea
        className={error ? `${s.textarea} ${s.error}` : s.textarea}
        {...restProps}
      />
      {error && <span className={s.tooltiptext}>{error}</span>}
    </div>
  );
};
