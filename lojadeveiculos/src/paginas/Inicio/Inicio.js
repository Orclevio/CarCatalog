import './Inicio.css';
import { Container, Grid } from '@mui/material';
import CompanyCard from "../../components/CompanyCard";
import ProductCard from "../../components/ProductCard";
import Pagination from '@mui/material/Pagination';

const empresas = [
    {
        id: 1,
        name: 'Audi',
        description: '"Future is an Attitude"',
        image: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT_E7A6muRkPVa8knchW_L4vXEAr_wMAK1MU4H0iwaAEJvl9AgsODAUyCzMsEESdBfCYLZgYG1gogI5IBBPj4SotyChKLEnP1yjNTSjIENQyIBMLsLq4hjp4-wQAkEtle6QAAAA?wid=550',
    },
    {
        id: 2,
        name: 'Mercedes',
        description: '"The Best or Nothing"',
        image: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXq0SFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyWtsd2HtcUfp8qXGEubmJ0l3ItOB2NQnbApjdCI5uVcZQC3qkWkzNRL6m7jZ6qhKVFKF%25vq9vjyLRzLyYax7oxrH1Kj1n8wsOfoiZUbXM4FG4fTg906O6PDBSqSeWzy3tsd7oTcUfKAqXGE4yEJ0lg0VOB2PWEbApetbI5usQYQC3UkOkzNGm6m7j0aohKVBHE%25vq8cXyr%25kWfDYQJ0lCrnOIJRdAbQO703I5uefuQC3PS9kzN5P6m7jCGohKVzXW%25vqECXyLRaGmYaxH0ErH18Bin8wiAboiZ47ZM4FgsuTg735wrcldu63eZTmWk9Q6DF1ssfjcVWyDVS%25qjuauQFQ0ZzKG1BZeEsVnDV&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=400',
    },
    {
        id: 3,
        name: 'Volvo',
        description: '"For Life"',
        image: 'https://cas.volvocars.com/image/dynamic/MY24_2317/536/exterior-v4/R8/73500/R98000/R190/FN01/TC06/_/_/TP05/_/JT02/GR08/T101/TJ02/NP02/TM04/_/CB04/EV02/JB0A/T221/LF05/_/VP09/FH01/_/_/_/_/_/_/SideModelpage.jpg?market=br&client=gox-graph%7ccar-config&w=600&bg=ffffff'
    },
    {
        id: 4,
        name: 'Bmw',
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


const produtos = [
    {
        id: 1,
        name: 'Volkswagen Polo 2024',
        description: 'O Volks da sua vida!',
        image: 'https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAA_y2Uu84dRQzHTxIlIIogQAilR0dIkfDM3rc4QknoECgFCkWKT57dueyZ2dt4L9-3FY9DkYfgPWh4ASoaGiR8JKqf7LE93r89--Gv09M1np68f__6h39ffGntH-Xj0-l-Op1Oj9j_-P3rD39_9c-zj3_-83_3sxenp8sa1fiIQ94-_qTr0Wq4Ttp-evqIXacnp9NHvzJ-vxmn58_XGCaM2H_barXaz77J07wWjZSlTrURUtbYqLSRbWlM25R1lmRSlKbGz0-np79hCNAW_WgwzUwch2VqQB1p6lMBiUhy-HqJnbU63vXxzk0SZPay8IWHvHi5XwFx1QIBFa6tYEQ5saVbueyAxq1WAtq-tPeAbpO3kE5lqwH0SuoScFiqwwKSLh44j6xGDqGQE5emmMeZ8SA8OxeU94y1rXdOWAmrHnDfCj5T6KRHxnKVjrHJg0CpsTAGlPXDA4cEpWTL0H5ga1Rpf2XskiSoSBI5YUGxXaFpYzkjNA4TJxhxvkpo9i3h5lvdpQahNU5eFYNvkIzNigR0M7LaoFsjupax11sBunPlEhih7HPQkyvvOZK6cudIorVuwGArTASjXRYzxlqwBMbSFiQYt29c0wQsgmJQ3eVgYpdsfBZH2TA2Ki2HHGR4Drbt0z0Hq4fKWrDeiQfD2ILIwPbjkhRgB5OtJdgppqtkUNELsBGrJWGoWrMzbjlWYGmyEsGhz46cEdKpZCwdN-jUVkwOnN6rXoKzbc6yOj4Z2Or6YuC8jtLhAOfRN3xGe9Ut0A2q7jV0kbJQgMfoK8ugmcfo1b1kXXw4xEMJfnTpzCHjll4z8LGXB5_dRsUWYc41Pa0eJfjVFr5hOO_ZOpQPAgI2OdcMyqUWIWgMIjBCRQljkNxn0DHlEYcOK1YwjLGcGBEToxkbrxEE0lXkPKKkySHssZol9EiFTqE3WJOAvvNpm0DvtWYhe79WRwYsdUsV9GSQxzHgVs4CBr59QQZVO8I4cDcCJuwtv6pJuYxvj4hyCIy26SrGWK2esdZXhMgLdkiIrS_5MyOvVrYzwsZzjzpKfmqRFqFu2LJ5hbiagTUjVNm9ZNhiThirIAekYkUIpHHuUiDr66kGcpgeitGnTQnUqSGdGDrlVaSgy1gADViGG1zFr4rGIb_nYlOcWUia1vLmJJfxOGgxCQ-OFu6PgPYpWfk-VpBfMe1UDVxlP-pJAx2rGHZY_JZxL8sUVCZhiSZvGfwp2MNy-8sksGx63gQs-yq5-eVhklrBqjHhjVytE6zEprzkTd5Gmnl3t2Wruw72bpt5xDtRZg3sO1a8Z4fpBY_j8FuqMjiIRDy-08PW8V-w18NyeffL3Zs375K712Noz3vXLu4i60Scne6sWy51Ic4YJoeXJa763GCvI15evXubfH_36i65E0KeceC_99KNA11-uiWdadE6doPFwQZ9kfm5H1sdot464qjLj2_l2YZRIa_h7vUD6XnVQ6MvyRdPuPJ_ct4IsEwGAAA.webp?width=864',
    },
    {
        id: 2,
        name: 'Fiat Strada 2024',
        description: 'O carro mais vendido do país!',
        image: 'https://strada.fiat.com.br/images/Versions/ultra-turbo-at/f4f4f4.webp',
    },
    {
        id: 3,
        name: 'Chevrolet Onix 2024',
        description: 'Tudo que você merece em um carro!',
        image: 'https://www.chevrolet.com.br/bypass/gmccontenthub/chevrolet/brasil/colorizer_onix/images/colorizer/chevrolet-onix-branco-summit-3-4-frente.png'
    },
    {
        id: 4,
        name: 'Hyundai HB20 2024',
        description: 'Novo Hyundai HB20!',
        image: 'https://www.hyundai.com.br/content/dam/hmb/header/vehicles/lateral_HB20_PlatinumPlus_PrataBrisk_2022.avif',
    },
    {
        id: 5,
        name: 'Fiat Argo 2024',
        description: 'Sua vida pede um!',
        image: 'https://argo.fiat.com.br/images/Versions/desktop/argo-1.0/249@3x.png'
    },
    {
        id: 6,
        name: 'Fiat Mobi 2024',
        description: 'O Trending Topic das ruas',
        image: 'https://mobi.fiat.com.br/images/Versions/like/000000.webp'
    },
    {
        id: 7,
        name: 'Volkswagen T-Cross 2024',
        description: 'Muito Prazer, chegou o Novo T-Cross!',
        image: 'https://media.vw.mediaservice.avp.tech/media/fast/H4sIAAAAAAAA_y3Uu84dNRAA4JNESRBFECCEqGjQEVIkxt77FkcogQ6BUqBQpPhl7_qyx96bx-s9_1Y8EOIZeA8aXoCKhgaJ-aVUn8Yee7322L_9fXq6hdOTd-9e__DfF58Z82f9-HS6LafT6RG1P373-rd_Pv_32Qc___W--dmXp6dxC3J-RClvHn84jMIouC7KfHR6Tk2nJ6fT81-JPx6C04sXW_CLCGL8pldyMx9_3TSs66pcsrbVVVXkrOrbqq0yVZVctVmftU2n2rr75HR6-rvwHvpqnLXICx3mKS4dSJ0XU85wClg7yFhWwlcxDMaocDeGO7tw4MXLMpYRyupl0iDEppgAIQNfCNVnHTWqwBYGQtvNcBBmrM0NhE28p8ZBFhulOMlVDWKKzWFAoKruO8IoQSnoS7wSoQwrcc8cNUbBb8TWtzsN2FC0EcSeKleAFJa7RMRrcSUSPxCknCutQRo33TOQXkreE8pNFM07Rw4yIBeUGQVLNG7v28ig60O9CuisyGxJhPWaQ7enrC-gFyHHGno15FpAry2_SiIZVoLqZqU5qF4zFYi9TRWowZZjInw9Uspi61sGCod6ZwRubQda9ExfQUtXcgFa2SIUxFaJDLTB5HPQdk-aIi8qLwlshxJ0GLLEiZl3xIGazsGoqTEGjLPs3hLJcwZmnKNvwEy62GowS8g3DiaIJlIUZKsowsXQ161wxVEScaBzsDJViwWr9mbkYKlpqoixmihzwHw6wDrhOsrEvRkiDJNsR0X4KnIiFhMRsPAVOKGYU0RwjSFwpUN18sZpJ5w_2H0Nbrb5SplzKg8NLoz8oL6HMyrA4eYEB7eZyl0J6xxFh3T-gZjT4r3oSprTS5sbirplXXPwSnjmCd9gQUycluRVyC1lzqFeSvBBZFoRiQoHPKom0ADErKO-iK2S4PfQrDWMAiuVw6hFiwxGp9SYEVtzFEB73JsKRtRiL2ASqV4ZTPTZ6AlsdgHzRMtgsIjR0D1apC3okgQh-OSJvigNMTebI7b2KiBQSR0cQu9q-ttAxYQV4ROddFCB0-UKGJnMiJSvEcKmJ9ozFLK45YSp1ozYGFpAGZpkAJVYB-ozrl1aQCvyQxJj3tWAg5w4RYPKaVtxsAVVAXpVhwpwErV_wDZ0nd4_EDhP5Y2mXsJK-4nLVj_0BVsNBNrCdYQvJE0W-1qWhM7oOmGkX4iACVe6jUi7e3sAGyowPDY27RBdKmidcfGy4BCDLnsCUyFGiA9vTgZx3zgKiPcLpzPajGW0L0k6HjNIM65UEymmdhhgRyyMhn0XDZXbIUNGx3HokcUeDpdyWcCByMLxrZrSQG_hqKZ4efvL3Xffvc3uXs--P-9DH-2Ftxk7WzUYGy9txc7CL1ZcYtjUuROjCuLy6u2b7Pu7V3fZHWP8LCZ6w-MwT3j56WHQGaNSYZiMmIxXF16ex7lXPqg0IGVdfnzDz8bPUlBR7k7do1o3NXXqkn36hGb-H5Q6szpSBgAA.webp?width=864'
    },

];

function Inicio() {
    return (
        <div>
            <div id="page-produtos">
            <Container>
                <h1 className='titprinc'>Os veículos mais pesquisados pelos consumidores:</h1>
                <Grid container spacing={6}>
                    {produtos.map(product => (
                        <Grid item key={product.id} xs={12} sm={6} md={4}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>                
            </Container>
            <Pagination count={3} shape="rounded" className='paginasemp'/>
            </div>
            <p></p>
            <br></br>
            <p></p>
            <br></br>
            <div id="page-empresas">
            <Container>
            <h1 className='titprinc'>Visualizar modelos por montadora:</h1>
                <Grid container spacing={6}>
                    {empresas.map(company => (
                        <Grid item key={company.id} xs={12} sm={6} md={4}>
                            <CompanyCard company={company} />
                        </Grid>
                    ))}
                </Grid>                
            </Container>
            <Pagination count={3} shape="rounded" className='paginasemp'/>
            </div>
            <p></p>
           {/* <section className="testimonials">
                <h2>Depoimentos de Clientes</h2>
                <div className="testimonial-list">
                    <p>"Ótimo serviço! Encontrei o carro perfeito para mim." - Cliente Satisfeito</p>
                    <p>"Excelentes ofertas e atendimento." - Outro Cliente Satisfeito</p>
                </div>
            </section>
*/}
        </div>
    );
}

export default Inicio;