const EMPTY_STRING = '';

export const validateEmail = (email: string): string => {
  if (email === EMPTY_STRING) {
    return 'Required';
  }
  const emailRegExp =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegExp.test(email.toLowerCase()) ? EMPTY_STRING : 'Enter correct email';
};

export const validateName = (name: string): string => {
  if (name === EMPTY_STRING) {
    return 'Required';
  }
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

  return regName.test(name)
    ? EMPTY_STRING
    : 'Please enter your full name (first & last name)';
};

export const validateLength =
  (length: number): ((text: string) => string) =>
  (text: string) => {
    if (text === EMPTY_STRING) {
      return 'Required';
    }

    return text.length <= length ? EMPTY_STRING : `Max message length: ${length} symbols`;
  };
