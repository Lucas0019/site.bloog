import style from "./style.module.scss";
import datePost from "../../util/formatedDate";

interface IAuthorDatePost {
  createdAt: string;
}

export const AuthorDatePost = ({createdAt}: IAuthorDatePost) => {
  return (
    <>
      <time className={style.datePost}>
        <span>Published in: </span> 
        {datePost(createdAt)}
      </time>
    </>
  );
};
