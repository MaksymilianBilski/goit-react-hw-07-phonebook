import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { selectFilteredContacts } from 'redux/selectors';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const contactsFilter = useSelector(selectFilteredContacts);

  return (
    <ol className={css.list}>
      <h5>Contacts</h5>
      {contactsFilter.map(({ id, name, number }) => (
        <ContactListItem key={id} contact={{ id, name, number }} />
      ))}
    </ol>
  );
};
