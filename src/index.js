import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context";
import { PostProvider } from "./context/post.context";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PostProvider>
    <UserProvider>
      <BrowserRouter>
        <Toaster position="bottom-center" />
        <App />
      </BrowserRouter>
    </UserProvider>
  </PostProvider>
);
