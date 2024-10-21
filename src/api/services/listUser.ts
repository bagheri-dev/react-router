import { endpoints } from './../config';
import { rootUrl } from './../client';

export const fetchUsers = async (page : number , limit : number) => {
  try {
    const skip = (page - 1) * limit;
    const response = await rootUrl.get(endpoints.users.list , {
        params: {
            limit : limit,
            skip : skip,
        },
    });
    return response.data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
