import React from "react";
import { Link } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PostContainer } from "./post-card.styles";

const Post = ({ post }) => {
  return (
    <PostContainer>
      <img
        src={`${process.env.REACT_APP_PHOTO_FOLDER}/${post.picturePath}`}
        alt="kohli"
      />
      <Link to={`/post-details/${post._id}`} className="link">
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>View Details</Button>
      </Link>
    </PostContainer>
  );
};

export default Post;
