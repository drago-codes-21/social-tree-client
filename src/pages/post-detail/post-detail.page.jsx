import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { UserContext } from "../../context/user.context";
import { ImageContainer, PostDetailContainer } from "./post-detail.styles";
import Loading from "../../components/loading/loading.component";
import { LikeIcon, StarIcon } from "../../utils/helper.util";
// import { AiOutlineComment } from "react-icons/ai";

const PostDetailPage = () => {
  const { currentUser } = useContext(UserContext);
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [comment, setComment] = useState("");

  const handlePost = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/post/fetch/singlePost/${id}`
    );
    console.log(response);
    setPostData(response.data);
  };

  const handleLike = async () => {
    if (currentUser === null) return;
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/post/like/${id}`,
        {
          userId: currentUser._id,
        }
      );
      console.log(response);
      setPostData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleComment = async () => {
    if (currentUser === null) return;
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/post/comment/${id}`,
        {
          userID: currentUser._id,
          comment,
        }
      );
      setPostData(response.data);
      setComment("");
      if (response.data)
        toast.success("Your comment has been posted successfully");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (id && postData === null) {
      handlePost();
    }
  });

  if (postData === null) return <Loading size={100} />;
  let likeIconColor = Boolean(postData.likes[currentUser._id]);
  return (
    <PostDetailContainer className="mt-36">
      {postData && (
        <div className="flex justify-between">
          <ImageContainer>
            <img
              src={`${process.env.REACT_APP_PHOTO_FOLDER}/${postData.picturePath}`}
              alt="post"
              className="mr-10 w-xl"
            />
          </ImageContainer>
          <div>
            <button onClick={handleLike} className="">
              <div
                className={`${
                  likeIconColor ? "text-red-500" : "text-green-500"
                } h-8 w-8`}
              >
                <LikeIcon />
                {Object.keys(postData.likes).length}
              </div>
            </button>
            <StarIcon />
            <br />
            <input
              placeholder="comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="button"
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleComment}
            >
              Comment
            </button>
            {postData.comments.length > 0 &&
              postData.comments.map((cmnt, idx) => {
                return (
                  <div key={idx}>
                    @sarthak {"  "}{" "}
                    <span className="text-xl">{cmnt.comment} </span>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </PostDetailContainer>
  );
};
export default PostDetailPage;
