import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  Drawer,
  Checkbox,
  AppBar,
  Toolbar,
  IconButton,
  Card,
  Box,
  Grid,
  CssBaseline,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Timer from "./Timer";
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

function WithTheme() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles(theme);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const minStartTime = 10;
  const maxStartTime = 30;

  const timers = "Air Bat Cap Drum Each Fine Gust Harp Sit Jury Krunch Look Made Near Odd Pit Quench Red Sun Trap".split(
    " "
  );
  const timerInfo = timers.map((timerName) => ({
    name: timerName,
    startTime: Math.floor(
      Math.random() * (maxStartTime - minStartTime) + minStartTime
    ),
    initialDelay: Math.floor(Math.random() * 1000),
    maxTime: 60,
  }));

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
          <IconButton onClick={closeDrawer} edge="start">
            <ChevronLeftIcon />
          </IconButton>
          Test
        </Drawer>
        <main>
          <Grid container spacing={4} xs={12} className={classes.timerContainer}>
            {timerInfo.map((timer) => (
              <Grid item xs={3}>
                <Timer
                  name={timer.name}
                  startTime={timer.startTime}
                  initialDelay={timer.initialDelay}
                  maxTime={timer.maxTime}
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
