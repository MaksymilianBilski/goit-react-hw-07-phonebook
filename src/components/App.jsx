import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { AddContacts } from './Form/ContactsList';
import { Section } from './Section/Section';
import { SearchForm } from './SearchByName/SearchForm';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  const contacts = useSelector(getContacts);
  
  return (
    <div>
      <Section title="Phonebook">
        <AddContacts />
      </Section>
      <SearchForm />
      {contacts !== undefined && <ContactsList />}
    </div>
  );
};
