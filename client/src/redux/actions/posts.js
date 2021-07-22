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
