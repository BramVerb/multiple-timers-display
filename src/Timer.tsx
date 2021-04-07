import React, { Component } from "react";
import {
  Drawer,
  Checkbox,
  AppBar,
  Toolbar,
  IconButton,
  Card,
  CardContent,
  Box,
  CardActions,
  Grid,
  Button,
  Typography,
  rgbToHex,
  recomposeColor,
} from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";
import { withStyles, Theme, makeStyles } from "@material-ui/core/styles";

type TimerProps = {
  name: string;
  startTime: number;
  initialDelay: number;
  maxTime: number;
};

const useStyles = makeStyles((theme: Theme) => ({
  resetTimerButton: {
    flexGrow: 1,
    flex: 1,
    textTransform: "unset",
  },
  bar: {
    height: theme.spacing(1),
    transition: 'width 250ms linear',
  },
  fullWidth: {
    flexGrow: 1,
  },
  failed: {
    backgroundColor: 'red',
  }
}));

export default function Timer(props: TimerProps) {
  const [remainingTime, setRemainingTime] = React.useState(props.startTime);
  const [started, setStarted] = React.useState(true);

  const classes = useStyles();
  const resetTimer = () => {
    setRemainingTime(props.maxTime);
  };
  const next = () => {
    if (remainingTime > 0) {
      setRemainingTime(remainingTime - 1);
    }
    if (!started) {
      setStarted(true);
    }
  };
  React.useEffect(() => {
    const timer = setTimeout(
      () => {
        console.log(props.name, remainingTime);
        next();
      },
      started ? 1000 : props.initialDelay
    );
    return () => clearTimeout(timer);
  });

  const failed = remainingTime === 0;

  const mixValue = remainingTime / props.maxTime;
  const red = 255-Math.floor(255 * mixValue)
  const green = Math.floor(255 * mixValue)
  const percent =mixValue * 100;

  const colorStyle = {
    color: failed? 'unset': 'rgb('+red+', '+green+', 0)'
  };

  const progressBarStyle = {
    width: percent + '%',
    backgroundColor: colorStyle.color,
  }

  return (
    <Card elevation={10} className={remainingTime === 0? classes.failed: undefined}>
      <Button
        onClick={resetTimer}
        className={classes.resetTimerButton}
        fullWidth={true}
      >
        <CardContent className={classes.fullWidth}>
          <Typography variant="h6" style={colorStyle} color="textSecondary" gutterBottom>
            {props.name} {props.initialDelay}
          </Typography>
          <Typography variant="h2">{remainingTime}s</Typography>
      <Box className={classes.bar} style={progressBarStyle}> </Box>
        </CardContent>
      </Button>
    </Card>
  );
}
