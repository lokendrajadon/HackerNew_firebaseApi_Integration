import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Link, NavLink
} from "react-router-dom";
import { useGlobalContext } from './Context'

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#61dafb"
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#000",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px"
  }
}));

const Header = () => {
  const { headersData } = useGlobalContext()
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" component="h1" className={classes.logo}>
            <Link className='logoLink' to='/'>HackerNews</Link>
          </Typography>
          {
            headersData.map((listingLabel, index) => {
              return (
                <Button className={classes.menuButton} key={index}>
                  <NavLink className={listingLabel.class} to={listingLabel.href}>{listingLabel.label}</NavLink>
                </Button>
              )
            })
          }
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header