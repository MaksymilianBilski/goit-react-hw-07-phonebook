import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import css from './SearchForm.module.css';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = e => {
    const input = e.target.value;
    dispatch(setFilters(input));
  };

  return (
    <label className={css.label}>
      Find contacts by name:
      <input
        className={css.input}
        type="text"
        name="input"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};
