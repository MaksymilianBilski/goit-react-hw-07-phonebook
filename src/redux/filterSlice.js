import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    setFilters: {
      reducer: (state, action) => {
        return (state = action.payload);
      },
    },
  },
});

export const { setFilters } = filterSlice.actions;

export default filterSlice;
