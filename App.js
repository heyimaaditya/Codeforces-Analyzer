import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import UserInfo from "./Components/UserInfo/UserInfo";
import RatingChange from "./Components/Contests/RatingChange";
import Submissions from "./Components/Submissions/Submissions";
import UserBlog from "./Components/Blog/UserBlog";
import Home from "./Components/Home/Home";
import Problems from "./Components/Problems/Problems";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/Codeforces-Analyzer" element={<Home />} />
        <Route
          exact
          path="/Codeforces-Analyzer/user/:username"
          element={<UserInfo />}
        />
        <Route
          exact
          path="/Codeforces-Analyzer/rating"
          element={<RatingChange />}
        />
        <Route
          exact
          path="/Codeforces-Analyzer/submissions"
          element={<Submissions />}
        />
        <Route
          exact
          path="/Codeforces-Analyzer/problems"
          element={<Problems />}
        />
        <Route exact path="/Codeforces-Analyzer/blogs" element={<UserBlog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;