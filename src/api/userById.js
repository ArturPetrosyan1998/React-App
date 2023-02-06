import axios from './axios';

export const getUserById = async (searchParams) => axios({
  method: 'GET',
  url: `users?id=${searchParams.id}`,
});
