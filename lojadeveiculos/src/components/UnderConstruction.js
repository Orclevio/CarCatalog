import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const UnderConstruction = () => {
  return (
    <Box
      style={{
        textAlign: 'center',
        padding: '50px 20px',
        width: '100vw',   // Largura total da tela
        height: '100vh',  // Altura total da tela
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Cor de fundo suave
      }}
    >
      <ConstructionIcon style={{ fontSize: '100px', color: '#FFC107' }} />
      <Typography variant="h2" component="h1" gutterBottom>
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
