import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/material';

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>{logo}</Toolbar>;
  };
  const logo = (
    <Typography variant="h6" component="h1">
      Hi,Hector.
    </Typography>
  );
//   const useStyles = makeStyles(() => ({
//     header: {
//        backgroundColor: "#400CCC",
//     },
//  }));
//   const { header } = useStyles();
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}

