import React, { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { PostContext } from "../../context/post.context";
import Input from "../input/input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CreatePostContainer } from "./create-post.styles";
import { toast } from "react-hot-toast";

const CreatePost = () => {
  const { currentUser } = useContext(UserContext);
  const { createPost } = useContext(PostContext);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", currentUser._id);
    formData.append("description", description);
    if (file) {
      formData.append("picture", file);
      formData.append("picturePath", file.name);
    }
    createPost(formData);
    toast.success("New post has been created");
    resetFormFields();
  };

  const resetFormFields = () => {
    setDescription("");
    setFile(null);
  };

  return (
    <CreatePostContainer>
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl">description</h1>
        <Input
          label="description"
          type="text"
          required
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          value={description}
        />
        <Input
          label="file"
          type="file"
          required
          name="file ip"
          accept=".png,.jpeg,.jpg"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <Button onClick={handleSubmit} buttonType={BUTTON_TYPE_CLASSES.base}>
          Post
        </Button>
      </form>
    </CreatePostContainer>
  );
};

export default CreatePost;
