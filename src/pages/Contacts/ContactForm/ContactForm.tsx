import { FC, FormEvent, useEffect, useState } from 'react';

import { faSadTear, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import s from './ContactForm.module.scss';

import { AccentButton } from 'common/components/AccentButton/AccentButton';
import { InputText } from 'common/components/InputText/InputText';
import { Textarea } from 'common/components/Textarea/Textarea';
import { validateEmail, validateLength } from 'helpers/validation/inputValidators';
import { useInputText } from 'hooks/useInputText/useInputText';

type FormElements = HTMLFormControlsCollection & {
  name: HTMLInputElement;
  email: HTMLInputElement;
  subject: HTMLInputElement;
  text: HTMLInputElement;
};

type ContactFormType = HTMLFormElement & {
  elements: FormElements;
};

const TEXT_LENGTH = 560;
const ONE_SECOND = 5000;

export const ContactForm: FC = () => {
  const [email, setEmail, onEmailChange, emailError, isEmailTouched, onEmailBlur] =
    useInputText(validateEmail);
  const [name, setName, onNameChange, nameError, isNameTouched, onNameBlur] =
    useInputText(validateLength(TEXT_LENGTH));
  const [
    subject,
    setSubject,
    onSubjectChange,
    subjectError,
    isSubjectTouched,
    onSubjectBlur,
  ] = useInputText(validateLength(TEXT_LENGTH));
  const [text, setText, onTextChange, textError, isTextTouched, onTextBlur] =
    useInputText(validateLength(TEXT_LENGTH));
  const [doesEmailInfoShows, setDoesEmailInfoShows] = useState<boolean>(false);

  const [isFormSending, setIsFormSending] = useState<boolean>(false);

  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (doesEmailInfoShows)
      timeoutId = setTimeout(() => {
        setDoesEmailInfoShows(false);
      }, ONE_SECOND);
    return () => clearTimeout(timeoutId);
  }, [doesEmailInfoShows]);

  const onFormSubmit = (e: FormEvent<ContactFormType>): void => {
    setIsFormSending(true);
    e.preventDefault();
    const {
      name: nameEl,
      email: emailEl,
      subject: subjectEL,
      text: textEl,
    } = e.currentTarget.elements;
    axios
      .post(`${process.env.REACT_APP_SMTP_SERVER_URL}send-email`, {
        name: nameEl.value,
        email: emailEl.value,
        subject: subjectEL.value,
        text: textEl.value,
      })
      .then(() => {
        setDoesEmailInfoShows(true);
        setIsEmailSent(true);
        setEmail('');
        setName('');
        setSubject('');
        setText('');
      })
      .catch(() => {
        setDoesEmailInfoShows(true);
        setIsEmailSent(false);
      })
      .finally(() => setIsFormSending(false));
  };

  const isSendDisabled =
    emailError ||
    nameError ||
    subjectError ||
    textError ||
    !isEmailTouched ||
    !isNameTouched ||
    !isSubjectTouched ||
    !isTextTouched ||
    isFormSending;
  return (
    <div className={s.formWrapper}>
      <h3>Just say Hello</h3>
      <form className={s.form} onSubmit={onFormSubmit} autoComplete="new-password">
        <InputText
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={onNameChange}
          error={isNameTouched ? nameError : undefined}
          onBlur={onNameBlur}
          autoComplete="off"
        />
        <InputText
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={onEmailChange}
          error={isEmailTouched ? emailError : undefined}
          onBlur={onEmailBlur}
          autoComplete="off"
        />
        <InputText
          name="subject"
          placeholder="Your Subject"
          value={subject}
          onChange={onSubjectChange}
          error={isSubjectTouched ? subjectError : undefined}
          onBlur={onSubjectBlur}
          autoComplete="off"
        />
        <Textarea
          name="text"
          placeholder="Your Message"
          value={text}
          onChange={onTextChange}
          error={isTextTouched ? textError : undefined}
          onBlur={onTextBlur}
        />

        <div className={s.buttonWrapper}>
          <AccentButton type="submit" disabled={!!isSendDisabled} loading={isFormSending}>
            Send Message
          </AccentButton>
          {doesEmailInfoShows &&
            (isEmailSent ? (
              <>
                <span>Email sent!</span>
                <FontAwesomeIcon icon={faThumbsUp} size="3x" />
              </>
            ) : (
              <>
                <span>Error. Sry!</span>
                <FontAwesomeIcon icon={faSadTear} size="3x" />
              </>
            ))}
        </div>
      </form>
    </div>
  );
};
