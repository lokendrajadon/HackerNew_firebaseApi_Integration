import React from 'react';
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { useGlobalContext } from './Context'
const useStyles = makeStyles((theme) => ({
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
  },
  footerElements: {
    margin: "auto"
  },
  footer: {
    backgroundColor: "#61dafb",
    padding: theme.spacing(2),
    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0'
  },
}));

const Footer = () => {
  const classes = useStyles();
  const { footersData } = useGlobalContext()
  return (
    <>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          <div className={classes.footerElements}>
            {
              footersData.map((listingLabel, index) => {
                return (
                  <Button className={classes.menuButton} key={index} to={listingLabel.href}>
                    <a className={listingLabel.class} href={listingLabel.href}>{listingLabel.label}</a>

                    {/* <Link className={listingLabel.class} href={listingLabel.href}>{listingLabel.label}</Link> */}
                  </Button>
                )
              })
            }
          </div>
        </Typography>
      </footer>
    </>
  )
}

export default Footer
