// importar Rotas e componentes
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';

// importar os tres componentes
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';


function App() {
  

  return (
  
   
    <Router>
      <Navbar/>      
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/empresa" element={<Empresa />} />
            </Routes>
      <Footer/>
    </Router>
  
  );
}




export default App;
