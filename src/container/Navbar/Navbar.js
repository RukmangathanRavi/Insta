/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  Button: {
    ...theme.typography.button,
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={12}>
          <AppBar>
            <Toolbar>
              <Grid item xs={8}>
                <img src="https://instadriver.co/img/logo.svg" />
              </Grid>
              <Button className={classes.Button}>Jobs</Button>
              <Button className={classes.Button}>Get Social</Button>
              <Button className={classes.Button}>Sign In</Button>
              <Typography>Menu</Typography>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
}
