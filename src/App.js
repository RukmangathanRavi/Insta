/** @format */

import React from "react";
import "./App.css";
import ButtonAppBar from "./container/Navbar/Navbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Banner from "./container/Banner/Banner";
import Button from "@material-ui/core/Button";
import Imgsmall from "../src/Assets/imgsmall.png";

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
      <div style={{ marginTop: "50px" }}>
        <Grid container container direction="row" justify="center">
          <Grid
            item
            xs={6}
            style={{ textAlign: "center", backgroundColor: "#FEFCF5" }}
          >
            <div style={{ marginTop: "50px" }}>
              <Grid item xs={12}>
                <img src="https://instadriver.co/img/employees.svg" />
              </Grid>
              <Grid item xs={12} style={{ marginTop: "10px" }}>
                <Typography variant="h5" gutterBottom>
                  Employers!
                </Typography>
                <img src="https://instadriver.co/img/ocean-waves.png" />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  marginTop: "10px",
                  textAlign: "justify",
                  color: "#6c757d",
                  fontFamily: "Rubik",
                  fontSize: "15px",
                  lineHeight: "21px",
                  paddingRight: "30px",
                  paddingLeft: "30px",
                }}
              >
                <Typography gutterBottom>
                  You don’t have to waste money posting vacancy Ads. Stop
                  posting vacancy ads on whatsapp groups and on social media.
                  Stop making desperate hires because you have few choices. Stop
                  nagging your friends to find you a driver. Get your driver
                  from Instadriver and it is free. At Instadriver, you have a
                  long list to choose a competent driver. Go to search bar,
                  select the driver category you want, choose the location of
                  the driver and press search button. Pick the driver you want.
                  It is that simple and instantaneous.
                </Typography>
              </Grid>
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            style={{ textAlign: "center", backgroundColor: "#F8BD00" }}
          >
            <div style={{ marginTop: "50px" }}>
              <Grid item xs={12}>
                <img src="https://instadriver.co/img/drivers.svg" />
              </Grid>
              <Grid item xs={12} style={{ marginTop: "10px", color: "white" }}>
                <Typography variant="h5" gutterBottom>
                  Drivers!
                </Typography>
                <img src="https://instadriver.co/img/ocean-waves-white.png" />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  marginTop: "10px",
                  textAlign: "justify",
                  color: "#6c757d",
                  fontFamily: "Rubik",
                  fontSize: "15px",
                  lineHeight: "21px",
                  paddingRight: "30px",
                  paddingLeft: "30px",
                  color: "white",
                }}
              >
                <Typography gutterBottom>
                  This is a platform to get employed faster and effortlessly. It
                  is not fun staying unemployed. You don’t have to toil asking
                  your relatives, friends and acquaintances to find you a job.
                  Get a job instantly. Just post your profile on Instadriver and
                  employers will find you instantaneously. You can increase your
                  visibility and increase the odds of getting hired by using the
                  Verified Feature and the Top Add Feature. To create your
                  profile for free, click here. This is how millennials and Gen
                  Z find employment.
                </Typography>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          backgroundImage: `url(${Imgsmall})`,
          height: "280px",
        }}
      >
        <Grid container container direction="row" justify="center">
          <Grid item xs={4} style={{ marginTop: "16px" }}>
            <Grid container container direction="row" justify="center">
              <Grid item xs={4}>
                <img src="https://instadriver.co/img/aboutus.svg" />
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ color: "white" }}
                >
                  About us
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{
                    color: "white",
                    fontFamily: "Rubik",
                    fontSize: "15px",
                  }}
                >
                  Learn how useful Instadriver is to both the employer and
                  drivers
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} style={{ marginTop: "12px" }}>
            <Grid container container direction="row" justify="center">
              <Grid item xs={4}>
                <img src="https://instadriver.co/img/verify.svg" />
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ color: "white" }}
                >
                  Verified Search
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{
                    color: "white",
                    fontFamily: "Rubik",
                    fontSize: "15px",
                  }}
                >
                  Learn how employers can cut the curve and save a lot by using
                  verified search
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} style={{ marginTop: "12px" }}>
            <Grid container container direction="row" justify="center">
              <Grid item xs={4}>
                <img src="https://instadriver.co/img/topadd.svg" />
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ color: "white" }}
                >
                  Top Ad Feature
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{
                    color: "white",
                    fontFamily: "Rubik",
                    fontSize: "15px",
                  }}
                >
                  See how top ad feature can increase the odds of a driver
                  getting hired
                </Typography>
              </Grid>
            </Grid>
            {/* <h1 style={{ textAlign: "center" }}>
              <Typography variant="h5" gutterBottom>
                How it works
              </Typography>
            </h1> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
