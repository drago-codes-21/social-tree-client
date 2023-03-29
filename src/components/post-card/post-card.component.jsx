import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PostContainer } from "./post-card.styles";

const Post = ({ post }) => {
  return (
    <PostContainer>
      <img
        src={`${process.env.REACT_APP_PHOTO_FOLDER}/${post.picturePath}`}
        alt="kohli"
      />

      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>View Details</Button>
    </PostContainer>
  );
};

export default Post;
