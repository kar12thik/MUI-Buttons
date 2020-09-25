import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import CoolButton from "./CoolButton";

const useStyles = makeStyles({
  buttonStyle: {
    color: "red"
  }
});

export default function App() {
  const classes = useStyles();
  const cool = false;
  console.log(classes);
  return (
    <div className="App">
      <Button variant="outlined" className={classes.buttonStyle}>
        STYLE THE BUTTON
      </Button>
      <CoolButton cool={cool} />
    </div>
  );
}
