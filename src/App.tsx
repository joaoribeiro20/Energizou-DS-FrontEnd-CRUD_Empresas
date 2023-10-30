
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componets/Pages/Home.jsx'
import Cadastro from './componets/Pages/Cadastro.jsx';

function App() {
  return  (
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Cadastro' element={<Cadastro />}></Route>
        </Routes>
      </Router>
  );
}

export default App
