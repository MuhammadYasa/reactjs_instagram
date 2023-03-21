import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

/* mengambil data dari timeline.js, yg berisi user, postimage, likes & timestamp */
function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      {/* bagian atas post, berisi icon user & botton 3 titik di sisi kanan */}
      <div className="post__image">
        <img src={postImage} alt="" />
      </div>
      {/* berisi gambar postingan oleh user */}
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon />
          </div>
        </div>
        Liked by {likes} people.
      </div>
      {/* berisi kolom komentar dan tombol like share dll */}
    </div>
  );
}

export default Post;
