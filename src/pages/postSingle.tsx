import { Link, Outlet, useParams } from "react-router-dom";
import PostPage from "../components/postpage";
import { useQuery } from "@tanstack/react-query";
import { IPosts } from "../types/posts/Posts.Type";
import { fetchPostPage } from "../api/services/postpage.api";
import { IsLoadingPage } from "../components/isLoading";
const PostSinglePage = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, data } = useQuery<IPosts>({
    queryKey: ["repoPostData", id],
    queryFn: async () => fetchPostPage(parseInt(id!)),
  });

  if (isLoading) return <IsLoadingPage />;

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div className="mt-5 mb-5 mx-2">
        <PostPage
          key={data?.id}
          id={data?.id ?? 0}
          title={data?.title ?? ""}
          body={data?.body ?? ""}
          tags={data?.tags ?? []}
          views={data?.views ?? 0}
          reactions={{
            likes: data?.reactions?.likes ?? 0,
            dislikes: data?.reactions?.dislikes ?? 0,
          }}
          userId={data?.userId ?? 0}
        />
        <div className="container mx-auto">
          <div className="w-full flex justify-center mt-5">
            <Link to={`/posts/${data?.id}/comments`}>
              <button className="px-3 py-2 border border-gray-700 rounded-lg font-bold">
                comment
              </button>
            </Link>
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostSinglePage;
