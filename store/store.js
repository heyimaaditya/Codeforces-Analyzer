import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  userInfoReducer,
  userRatingReducer,
  userSubmissionReducer,
  userBlogReducer,
  getProblemsByTag,
} from "../Reducers/userReducer";

let initialState = {};
const middleware = [thunk];

const reducer = combineReducers({
  userInfo: userInfoReducer,
  contestsInfo: userRatingReducer,
  userSubmissions: userSubmissionReducer,
  userBlogs: userBlogReducer,
  problemsInfo: getProblemsByTag,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
