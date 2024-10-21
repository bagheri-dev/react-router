import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "../src/pages/notFound";
import HomePage from "../src/pages/Home";
import { PostsPage } from "../src/pages/posts";
import ProfileUser from "./pages/profileUser";
import PostSinglePage from "./pages/postSingle";
import Layout from "./layout/layout";
import { useEffect, useState } from "react";
import { IsLoadingPage } from "./components/isLoading";
import CommentPostPage from "./pages/commentPost";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "users/:id",
        element: <ProfileUser />,
      },
      {
        path: "posts",
        element: <PostsPage />,
      },
      {
        path: "posts/:id",
        element: <PostSinglePage />,
        children: [
          {
            path: "/posts/:id/comments",
            element: <CommentPostPage />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      {isLoading ? <IsLoadingPage /> : <RouterProvider router={router} />}
    </QueryClientProvider>
  );
}

export default App;
