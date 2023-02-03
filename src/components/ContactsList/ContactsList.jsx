import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { selectContacts, selectFilter } from 'redux/selectors';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const contactsFilter = contacts.items.filter(contact =>
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
