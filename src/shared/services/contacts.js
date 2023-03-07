import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://640510f2eed195a99f7ba05b.mockapi.io/api/v1/contacts',
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

