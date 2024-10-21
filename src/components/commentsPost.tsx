import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsPost } from "../api/services/commentsPost";
import { AiOutlineLike } from "react-icons/ai";

const CommentsPost: React.FC = () => {
  const { id } = useParams();
  const comments = useQuery({
    queryKey: ["post-comments", id],
    queryFn: () => fetchCommentsPost(Number(id)),
  });
  return (
    <>
      <div className="flex flex-col mt-5">
        {/* <h1 className="text-xl">comments {id}</h1> */}
        {(comments.data?.comments || []).map((el) => (
          <div className="py-5 space-y-3 border-2 border-gray-900  px-4 rounded-lg" key={el.id}>
            <p className="text-lg">username: {el.user.username}</p>
            <p className="font-bold">{el.body}</p>
            <p className="flex items-center gap-x-3">
              <AiOutlineLike className="size-5" />
              {el.likes}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentsPost;
