import React from 'react';
import { makeStyles, AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    offset: theme.mixins.toolbar,
    imgLogo:{
        marginLeft: '37px',
        padding: 18
    }
}))

const Navbar = () =>{
    const classes = useStyles();
    return (
        <div>
        <AppBar position="absolute" color="primary">
        <Toolbar>  
        
        <img src="images/logo.png"  height="90px" width="265px" alt="logo_empresa"  className={classes.imgLogo}/>
        
          </Toolbar>
        </AppBar>

        <div className={classes.offset}></div>
        </div>

    )


}

export default Navbar;