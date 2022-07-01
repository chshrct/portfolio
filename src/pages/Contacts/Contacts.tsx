import { FC, useState } from 'react';

import cs from '../../common/styles/Container.module.scss';

import { Contact } from './Contact/Contact';
import { ContactForm } from './ContactForm/ContactForm';
import s from './Contacts.module.scss';

import { CONTACTS_DATA, FOOTER_DATA as SECONDARY_SOCIAL_DATA } from 'App/state';
import { SectionHeading } from 'common/components/SectionHeading/SectionHeading';
import { SocialLink } from 'common/components/SocialLink/SocialLink';

const FIRST = 0;

const Contacts: FC = () => {
  const [activeLink, setActiveLink] = useState<string>(
    SECONDARY_SOCIAL_DATA[FIRST].title,
  );

  const setActiveLinkHandle = (title: string): void => {
    setActiveLink(title);
  };

  return (
    <section id="CONTACTS" className={s.contactsBlock}>
      <div className={`${cs.container} ${s.contactsContainer}`}>
        <div style={{ height: '50px' }} />
        <SectionHeading title="Contacts" />
        <div style={{ height: '25px' }} />
        <div className={s.contactsWrapper}>
          <ContactForm />
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
                    setActiveHandle={setActiveLinkHandle}
                    active={activeLink === link.title}
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
