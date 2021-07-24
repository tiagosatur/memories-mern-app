import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { createBase64Image } from "../../utils";
import { createPost, updatePost } from "../../redux/actions/posts";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "10px 0",
    width: "100%",
  },
  buttonSubmit: {
    backgroundColor: "#393E46",

    marginBottom: 10,
    "&:hover": {
      backgroundColor: "#393E46",
    },
  },
  buttonClear: {
    color: "#B89411",
    borderColor: "#B89411",
    "&:hover": {
      borderColor: "#B89411",
    },
  },
}));

const initialPostData = {
  creator: "",
  title: "",
  message: "",
  tags: "",
  selectedFile: "",
};

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = React.useState(initialPostData);
  const getPost = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  React.useEffect(() => {
    if (getPost) setPostData(getPost);
  }, [getPost]);

  const clearForm = () => {
    setCurrentId(null);
    setPostData(initialPostData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    currentId === null
      ? dispatch(createPost(postData))
      : dispatch(updatePost(currentId, postData));

    clearForm();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    createBase64Image(file)
      .then((base64) => {
        setPostData({ ...postData, selectedFile: base64 });
      })
      .catch((e) => {
        console.log("Convert image to base64 error", e);
      });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${getPost.title}"` : "Creating a Memory"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <Button variant="outlined" component="label" size="large">
            Upload File
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Button>
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.buttonClear}
          variant="outlined"
          size="small"
          onClick={clearForm}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
