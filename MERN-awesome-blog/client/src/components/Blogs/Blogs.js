import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import BlogPosts from "../BlogPosts";
import useStyles from "./styles";

const Blogs = ({ setBlogPostId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log("this is post", posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={4}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12}>
          <BlogPosts post={post} setBlogPostId={setBlogPostId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
