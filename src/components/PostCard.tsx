import React from "react";
import { IPostsCars } from "../types/posts/PostsCard.Type";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostCard: React.FC<IPostsCars> = ({
  to,
  id,
  title,
  body,
  reactions,
  views,
}) => {
  return (
    <>
      <div
        key={id}
        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-[#EAD8B1]"
      >
        <Link to={to}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {body}
        </p>
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-x-3">
            <p className="flex items-center gap-2">
              <span>{reactions.likes}</span>
              <AiOutlineLike className="size-5" />
            </p>
            <p className="flex items-center gap-2">
              <span>{reactions.dislikes}</span>
              <AiOutlineDislike className="size-5" />
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <span>{views}</span>
            <FaEye />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
