import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Grid,
  CssBaseline,
  TextField,
  Fab,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
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
  return timers.map((timerName, index) => ({
    name: timerName,
    startTime: Math.floor(
      Math.random() * (maxStartTime - minStartTime) + minStartTime
    ),
    initialDelay: Math.floor(Math.random() * 1000),
    maxTime: 60,
    key: index,
  }));
}

const initialTimers = getInitialTimers(40, 60);

function WithTheme() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [maxTime, setMaxTime] = React.useState<number>(60);
  const [minStartTime, setMinStartTime] = React.useState<number>(40);
  const [timers, setTimers] = React.useState<Array<TimerProps>>(initialTimers);
  const classes = useStyles(theme);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const updateMaxTime = (e: any) => {
    const value = parseInt(e.target.value, 10);
    if(Number.isInteger(value)) {
      setMaxTime(value);
    } else {
      setMaxTime(0);
    }
  };
  const updateMinTime = (e: any) => {
    const value = parseInt(e.target.value, 10);
    if(Number.isInteger(value)) {
      setMinStartTime(value);
    } else {
      setMinStartTime(0);
    }
  };

  const resetTimers = () => {
    const newTimers = timers.map((t) => ({
      ...t,
      startTime:
        Math.floor(Math.random() * (maxTime - minStartTime)) + minStartTime,
      maxTime: maxTime,
    }));
    setTimers(newTimers);
  };
  const removeTimer = (i: number) => {
    const newTimers = [...timers];
    newTimers.splice(i, 1);
    setTimers(newTimers);
  };

  const updateTimerName = (i: number, e: any) => {
    setTimers(
      timers.map((timer, index) => {
        if (index === i) {
          return {
            ...timer,
            name: e.target.value,
          };
        } else {
          return timer;
        }
      })
    );
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
            <Grid container xs={12} spacing={2}>
              <Grid item xs={12} className={classes.settingsContainer}>
                <TextField
                  label="Max Time (s)"
                  type="number"
                  variant="outlined"
                  value={maxTime}
                  onChange={updateMaxTime}
                  InputProps={{ inputProps: { min: minStartTime ?? 0 } }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} className={classes.settingsContainer}>
                <TextField
                  label="Min Time (s)"
                  type="number"
                  variant="outlined"
                  value={minStartTime}
                  InputProps={{ inputProps: { max: maxTime ?? 100 } }}
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
            {timers.map((timer, i) => (
              <Grid
                item
                xs={12}
                key={timer.key}
                className={classes.settingsContainer}
              >
                <TextField
                  label={"Name " + i}
                  type="text"
                  variant="outlined"
                  value={timer.name}
                  onChange={(e) => updateTimerName(i, e)}
                  fullWidth
                />
                <IconButton onClick={() => removeTimer(i)}>
                  <DeleteIcon fontSize="large" />
                </IconButton>
              </Grid>
            ))}
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
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
              <Grid item key={timer.key} xs={3}>
                <Timer
                  key={timer.key}
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
