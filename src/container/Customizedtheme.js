/** @format */

import { createMuiTheme } from "@material-ui/core/styles";

const pureWhite = "#FFFFFF";
const pureOrange = "#FFFFFF";

const CustomizedTheme = createMuiTheme({
  //Normal Color Palette
  slider: {
    trackColor: "yellow",
    selectionColor: "red",
  },
  palette: {
    common: {
      white: `${pureWhite}`,
    },
    primary: {
      main: `${pureOrange}`,
    },
    secondary: {
      main: `${pureWhite}`,
    },
    user: {
      main: `${pureWhite}`,
    },
  },
  //Background Color of Entire Application
  background: {
    listItems: {
      backgroundColor: `${pureOrange}`,
    },
  },
  //Typography of Entire Application
  typography: {
    generalText: {
      fontFamily: `"Catamaran", sans-serif`,
      fontSize: 24,
    },
    headerTest: {
      color: "#2d545e",
    },
    drawerTextColor: {
      color: `${pureWhite}`,
    },
    button: {
      fontFamily: `"Catamaran", sans-serif`,
      fontSize: 16,
      textTransform: "capitalize",
      lineHeight: 1.75,

      border: "2px solid black",
      margin: "12px",
    },
  },
  //Horizontal line styling
  hrstyling: {
    hr: {
      backgroundColor: `${pureOrange}`,
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiInputLabel: {
      // Name of the rule
      root: {
        // Some CSS
        color: "white",
      },
    },
  },
});

export default CustomizedTheme;
