import React, { ChangeEventHandler } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  Drawer,
  Checkbox,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Card,
  Box,
  Grid,
  CssBaseline,
  Typography,
  TextField,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Timer, { TimerProps } from "./Timer";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    timerContainer: {
      padding: theme.spacing(2),
      margin: theme.spacing(0),
      textAlign: "center",
    },
    settingsContainer: {
      padding: theme.spacing(2),
      margin: theme.spacing(0),
      textAlign: "center",
    },
    drawer: {
      padding: theme.spacing(2),
    },
  })
);

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: green[900],
    },
  },
});

function getInitialTimers(minStartTime: number, maxStartTime: number) {
  const timers = "Air Bat Cap Drum Each Fine Gust Harp Sit Jury Krunch Look Made Near Odd Pit Quench Red Sun Trap".split(
    " "
  );
  return timers.map((timerName) => ({
    name: timerName,
    startTime: Math.floor(
      Math.random() * (maxStartTime - minStartTime) + minStartTime
    ),
    initialDelay: Math.floor(Math.random() * 1000),
    maxTime: 60,
  }));
}

function WithTheme() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [maxTime, setMaxTime] = React.useState<number>(60);
  const [minStartTime, setMinStartTime] = React.useState<number>(20);
  const [timers, setTimers] = React.useState<Array<TimerProps>>(
    getInitialTimers(minStartTime, maxTime)
  );
  const classes = useStyles(theme);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const updateMaxTime = (e: any) => {
    setMaxTime(e.target.value);
  };
  const updateMinTime = (e: any) => {
    setMinStartTime(e.target.value);
  };

  const resetTimers = () => {
    const newTimers = timers.map((t) => ({
      ...t,
      startTime:
        Math.floor(Math.random() * (maxTime - minStartTime)) + minStartTime,
      maxTime: maxTime,
    }));
    setTimers(newTimers);
    console.log("newTimers", newTimers);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={openDrawer} edge="start">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="persistent" open={open}>
          <Box className={classes.drawer}>
            <IconButton onClick={closeDrawer} edge="start">
              <ChevronLeftIcon />
            </IconButton>
            <Divider />
            <Grid container xs={12}>
              <Grid item xs={12} className={classes.settingsContainer}>
                <TextField
                  label="Max Time (s)"
                  type="number"
                  variant="outlined"
                  value={maxTime}
                  onChange={updateMaxTime}
                  InputProps={{ inputProps: { min: minStartTime } }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} className={classes.settingsContainer}>
                <TextField
                  label="Min Time (s)"
                  type="number"
                  variant="outlined"
                  value={minStartTime}
                  InputProps={{ inputProps: { max: maxTime } }}
                  onChange={updateMinTime}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button onClick={resetTimers} variant="outlined" fullWidth>
                  Reset Timers
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Drawer>
        <main>
          <Grid
            container
            spacing={4}
            xs={12}
            className={classes.timerContainer}
          >
            {timers.map((timer) => (
              <Grid item xs={3}>
                <Timer
                  name={timer.name}
                  startTime={timer.startTime}
                  initialDelay={timer.initialDelay}
                  maxTime={maxTime}
                />
              </Grid>
            ))}
          </Grid>
        </main>
      </Box>
    </ThemeProvider>
  );
}
export default WithTheme;
