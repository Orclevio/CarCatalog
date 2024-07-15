import React, { useState } from 'react';
import './Login.css';
import imgprinc from '../../imagens/tesla_1.png';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import HowToRegIcon from '@mui/icons-material/HowToReg';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Adicione aqui a lógica para manipular o login
    console.log('Username:', username);
    console.log('Password:', password);
  }
  return (
    <div>

      <div className="containerinicio">

        <div className="banner" style={{
          backgroundImage: `url(${imgprinc})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
          <div className="banner-content" style={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center',
          }}>
            <Container maxWidth="sm" className="text-center text-f">
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="45vh"

              >
                <Typography variant="h6" component="h2" gutterBottom>
                  Digite o seu e-mail e senha:
                </Typography>
                <TextField
                  label="Nome de Usuário"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  label="Senha"
                  variant="outlined"
                  type="password"
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                  <Button
                    startIcon={<LoginTwoToneIcon />}
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleLogin}
                    style={{ marginTop: 16 }}
                  >
                    Entrar
                  </Button>
                  <Button
                    startIcon={<HowToRegIcon />}
                    variant="outlined"
                    color="success"
                    onClick={handleLogin}
                    size="large"
                    style={{ marginTop: 16, marginLeft: 20 }}
                  >
                    Registrar-se
                  </Button>
                </div>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;