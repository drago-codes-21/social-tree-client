import React from "react";
import Post from "../post-card/post-card.component";

const Feed = ({ posts }) => {
  return (
    <div className="gap-4 w-40">
      {posts
        ? posts.map((post) => {
            return (
              <div key={post.id}>
                <Post post={post} />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Feed;
