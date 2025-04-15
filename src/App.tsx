import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Article from './components/Article';
import DettaglioArticolo from './components/ListaArticoli'; // crea questo componente dopo
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Article />} />
        <Route path="/articolo/:id" element={<DettaglioArticolo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
