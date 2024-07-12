import './Home.css';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import imgprinc from './imagens/tesla_1.png';
import mercedesimg from './imagens/mercedes/mercedesprinc.jpg';
import { Container, Grid } from '@mui/material';
import ProductCard from "./components/ProductCard.js";


const products = [
  {
    id: 1,
    name: 'AUDI',
    description: 'Descrição do produto 1',
    price: 99.99,
    image: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT_E7A6muRkPVa8knchW_L4vXEAr_wMAK1MU4H0iwaAEJvl9AgsODAUyCzMsEESdBfCYLZgYG1gogI5IBBPj4SotyChKLEnP1yjNTSjIENQyIBMLsLq4hjp4-wQAkEtle6QAAAA?wid=550',
  },
  {
    id: 2,
    name: 'MERCEDES',
    description: 'Descrição do produto 2',
    price: 199.99,
    image: mercedesimg,
     },
  {
    id: 3,
    name: 'VOLVO',
    description: 'Descrição do produto 2',
    price: 199.99,
    image: 'https://cas.volvocars.com/image/dynamic/MY24_2317/536/exterior-v4/R8/73500/R98000/R190/FN01/TC06/_/_/TP05/_/JT02/GR08/T101/TJ02/NP02/TM04/_/CB04/EV02/JB0A/T221/LF05/_/VP09/FH01/_/_/_/_/_/_/SideModelpage.jpg?market=br&client=gox-graph%7ccar-config&w=600&bg=ffffff'
  },
  
];

function Home() {
  return (
    <div className="Home">
      <Header />

      <div className="containerinicio">
        <h1 className="text-center text-f">CATÁLOGO AUTOMOTIVO</h1>
        <h1 className="text-center text-s">VIAJE PELO MUNDO AUTOMOTIVO</h1>
        <img src={imgprinc} alt="Car" className='imginicial' />
        <Container>
          <h1>Os principais veículos das mais conceituadas montadoras do mercado</h1>
          <Grid container spacing={3}>
            {products.map(product => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Home;