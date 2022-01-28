import { GlobalStyle } from '../../styles/Global';
import Banner from '../../Components/Banner';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Novidades from '../../Components/Novidades';
import { Page } from '../../styles';

export default function Novidades_Page() {
  return (
    <>
      <GlobalStyle/>
      <Page>
        <Header />
        <Banner />
        <Novidades />
        <Footer />
      </Page>
    </>
  );
}