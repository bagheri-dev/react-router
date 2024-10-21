export const endpoints = {
  users: {
    list: "/users",
    profile: (id: number) => `/users/${id}`,
  },
  posts: {
    list: "/posts",
    page: (id: number) => `/posts/${id}`,
    comments: (id: number) => `/comments/post/${id}`,
  },
};
