import React from "react";
import { PostContainer, LinkContainer } from "./post-card.styles";
import { AiFillLike } from "react-icons/ai";
// import { Link } from "react-router-dom";
import { MdComment } from "react-icons/md";

const Post = () => {
  const image =
    "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQo5gl7sJQimDLb9QwmCQNGvDJA56gh0ItMYJ-f5e9HahVCY0Ac9A4EsYhYKD9eQF0JJc3JLm65HKFAvws";
  return (
    <PostContainer>
      <div className="container">
        <img src={image} alt="kohli" />
        <LinkContainer className="link">
          <span>
            <AiFillLike />
          </span>
          <span>
            <MdComment />
          </span>
        </LinkContainer>
      </div>
      <footer>
        <h5>Sarthak Nalawade</h5>
      </footer>
    </PostContainer>
  );
};

export default Post;
