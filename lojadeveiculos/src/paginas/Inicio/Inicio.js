import './Inicio.css';
import { Container, Grid } from '@mui/material';
import CompanyCard from "../../components/CompanyCard";
import Pagination from '@mui/material/Pagination';

const empresas = [
    {
        id: 1,
        name: 'AUDI',
        description: '"Future is an Attitude"',
        image: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT_E7A6muRkPVa8knchW_L4vXEAr_wMAK1MU4H0iwaAEJvl9AgsODAUyCzMsEESdBfCYLZgYG1gogI5IBBPj4SotyChKLEnP1yjNTSjIENQyIBMLsLq4hjp4-wQAkEtle6QAAAA?wid=550',
    },
    {
        id: 2,
        name: 'MERCEDES',
        description: '"The Best or Nothing"',
        image: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXq0SFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyWtsd2HtcUfp8qXGEubmJ0l3ItOB2NQnbApjdCI5uVcZQC3qkWkzNRL6m7jZ6qhKVFKF%25vq9vjyLRzLyYax7oxrH1Kj1n8wsOfoiZUbXM4FG4fTg906O6PDBSqSeWzy3tsd7oTcUfKAqXGE4yEJ0lg0VOB2PWEbApetbI5usQYQC3UkOkzNGm6m7j0aohKVBHE%25vq8cXyr%25kWfDYQJ0lCrnOIJRdAbQO703I5uefuQC3PS9kzN5P6m7jCGohKVzXW%25vqECXyLRaGmYaxH0ErH18Bin8wiAboiZ47ZM4FgsuTg735wrcldu63eZTmWk9Q6DF1ssfjcVWyDVS%25qjuauQFQ0ZzKG1BZeEsVnDV&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=400',
    },
    {
        id: 3,
        name: 'VOLVO',
        description: '"For Life"',
        image: 'https://cas.volvocars.com/image/dynamic/MY24_2317/536/exterior-v4/R8/73500/R98000/R190/FN01/TC06/_/_/TP05/_/JT02/GR08/T101/TJ02/NP02/TM04/_/CB04/EV02/JB0A/T221/LF05/_/VP09/FH01/_/_/_/_/_/_/SideModelpage.jpg?market=br&client=gox-graph%7ccar-config&w=600&bg=ffffff'
    },
    {
        id: 4,
        name: 'BMW',
        description: '"Sheer Driving Pleasure"',
        image: 'https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpua8rQbhSIqppglBgbRGal384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uRCHqoQh47wMvcYi9M%25CoMb3islBglUbuZcRScH86oMbnMdoPayJGy53LSrQ%25r9RXsW8zWubx7qogqaFHdl3ilUjdocRScH7o3MbnMd03YyJGy5B2urQ%25r9YpRW8zWunUUqogqaGb7l3ilU%258jcRScHzeBMbnMdgsSyJGy5iRRrQ%25r9SRbW8zWun9kqogqaGo5l3ilU%25t0cRScHzN7MbnMdgC8yJGy5i4DrQ%25r9SejW8zWunxbqogqaD%25Fl3ilUCQzcRScH48AMbnMdeo7yJGy5m3erQ%25r9sR2W8zWuKSkqogqa3%254l3ilURQzcRScHb8UMbnMdJozyJGy5QinrQ%25r98StW8zWuo9bqogqa3o1l3ilURy0cRScHbDBMbnMdJC9yJGy573ArQ%25r90tHW8zWuBc6qogqaY2Gl3ilUEtBcRScHFp1MbnMdm3syJGy5s0ErQ%25r9KRbW8zWuDAEqoQEdcNq0zxcqW8JuzM8nq0z6Fboy6oEd82',
    },
    {
        id: 5,
        name: 'Porsche',
        description: '"Winning together"',
        image: 'https://files.porsche.com/filestore/image/multimedia/none/992-2nd-c2-gts-modelimage-sideshot/thumbwhite/ef21394e-19bf-11ef-812b-005056bbdc38;sI;twebp/porsche-thumbwhite.webp'
    },
    {
        id: 6,
        name: 'Tesla',
        description: '"It\'s more than electric, it\'s Tesla"',
        image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png'
    },

];

function Inicio() {
    return (
        <div>
            <Container>
                <h1 className='titprinc'>Os principais veículos das mais conceituadas montadoras do mercado</h1>
                <Grid container spacing={6}>
                    {empresas.map(company => (
                        <Grid item key={company.id} xs={12} sm={6} md={4}>
                            <CompanyCard company={company} />
                        </Grid>
                    ))}
                </Grid>                
            </Container>
            <Pagination count={3} shape="rounded" className='paginasemp'/>
            <p></p>
            <section className="testimonials">
                <h2>Depoimentos de Clientes</h2>
                <div className="testimonial-list">
                    <p>"Ótimo serviço! Encontrei o carro perfeito para mim." - Cliente Satisfeito</p>
                    <p>"Excelentes ofertas e atendimento." - Outro Cliente Satisfeito</p>
                </div>
            </section>
        </div>
    );
}

export default Inicio;