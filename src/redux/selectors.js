export const selectContacts = state => {
  if (state === undefined) {
    return;
  }
  return state.contacts;
};

export const selectFilter = state => {
  if (state === undefined) {
    return;
  }
  return state.filter;
};
