import React, { useState, useEffect } from "react";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { addBlogPosts, editBlogPosts } from "../../actions/blogPosts";

const BlogPostsForm = ({ blogPostId, setBlogPostId }) => {
  const [blogInfo, setBlogInfo] = useState({
    creator: "",
    title: "",
    description: "",
    tags: "",
    fileUpload: "",
  });
  const post = useSelector((state) =>
    blogPostId
      ? state.posts.find((message) => message._id === blogPostId)
      : null
  );
  const dispatch = useDispatch();
  const blogPostsStyles = useStyles();

  useEffect(() => {
    if (post) setBlogInfo(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (blogPostId === 0) {
      dispatch(addBlogPosts(blogInfo));
    } else {
      dispatch(editBlogPosts(blogPostId, blogInfo));
    }
  };

  return (
    <Paper className={blogPostsStyles.paper}>
      <form
        autoComplete="on"
        noValidate
        className={`${blogPostsStyles.root} ${blogPostsStyles.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">
          {blogPostId ? `Update "${post.title}"` : "✨ Create a blog ✨"}
        </Typography>

        <div className={blogPostsStyles.chooseFile}>
          <Typography> 🖼️ Upload Blog Image</Typography>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setBlogInfo({ ...blogInfo, fileUpload: base64 })
            }
          />
        </div>
        <TextField
          name="title"
          variant="outlined"
          label="🔥 Blog Title"
          fullWidth
          value={blogInfo.title}
          onChange={(e) => setBlogInfo({ ...blogInfo, title: e.target.value })}
        />
        <TextField
          name="description"
          variant="outlined"
          label="📙 Blog Description"
          fullWidth
          multiline
          rows={7}
          value={blogInfo.description}
          onChange={(e) =>
            setBlogInfo({ ...blogInfo, description: e.target.value })
          }
        />
        <TextField
          name="creator"
          variant="outlined"
          label="✍️ Author name"
          fullWidth
          value={blogInfo.creator}
          onChange={(e) =>
            setBlogInfo({ ...blogInfo, creator: e.target.value })
          }
        />
        <Typography>Tags (5 max seperated by comma)</Typography>
        <TextField
          name="tags"
          variant="outlined"
          label="🏷️ Tags"
          fullWidth
          value={blogInfo.tags}
          onChange={(e) =>
            setBlogInfo({ ...blogInfo, tags: e.target.value.split(",") })
          }
        />

        <Button
          className={blogPostsStyles.publishButton}
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Publish 📝
        </Button>
      </form>
    </Paper>
  );
};

export default BlogPostsForm;
