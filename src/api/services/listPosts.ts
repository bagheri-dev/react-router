import { endpoints } from './../config';
import { rootUrl } from './../client';

export const fetchPosts = async (page : number , limit : number) => {
  try {
    const skip = (page - 1) * limit;
    const response = await rootUrl.get(endpoints.posts.list , {
        params: {
            limit : limit,
            skip : skip,
        },
    });
    return response.data.posts;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
