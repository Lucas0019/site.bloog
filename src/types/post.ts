type PostProps = {
  id: string;
  slug: string;
  title: string;
  createdAt: string;
  author: {
    name: string;
  }
  content: {
    html: string;
  }
};

export interface IPost {
  post: PostProps;
}