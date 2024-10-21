import { endpoints } from "./../config";
import { rootUrl } from "./../client";
import { IComment } from "../../types/comments/comments.Type";
import { IResDto } from "../../types/global.Type";

interface IFetchPostCommentsResDto extends IResDto {
  comments: IComment[];
}

type fetchCommentsPost = (_: number) => Promise<IFetchPostCommentsResDto | undefined>;

export const fetchCommentsPost: fetchCommentsPost = async (id) => {
  try {
    const response = await rootUrl.get<IFetchPostCommentsResDto>(
      endpoints.posts.comments(id)
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
