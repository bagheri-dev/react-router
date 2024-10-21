export interface IPostsCars {
  to: string;
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number | undefined;
    dislikes: number | undefined;
  };
  views: number;
}
