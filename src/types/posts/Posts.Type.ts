export interface IPosts {
  key : number | undefined
  id: number | undefined;
  title: string | undefined;
  body: string  | undefined;
  tags: Array<string>  | [];
  reactions: {
    likes: number  | undefined;
    dislikes: number  | undefined;
  };
  views: number  | undefined;
  userId: number  | undefined;
}
