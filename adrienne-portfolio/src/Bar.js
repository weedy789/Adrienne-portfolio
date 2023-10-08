import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Signature from './images/Signature.png';

// const pages = ['Contact', 'Materials', 'IDK'];

function Bar() {
  return (
    <AppBar position="static"sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Signature} alt="Signature" width={300} /> 
           <Box sx={{ flexGrow: 1 }} />

          <Button
            sx={{ color: 'black' }}
            onClick={() => {
              // Add your logic for the about button click
              console.log('About button clicked');
            }}
          >
            About
          </Button>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={console.log('clicked')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Bar;