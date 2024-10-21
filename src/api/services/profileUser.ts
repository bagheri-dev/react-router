import { endpoints } from './../config';
import { rootUrl } from './../client';

export const fetchProfileUsers = async (id : number) => {
  try {
    const response = await rootUrl.get(endpoints.users.profile(id));
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
