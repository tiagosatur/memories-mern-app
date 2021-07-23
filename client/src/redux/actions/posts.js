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
    console.log("🚀 ~ getPosts error ~ e", e);
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
    console.log("🚀 ~ getPosts error ~ e", e);
  }
};
export const updatePost = () => async (dispatch) => {};
