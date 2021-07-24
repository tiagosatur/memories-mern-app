import * as api from "../../api";
import ACTION_TYPES from "../types";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({
      type: ACTION_TYPES.FETCH_ALL_POSTS,
      payload: data,
    });
  } catch (e) {
    console.log("🐛 ~ getPosts error ~", e);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({
      type: ACTION_TYPES.CREATE_POST,
      payload: data,
    });
  } catch (e) {
    console.log("🐛 ~ createPost error ~", e);
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({
      type: ACTION_TYPES.UPDATE_POST,
      payload: data,
    });
  } catch (e) {
    console.log("🐛 ~ updatePost error ~", e);
  }
};
