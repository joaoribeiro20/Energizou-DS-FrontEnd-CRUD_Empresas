import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componets/Pages/homePage/Home.js'
import Cadastro from './componets/Pages/cadastroPage/Cadastro.js';

import GetExibir from './Axios/GetExibir.js';
/* import GetViacep from './Axios/GetViacep.js'; */

function App() {
  return  (
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Cadastro' element={<Cadastro />}></Route>
          <Route path='/Pesquisar' element={<GetExibir />}></Route>
        </Routes>
      </Router>
  );
}

export default App
