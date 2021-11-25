import * as api from "../api/api.js";

export const fetchAllBlogPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBlogPosts();

    dispatch({ type: "GET_ALL_BLOG_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addBlogPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.addNewBlogPost(post);
    dispatch({ type: "ADD_NEW_BLOG_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editBlogPosts = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.editSingleBlogPost(id, post);

    dispatch({ type: "EDIT_SINGLE_BLOG_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const upvoteBlogPosts = (id) => async (dispatch) => {
  try {
    const { data } = await api.upvoteSingleBlogPost(id);

    dispatch({ type: "UPVOTE_SINGLE_BLOG_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeBlogPosts = (id) => async (dispatch) => {
  try {
    await api.removeBlogPost(id);
    dispatch({ type: "DELETE_SINGLE_BLOG_POST", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
