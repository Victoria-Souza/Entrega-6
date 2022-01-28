import { GlobalStyle } from '../../styles/Global';
import Banner from '../../Components/Banner';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { Page } from '../../styles';
import Inicio from '../../Components/Inicio';


export default function Home(){
    return(
        <>
            <GlobalStyle/>
            <Page>
                <Header />
                <Banner />
                <Inicio />
                <Footer />
            </Page>
        </>
    )
}