import React, { useState, useEffect } from "react";
import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import blogLogo from "./Assets/blogLogo.gif";
import Blogs from "./components/Blogs";
import BlogPostsForm from "./components/BlogPostsForm";
import useStyles from "./styles/app.styles.js";
import { useDispatch } from "react-redux";
import { fetchAllBlogPosts } from "./actions/blogPosts";

function App() {
  const [blogPostId, setBlogPostId] = useState(0);
  const dispatch = useDispatch();
  const appStyles = useStyles();

  useEffect(() => {
    dispatch(fetchAllBlogPosts());
  }, [blogPostId, dispatch]);

  return (
    <div className="App">
      <Container maxWidth="xl">
        <AppBar
          className={appStyles.navigationBar}
          position="static"
          color="inherit"
        >
          <img
            className={appStyles.image}
            src={blogLogo}
            alt="icon"
            height="100"
          />
          <Typography className={appStyles.title} variant="h2" align="center">
            Mern awesome blog
          </Typography>
        </AppBar>
        <Grow in>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item xs={12} sm={3}>
              <BlogPostsForm
                blogPostId={blogPostId}
                setBlogPostId={setBlogPostId}
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Blogs setBlogPostId={setBlogPostId} />
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
