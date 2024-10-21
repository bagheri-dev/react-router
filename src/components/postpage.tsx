import * as React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineSubtitles, MdTitle } from "react-icons/md";
import { IPosts } from "../types/posts/Posts.Type";

const PostPage: React.FC<IPosts> = ({id , title , body , tags , reactions , views}) => {
  return (
    <div key={id} className="container mx-auto">
      <div className="border-2 py-3 px-4 border-[#3A6D8C] rounded-lg">
        <h1 className="flex items-center gap-x-3 text-2xl font-bold border-b-2 mb-5">
        <MdTitle  className="ring-2 rounded-full"/>  {title}
        </h1>
        <p className="flex items-center gap-x-3 mb-5 text-gray-600">
        <MdOutlineSubtitles className="size-16"/>
          {body}
        </p>
        <div className="flex gap-x-3">
          {tags.map((tag) => {return <p>{tag}</p>})}
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-x-5">
            <p className="flex items-center gap-x-3">
              <AiOutlineLike  className="size-5"/>
              {reactions.likes}
            </p>
            <p className="flex items-center gap-x-3">
            <AiOutlineDislike  className="size-5"/>
            {reactions.dislikes}
            </p>
          </div>
          <div>
                <p className="flex items-center gap-x-3"><FaRegEye className="size-5" />{views}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
