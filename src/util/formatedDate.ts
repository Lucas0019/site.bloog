const datePost = (date: string) => {
  const datePost = new Date(date);
  const day = datePost.getDate();
  const month = datePost.getMonth() + 1;
  const year = datePost.getFullYear();
  
  return `${day}/${month}/${year}`;
}

export default datePost;