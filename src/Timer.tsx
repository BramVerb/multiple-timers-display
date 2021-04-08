import React from "react";
import { Card, CardContent, Box, Button, Typography } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { usePrevious } from "./usePrevious";

export type TimerProps = {
  name: string;
  startTime: number;
  initialDelay: number;
  maxTime: number;
  key: number;
};

const useStyles = makeStyles((theme: Theme) => ({
  resetTimerButton: {
    flexGrow: 1,
    flex: 1,
    textTransform: "unset",
  },
  bar: {
    height: theme.spacing(1),
    transition: "width 500ms ease-in-out",
  },
  fullWidth: {
    flexGrow: 1,
  },
  failed: {
    backgroundColor: "red",
  },
}));

export default function Timer(props: TimerProps) {
  const [remainingTime, setRemainingTime] = React.useState(props.startTime);
  const [started, setStarted] = React.useState(true);
  const previousStartTime = usePrevious<number>(props.startTime);

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
        next();
      },
      started ? 1000 : props.initialDelay
    );
    return () => clearTimeout(timer);
  });

  React.useEffect(() => {
    if (previousStartTime !== props.startTime && started) {
      setRemainingTime(props.startTime);
    }
  }, [previousStartTime, props.startTime, props.maxTime, started]);

  const failed = remainingTime === 0;

  const mixValue = remainingTime / props.maxTime;
  const red = 255 - Math.floor(255 * mixValue);
  const green = Math.floor(255 * mixValue);
  const percent = mixValue * 100;

  const colorStyle = {
    color: failed ? "unset" : "rgb(" + red + ", " + green + ", 0)",
  };

  const progressBarStyle = {
    width: percent + "%",
    backgroundColor: colorStyle.color,
  };

  return (
    <Card
      elevation={10}
      className={remainingTime === 0 ? classes.failed : undefined}
    >
      <Button
        onClick={resetTimer}
        className={classes.resetTimerButton}
        fullWidth
      >
        <CardContent className={classes.fullWidth}>
          <Typography style={colorStyle} color="textSecondary" gutterBottom>
            {props.name} {props.initialDelay}
          </Typography>
          <Typography variant="h2">{remainingTime}s</Typography>
          <Box className={classes.bar} style={progressBarStyle}>
            {" "}
          </Box>
        </CardContent>
      </Button>
    </Card>
  );
}
