import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contactsFilter = contacts.filter(contact =>
    contact.name.includes(filter)
  );

  return (
    <ol className={css.list}>
      <h5>Contacts</h5>
      {contactsFilter.map(({ id, name, number }) => (
        <ContactListItem key={id} contact={{ id, name, number }} />
      ))}
    </ol>
  );
};
