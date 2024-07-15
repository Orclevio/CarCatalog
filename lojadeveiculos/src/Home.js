import './Home.css';
import Inicio from './paginas/Inicio/Inicio';
import imgprinc from './imagens/tesla_1.png';


const handleCTAClick = () => {
  const footer = document.getElementById('page-produtos');
  footer.scrollIntoView({ behavior: 'smooth' });
};
const handleCTAClick2 = () => {
  const footer = document.getElementById('page-empresas');
  footer.scrollIntoView({ behavior: 'smooth' });
};

function Home() {
  return (
    <div className="Home">

      <div className="containerinicio">

        <div className="banner" style={{ backgroundImage: `url(${imgprinc})` }}>
          <div className="banner-content">
            <h1 className="text-center text-f">Bem-vindo ao Catálogo Automotivo</h1>
            <h2 className="text-center text-s">Conheça mais sobre o carro dos seus sonhos</h2>
            <button className="cta-button" onClick={handleCTAClick}>Produtos mais vendidos</button>
            <button className="cta-button2" onClick={handleCTAClick2}>Empresas mais buscadas</button>
          </div>
        </div>
      </div>
      <Inicio />
      
    </div>
  );
}

export default Home;