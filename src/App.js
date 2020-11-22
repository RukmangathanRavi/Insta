/** @format */

import React from "react";
import "./App.css";
import ButtonAppBar from "./container/Navbar/Navbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Banner from "./container/Banner/Banner";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <>
      <ButtonAppBar />
      <div
        style={{
          height: "22px",
          marginTop: "68px",
          backgroundColor: "#3B3B3B",
          width: "100%",
          padding: " 4px",
        }}
      >
        <Grid
          container
          container
          direction="column"
          justify="space-between"
          alignItems="flex-end"
          style={{ marginLeft: "auto" }}
        >
          <Grid item xs={12}>
            <Grid item xs={5}></Grid>
            <Grid item xs={5}>
              <div style={{ color: "white" }}>saysomething@instadriver.co</div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Banner />
      <div style={{ marginTop: "30px" }}>
        <Grid container container direction="row" justify="center">
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <h1 style={{ textAlign: "center" }}>
              <Typography variant="h5" gutterBottom>
                How it works
              </Typography>
            </h1>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div>
      <div>
        <Grid container container direction="row" justify="center">
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <h1 style={{ textAlign: "center" }}>
              <img src="https://instadriver.co/img/ocean-waves.png" />
            </h1>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Grid container container direction="row" justify="center">
          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: "0px", border: "2px solid #f8bd00" }}
            >
              For Employers
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: "0px", border: "2px solid #f8bd00" }}
            >
              For Drivers
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div>
      {/* <div style={{ marginTop: "30px" }}>
        <Grid container container direction="row" justify="center">
          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <img src="https://instadriver.co/img/searchdriver.svg" />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div> */}
      <div style={{ marginTop: "30px" }}>
        <Grid container container direction="row" justify="center">
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <img src="https://instadriver.co/img/searchdriver.svg" />
            <Typography variant="h5" gutterBottom style={{ color: "#3B3B3B" }}>
              Search Drivers
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              style={{
                textAlign: "center",
                color: "#6c757d",
                fontFamily: "Rubik",
                fontSize: "15px",
                lineHeight: "21px",
                paddingRight: "30px",
                paddingLeft: "30px",
              }}
            >
              Visit Instadriver platform, select the driver category you want,
              choose the location of the driver and you can either select all
              drivers or verified drivers and press search button.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <img src="https://instadriver.co/img/calldriver.svg" />
            <Typography variant="h5" gutterBottom style={{ color: "#3B3B3B" }}>
              Call Driver
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              style={{
                textAlign: "center",
                color: "#6c757d",
                fontFamily: "Rubik",
                fontSize: "15px",
                lineHeight: "21px",
                paddingRight: "30px",
                paddingLeft: "30px",
              }}
            >
              After hitting search button, you will see summarised profiles of
              the drivers with their contacts. Click view profile, to read the
              full profile. Access the contact number and call the driver.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <img src="https://instadriver.co/img/hiredriver.svg" />
            <Typography variant="h5" gutterBottom style={{ color: "#3B3B3B" }}>
              Hire Drivers
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              style={{
                textAlign: "center",
                color: "#6c757d",
                fontFamily: "Rubik",
                fontSize: "15px",
                lineHeight: "21px",
                paddingRight: "30px",
                paddingLeft: "30px",
              }}
            >
              On the call, discuss the job opportunity, terms and conditions, or
              arrange a meetup to discuss further and if you are both a perfect
              fit, proceed to hire that driver. As simple as that.
            </Typography>
          </Grid>
        </Grid>
      </div>

      {/* <div style={{ marginTop: "30px" }}>
        <Grid container container direction="row" justify="center">
          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              Search Drivers
            </Typography>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div> */}
      {/* <div style={{ marginTop: "10px" }}>
        <Grid container container direction="row" justify="center">
          <Grid item xs={4}></Grid>
          <Grid item xs={4} style={{ textAlign: "justify" }}>
            <Typography variant="h5" gutterBottom>
              Visit Instadriver platform, select the driver category you want,
              choose the location of the driver and you can either select all
              drivers or verified drivers and press search button.
            </Typography>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div> */}
    </>
  );
}

export default App;
