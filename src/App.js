
import './App.css';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import { Page } from './styles';

function App() {
  return (
    <Page>
      <Header />
      <Banner />
      <Produtos />
      <Footer />
    </Page>
  );
}

export default App;
