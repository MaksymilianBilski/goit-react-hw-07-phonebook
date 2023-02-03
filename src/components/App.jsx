import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import { selectContacts } from 'redux/selectors';
import { AddContacts } from './Form/ContactsList';
import { Section } from './Section/Section';
import { SearchForm } from './SearchByName/SearchForm';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <div>Loading...</div>}
      {error && <b>{error}</b>}
      <Section title="Phonebook">
        <AddContacts />
      </Section>
      <SearchForm />
      {items !== undefined && <ContactsList />}
    </div>
  );
};
