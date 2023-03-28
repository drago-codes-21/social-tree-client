import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./context/user.context";
// import { PostContext } from "./context/post.context";
import Header from "./components/header/header.component";
import AuthPage from "./pages/auth/auth.page";
import HomePage from "./pages/home/home.page";
import jwtDecode from "jwt-decode";
import CreatePost from "./components/create-post/create-post.component";

const App = () => {
  const { currentUser, setUserFromStorage } = useContext(UserContext);
  useEffect(() => {
    const token = localStorage.getItem("currentUser");
    if (currentUser === null && token) {
      let decoded = jwtDecode(token).id;
      setUserFromStorage(decoded);
    }
  });
  return (
    <div>
      {/* <Post /> */}
      <Header />
      <CreatePost />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
};

export default App;
