import { endpoints } from './../config';
import { rootUrl } from './../client';

export const fetchPostPage = async (id : number) => {
  try {
    const response = await rootUrl.get(endpoints.posts.page(id));
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
