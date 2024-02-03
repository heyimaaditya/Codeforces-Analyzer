import axios from "axios";
import {
  USER_FAIL,
  USER_REQUEST,
  USER_SUCCESS,
} from "../Constants/UserConstatns";
import {
  USER_RATING_FAIL,
  USER_RATING_REQUEST,
  USER_RATING_SUCCESS,
} from "../Constants/RatingConstants";
import {
  USER_SUBMISSION_FAIL,
  USER_SUBMISSION_REQUEST,
  USER_SUBMISSION_SUCCESS,
} from "../Constants/SubmissionConstants";
import {
  USER_BLOG_REQUEST,
  USER_BLOG_FAIL,
  USER_BLOG_SUCCESS,
} from "../Constants/BlogConstants";
import {
  USER_PROBLEMS_REQUEST,
  USER_PROBLEMS_FAIL,
  USER_PROBLEMS_SUCCESS,
  SORT_PROBLEMS_ARRAY,
} from "../Constants/ProblemsConstants";

export const getUserInfo =
  (username = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_REQUEST });
      const response = await axios.get(
        `https://codeforces.com/api/user.info?handles=${username}`
      );
      if (response.data.status === "OK") {
        dispatch({ type: USER_SUCCESS, payload: response.data.result[0] });
      }
    } catch (error) {
      if (error.response)
        dispatch({ type: USER_FAIL, payload: error.response.data });
      else if (error.request) {
        dispatch({
          type: USER_FAIL,
          payload: "Check your internet connection and try again ",
        });
      }
    }
  };

export const getUserContests =
  (username = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_RATING_REQUEST });
      const response = await axios.get(
        `https://codeforces.com/api/user.rating?handle=${username}`
      );
      if (response.data.status === "OK") {
        dispatch({ type: USER_RATING_SUCCESS, payload: response.data.result });
      }
    } catch (error) {
      if (error.response)
        dispatch({ type: USER_RATING_FAIL, payload: error.response.data });
      else if (error.request) {
        dispatch({
          type: USER_RATING_FAIL,
          payload: "Check your internet connection and try again ",
        });
      }
    }
  };

export const getSubmissions =
  (username = "", count = 10) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_SUBMISSION_REQUEST });
      const response = await axios.get(
        `https://codeforces.com/api/user.status?handle=${username}&from=1&count=${count}`
      );
      if (response.data.status === "OK") {
        dispatch({
          type: USER_SUBMISSION_SUCCESS,
          payload: response.data.result,
        });
      }
    } catch (error) {
      if (error.response)
        dispatch({ type: USER_SUBMISSION_FAIL, payload: error.response.data });
      else if (error.request) {
        dispatch({
          type: USER_SUBMISSION_FAIL,
          payload: "Check your internet connection and try again ",
        });
      }
    }
  };

export const getUserBlogs =
  (username = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_BLOG_REQUEST });
      const response = await axios.get(
        `https://codeforces.com/api/user.blogEntries?handle=${username}`
      );
      if (response.data.status === "OK") {
        dispatch({ type: USER_BLOG_SUCCESS, payload: response.data.result });
      }
    } catch (error) {
      if (error.response)
        dispatch({ type: USER_BLOG_FAIL, payload: error.response.data });
      else if (error.request) {
        dispatch({
          type: USER_BLOG_FAIL,
          payload: "Check your internet connection and try again ",
        });
      }
    }
  };

export const getProblemsByTag =
  (tag = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_PROBLEMS_REQUEST });
      const response = await axios.get(
        `https://codeforces.com/api/problemset.problems?tags=${tag}`
      );
      if (response.data.status === "OK") {
        dispatch({
          type: USER_PROBLEMS_SUCCESS,
          payload: response.data.result.problems,
        });
      }
      console.log(response);
    } catch (error) {
      if (error.response)
        dispatch({ type: USER_PROBLEMS_FAIL, payload: error.response.data });
      else if (error.request) {
        dispatch({
          type: USER_PROBLEMS_FAIL,
          payload: "Check your internet connection and try again ",
        });
      }
    }
  };
export const sortProblems = (problems, order) => (dispatch) => {
  if (order === "asc") {
    problems = problems.filter((prob) => prob.rating > 0);
    problems.sort(function (a, b) {
      return b.rating - a.rating;
    });
  } else {
    problems = problems.filter((prob) => prob.rating !== null);
    problems.sort(function (a, b) {
      return a.rating - b.rating;
    });
  }
  dispatch({ type: SORT_PROBLEMS_ARRAY, payload: problems });
};