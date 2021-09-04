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
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

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
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
         <Container maxWidth="xl">
          <Grid container>
          <Grid item xs={12} md={3}>
          <Link to="/">
            <img
              src="images/logo.png"
              height="90px"
              width="255px"
              alt="logo_empresa"
              className={classes.imgLogo}
            />
            </Link>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" justifyContent="space-evenly" alignItems="center"  height="90px" flexWrap="nowrap">
               
              <Link to="/" style={{ textDecoration: 'none' }}>
              <Button color="inherit" className={classes.menuOptions}>
                Home
              </Button>
                </Link> 
               
                <Link to="/gallery" style={{ textDecoration: 'none' }}>
              <Button color="inherit" className={classes.menuOptions}>
                Gallery
              </Button>
                </Link> 
              <Button color="inherit" className={classes.menuOptions}>
                Contact
              </Button>
              </Box>
            </Grid>
          </Grid>
          </Container>

    

        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
      </div>
  );
};

export default Navbar;
