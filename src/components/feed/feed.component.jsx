import React from "react";
import Post from "../post-card/post-card.component";
import Loading from "../loading/loading.component";

const Feed = ({ posts }) => {
  if (posts.length === 0) return <Loading />;

  return (
    <div className="gap-4 flex flex-col items-center justify-center">
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
