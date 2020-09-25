import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import classNames from "classnames";

//classnames module - to combine 2 classes in MUI
// theme is the defatul theme which can be modified accordinly
//useStyles with props

const useStyles = makeStyles((theme) => ({
  buttonStyle: (props) => {
    return {
      color: props.cool ? "orange" : "blue",
      [theme.breakpoints.up("sm")]: {
        color: "white"
      }
    };
  },
  backgroundStyle: {
    backgroundColor: "yellow"
  }
}));

const CoolButton = (props) => {
  const classes = useStyles(props);
  return (
    <div>
      <Button
        fullWidth
        variant="outlined"
        className={classNames(classes.buttonStyle, classes.backgroundStyle)}
      >
        PROP THE BUTTON
      </Button>
    </div>
  );
};

export default CoolButton;
