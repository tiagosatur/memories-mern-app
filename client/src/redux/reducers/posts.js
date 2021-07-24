import ACTION_TYPES from "../types";

export default (posts = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_POSTS:
      return action.payload;
    case ACTION_TYPES.CREATE_POST:
      return [...posts, action.payload];
    case ACTION_TYPES.UPDATE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case ACTION_TYPES.DELETE_POST:
      return posts.filter((post) => post._id !== action.payload.id);
    case ACTION_TYPES.LIKE_POST:
      return posts.map((post) =>
        post._id === action.payload.id
          ? { ...post, likeCount: action.payload.likeCount }
          : post
      );
    default:
      return posts;
  }
};
