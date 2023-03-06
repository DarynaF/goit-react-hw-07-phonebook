import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://64039a203bdc59fa8f296c7a.mockapi.io/api/v1/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('./', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`./${id}`);
  return data;
};
