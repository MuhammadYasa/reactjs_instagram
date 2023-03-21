import React, { useState } from "react";
import Suggestion from "./Suggestion";
import "./Timeline.css";
import Post from "./posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "M_Yasa",
      postImage:
        "https://i.pinimg.com/564x/f0/6d/07/f06d07e00803c81f779ab59839c3d75d.jpg",
      likes: 50,
      timestamp: "2d",
    },
    {
      user: "Hana",
      postImage:
        "https://i.pinimg.com/564x/a4/62/5a/a4625a9295bc263950e2a362c540942e.jpg",
      likes: 10,
      timestamp: "1d",
    },
    {
      user: "Meiko",
      postImage:
        "https://i.pinimg.com/564x/9c/04/17/9c04178aba640b892f77dd55c44f30c4.jpg",
      likes: 7,
      timestamp: "5h",
    },
    {
      user: "Narayana",
      postImage:
        "https://scontent.fcgk37-1.fna.fbcdn.net/v/t1.18169-9/10151304_847261175298621_2611484657856912736_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a83260&_nc_eui2=AeHQ_R5JgMLLahxL3HSCtUNWrXsS-3T0MjOtexL7dPQyM9BCFG4ciTB3dlAja79C5Wb7RwyUF6-E9JxuQPezqkdC&_nc_ohc=MxuUpvQGpx0AX-dwAL7&_nc_ht=scontent.fcgk37-1.fna&oh=00_AfC3EtRFtSEhh9h9ssGD3FxS1B4hhjKapUHv2Bw6u2tlxQ&oe=6440F1F7",
      likes: 40,
      timestamp: "3h",
    },
    {
      user: "Wina",
      postImage:
        "https://i.pinimg.com/564x/ae/25/57/ae2557cb83076ea7ed095bde33fa19b8.jpg",
      likes: 40,
      timestamp: "4h",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestion />
      </div>
    </div>
  );
}

export default Timeline;
