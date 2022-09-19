import { nanoid } from 'nanoid';

export const addContact = contact => {
  const { name, number } = contact;
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const removeContact = id => {
  return {
    type: 'contacts/removeContact',
    payload: id,
  };
};
