import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  toolbar: {
    background: '#66bd52',
  },
  buttonMenu: {
    textDecoration: 'none',
    fontSize: '18px',
    fontFamily: 'Roboto, sans-serif',
    margin: '0 20px',
    color: 'white',
    borderRadius: 0,
    '&:hover': {
      borderBottom: '5px solid white',
      background: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();


  return (
    <div style={{ background: '#66bd52' }}>
      <Container maxWidth="lg" >
        <div className={classes.grow} >
          <AppBar position="static" elevation={0}>
            <Toolbar className={classes.toolbar}>
              <NavLink exact to="/" className={classes.buttonMenu} activeStyle={{borderBottom: '5px solid white'}}>
                HOME
              </NavLink>
              <NavLink exact to="#"  className={classes.buttonMenu}>
                ABOUT US
              </NavLink>
              <NavLink exact to="#"  className={classes.buttonMenu}>
                CONTACT
              </NavLink>
              <NavLink exact to="#"  className={classes.buttonMenu}>
                BLOG
              </NavLink>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <NavLink exact to="/signup" className={classes.buttonMenu} activeStyle={{borderBottom: '5px solid white'}}>
                  SIGN UP
              </NavLink>
                <NavLink exact to="#" className={classes.buttonMenu}>
                  LOGIN
              </NavLink>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </Container>
    </div>
  );
}
