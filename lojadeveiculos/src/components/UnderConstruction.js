import React from 'react';
import { Typography, Box, Button, useTheme, useMediaQuery } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const UnderConstruction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      style={{
        textAlign: 'center',
        padding: '50px 20px',
        width: '97.9%',
        height: '73vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      }}
    >
      <ConstructionIcon style={{ fontSize: isMobile ? '50px' : '100px', color: '#FFC107' }} />
      <Typography variant={isMobile ? 'h4' : 'h2'} component="h1" gutterBottom>
        Página em Construção
      </Typography>
      <Typography variant="body1" gutterBottom>
        Estamos trabalhando duro para trazer a você uma experiência incrível. Fique ligado!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.location.href = '/'}
        style={{ marginTop: '20px' }}
      >
        Voltar para Home
      </Button>
    </Box>
  );
};

export default UnderConstruction;
