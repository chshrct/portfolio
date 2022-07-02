import { ChangeEventHandler, FocusEventHandler, useState } from 'react';

const EMPTY_STRING = '';

type ElementType = HTMLInputElement | HTMLTextAreaElement;

export const useInputText = (
  validator: (text: string) => string,
): [
  string,
  (text: string) => void,
  ChangeEventHandler<ElementType>,
  string,
  boolean,
  FocusEventHandler<ElementType>,
] => {
  const [value, setValue] = useState<string>(EMPTY_STRING);
  const [error, setError] = useState<string>(EMPTY_STRING);
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const onBlur: FocusEventHandler<ElementType> = (): void => {
    setIsTouched(true);
    setError(validator(value));
  };

  const onChange: ChangeEventHandler<ElementType> = (e): void => {
    const text = e.currentTarget.value;
    setValue(text);
    if (isTouched) setError(validator(text));
    if (!isTouched) {
      if (!validator(text)) setIsTouched(true);
    }
  };
  return [value, setValue, onChange, error, isTouched, onBlur];
};
