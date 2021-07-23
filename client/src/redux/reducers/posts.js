import ACTION_TYPES from "../types";

export default (posts = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_POSTS:
      return action.payload;
    case ACTION_TYPES.CREATE_POST:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
