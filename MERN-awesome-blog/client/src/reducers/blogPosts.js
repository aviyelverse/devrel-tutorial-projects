export default (posts = [], action) => {
  switch (action.type) {
    case "GET_ALL_BLOG_POST":
      return action.payload;
    case "ADD_NEW_BLOG_POST":
      return [...posts, action.payload];
    case "EDIT_SINGLE_BLOG_POST":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "UPVOTE_SINGLE_BLOG_POST":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "DELETE_SINGLE_BLOG_POST":
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
