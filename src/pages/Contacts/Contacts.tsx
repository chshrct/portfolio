import { FC, FormEvent, useEffect, useState } from 'react';

import { faThumbsUp, faSadTear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import cs from '../../common/styles/Container.module.scss';

import { Contact } from './Contact/Contact';
import s from './Contacts.module.scss';

import { CONTACTS_DATA, FOOTER_DATA as SECONDARY_SOCIAL_DATA } from 'App/state';
import { AccentButton } from 'common/components/AccentButton/AccentButton';
import { InputText } from 'common/components/InputText/InputText';
import { SectionHeading } from 'common/components/SectionHeading/SectionHeading';
import { SocialLink } from 'common/components/SocialLink/SocialLink';
import { Textarea } from 'common/components/Textarea/Textarea';
import {
  validateEmail,
  validateLength,
  validateName,
} from 'helpers/validation/inputValidators';
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

const SUBJECT_LENGTH = 20;
const TEXT_LENGTH = 560;
const FIRST = 0;
const ONE_SECOND = 5000;

const Contacts: FC = () => {
  const [email, onEmailChange, emailError, isEmailTouched, onEmailBlur] =
    useInputText(validateEmail);
  const [name, onNameChange, nameError, isNameTouched, onNameBlur] =
    useInputText(validateName);
  const [subject, onSubjectChange, subjectError, isSubjectTouched, onSubjectBlur] =
    useInputText(validateLength(SUBJECT_LENGTH));
  const [text, onTextChange, textError, isTextTouched, onTextBlur] = useInputText(
    validateLength(TEXT_LENGTH),
  );

  const [isFormSending, setIsFormSending] = useState<boolean>(false);

  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [doesEmailInfoShows, setDoesEmailInfoShows] = useState<boolean>(false);

  const [activeContact, setActiveContact] = useState<string>(
    SECONDARY_SOCIAL_DATA[FIRST].title,
  );

  const setActiveHandle = (title: string): void => {
    setActiveContact(title);
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
      })
      .catch(() => {
        setDoesEmailInfoShows(true);
        setIsEmailSent(false);
      })
      .finally(() => setIsFormSending(false));
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (doesEmailInfoShows)
      timeoutId = setTimeout(() => {
        setDoesEmailInfoShows(false);
      }, ONE_SECOND);
    return () => clearTimeout(timeoutId);
  }, [doesEmailInfoShows]);

  return (
    <section id="CONTACTS" className={s.contactsBlock}>
      <div className={`${cs.container} ${s.contactsContainer}`}>
        <div style={{ height: '50px' }} />
        <SectionHeading title="Contacts" />
        <div style={{ height: '25px' }} />
        <div className={s.contactsWrapper}>
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
              <AccentButton
                type="submit"
                disabled={!!isSendDisabled}
                loading={isFormSending}
              >
                Send Message
              </AccentButton>
              <div className={s.buttonWrapper}>
                {doesEmailInfoShows &&
                  (isEmailSent ? (
                    <>
                      <p>Email sent. Thank you!</p>
                      <FontAwesomeIcon icon={faThumbsUp} size="3x" />
                    </>
                  ) : (
                    <>
                      <p>Something went wrong. Please, try again later.</p>
                      <FontAwesomeIcon icon={faSadTear} size="3x" />
                    </>
                  ))}
              </div>
            </form>
          </div>

          <div className={s.contactInfo}>
            <h3>Contact Info</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla
              tincidunt id faucibus sed suscipit feugiat.
            </p>
            <div className={s.contantInfoWrapper}>
              {CONTACTS_DATA.map(contact => (
                <Contact
                  key={contact.id}
                  icon={contact.icon}
                  title={contact.title}
                  description={contact.description}
                  style={contact.style}
                />
              ))}
              <p>Visite my social profile and get connected</p>
              <div className={s.iconLinksWrapper}>
                {SECONDARY_SOCIAL_DATA.map(link => (
                  <SocialLink
                    key={link.id}
                    title={link.title}
                    icon={link.icon}
                    setActiveHandle={setActiveHandle}
                    active={activeContact === link.title}
                    url={link.url}
                    style={link.style}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '80px' }} />
    </section>
  );
};

export default Contacts;
