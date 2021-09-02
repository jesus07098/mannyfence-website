import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  Grid,
  Box,
  Container
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  imgLogo: {
    padding: 5,
  },
  menuOptions: {
    marginRight: '20px',
    color: '#fff',
    fontSize: '22px',
    fontFamily: 'Noto Sans JP',
    fontWeight: 'bold',
    letterSpacing: 2,
    '&:hover': {
      color: '#f4d3a1',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="absolute" color="primary">
        <Toolbar>
         <Container maxWidth="xl">
          <Grid container>
          <Grid item xs={12} md={3}>
            <img
              src="images/logo.png"
              height="90px"
              width="255px"
              alt="logo_empresa"
              className={classes.imgLogo}
            />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" justifyContent="space-evenly" alignItems="center"  height="90px">
              <Button color="inherit" className={classes.menuOptions}>
                Gallery
              </Button>
              <Button color="inherit" className={classes.menuOptions}>
                Contact
              </Button>
              <Button color="inherit" className={classes.menuOptions}>
                Login
              </Button>
              <Button color="inherit" className={classes.menuOptions}>
                Login
              </Button>
              </Box>
            </Grid>
          </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

export default Navbar;
