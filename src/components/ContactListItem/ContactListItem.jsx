import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/operation';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact }) => {
  const { name, id, number } = contact;
  const dispatch = useDispatch();

  const onContactDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      <li className={css.listItem}>
        {name}: {number}
        <button
          className={css.button}
          type="button"
          onClick={() => onContactDelete(id)}
        >
          DELETE
        </button>
      </li>{' '}
    </>
  );
};
