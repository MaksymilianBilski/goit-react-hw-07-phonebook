import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContacts } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

export const AddContacts = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name;
    const number = form.elements.number;
    if (
      contacts.find(
        contact =>
          contact.name === name.value && contact.number === number.value
      )
    ) {
      alert(`${name.value} is already in contacts`);
      return;
    }
    const contact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };
    //add single contact to local storage
    dispatch(addContacts(contact));
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={onFormSubmit}>
        <label>Name</label>
        <input
          className={css.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <input
          className={css.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.button}>Add contact</button>
      </form>
    </>
  );
};
