import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Post from "./Post/Post";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
}));

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log("🚀 ~ Posts ~ posts", posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Posts;
