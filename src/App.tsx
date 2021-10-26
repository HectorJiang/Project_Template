import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Header from './components/Header';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

