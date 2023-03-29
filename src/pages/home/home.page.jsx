import React, { useContext } from "react";
import { PostContext } from "../../context/post.context";
import { FeedContainer } from "./home.styles";
import Sidebar from "../../components/sidebar/sidebar.component";
import Rightbar from "../../components/rightbar/rightbar.component";
import Feed from "../../components/feed/feed.component";

const HomePage = () => {
  const { posts } = useContext(PostContext);
  return (
    <FeedContainer className="">
      <Sidebar />
      <Feed posts={posts} />
      <Rightbar />
    </FeedContainer>
  );
};

export default HomePage;
