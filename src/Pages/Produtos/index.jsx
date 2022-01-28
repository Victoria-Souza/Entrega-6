import { GlobalStyle } from '../../styles/Global';
import Banner from '../../Components/Banner';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Produtos from '../../Components/Produtos';
import { Page } from '../../styles';

export default function Produtos_Page() {
  return (
    <>
      <GlobalStyle/>
      <Page>
        <Header />
        <Banner />
        <Produtos />
        <Footer />
      </Page>
    </>
  );
}