import './Home.css';
import Header from './components/Header';
import imgprinc from './imagens/tesla_x_0.jpg';
function Home() {
  return (
    <div className="Home">
      <Header />
      <h1 className="text-left">Viaje pelo Mundo Automotivo</h1>
      <img src={imgprinc} alt="Car" />
      <h1 className="text-right">Catálogo Completo de Carros</h1>
    </div>
  );
}

export default Home;