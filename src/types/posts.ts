type PostsProps = {
  id: string;
  slug: string;
  title: string;
  coverPhoto: {
    url: string;
  };
};

export interface IPosts {
  posts: PostsProps[];
}