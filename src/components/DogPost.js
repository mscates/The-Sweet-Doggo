import React from "react";
import { Center, PadBox } from "../styles/layout";

const DogPost = ({ post }) => {
  return (
    <div>
      <PadBox padding="lg">
        <Center maxWidth="900px">
          <div style={{ color: '#fff', padding: '10px 14px', backgroundColor: "hsl(0, 0%, 20%)" }}>Person who Posted Content</div>
          <img
            style={{
              maxWidth: "100%",
              height: 500,
              width: 900,
              objectFit: "cover",
            }}
            src={post.postImage}
            alt=""
          />

          <div style={{ color: '#fff', padding: '20px 25px', backgroundColor: "hsl(0, 0%, 20%)" }}>
            <h2>{post.postTitle}</h2>
          </div>
        </Center>
      </PadBox>
    </div>
  );
};

export default DogPost;