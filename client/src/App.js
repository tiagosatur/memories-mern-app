import React from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  makeStyles,
} from "@material-ui/core";
import memoriesLogo from "./images/memoriesLogo.png";
import { Form, Posts } from "./components";
import { getPosts } from "./redux/actions/posts";

const useStyles = makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#393E46",
  },
  image: {
    marginLeft: "15px",
  },
}));

function App() {
  const [currentId, setCurrentId] = React.useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h2" align="center" className={classes.heading}>
          Memories
        </Typography>
        <img
          src={memoriesLogo}
          className={classes.image}
          alt="Memories logo"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
