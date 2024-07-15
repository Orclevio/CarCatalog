import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Home';
import Catalog from './paginas/Catalogo/Catalago';
import ModelosPopulares from './paginas/Populares/Populares';
import SobreNos from './components/footer/Footer';
import Promocoes from './paginas/Promocoes/Promocoes';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/modelos-populares" element={<ModelosPopulares />} />
        <Route path="/promocoes" element={<Promocoes />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
      </Routes>
    </Router>
  );
};

export default App;
