import React, { useState, useContext, Fragment } from "react";
import { UserContext } from "../../context/user.context";
import { PostContext } from "../../context/post.context";
import Input from "../input/input.component";

// const defaultFormFields = {
//   description: "",
//   : null,
// };

const CreatePost = () => {
  const { currentUser } = useContext(UserContext);
  const { createPost } = useContext(PostContext);
  // const [formFields, setFormFields] = useState(defaultFormFields);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  // const { description } = formFields;
  // const resetFormFields = () => {
  //   setFormFields(defaultFormFields);
  // };
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormFields({ ...formFields, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: currentUser._id,
      description: description,
    };
    const data = new FormData();
    const fileName = Date.now() + file.name;
    data.append("name", fileName);
    data.append("file", file);
    newPost.picturePath = fileName;
    createPost(newPost);
    // console.log();
    // resetFormFields();
  };
  return (
    <Fragment>
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
        <input
          // style={{ display: "none" }}
          type="file"
          id="file"
          accept=".png,.jpeg,.jpg"
          onChange={(e) => setFile(e.target.files[0])}
        />{" "}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </Fragment>
  );
};

export default CreatePost;
