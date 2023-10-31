import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './componets/Pages/homePage/Home.js'
import Cadastro from './componets/Pages/cadastroPage/Cadastro.js';

import GetExibir from './componets/Pages/buscaPage/GetExibir.js';
import EditarInfoEmpresa from './componets/Pages/editarPage/EditarInfoEmpresa.js';
import ExcluirEmpresa from './componets/Pages/excluirPage/ExcluirEmpresa.js';
/* import ErrorPage from './componets/errorPage.js'; */



function App() {
  return  (
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Cadastro' element={<Cadastro />}/>
          <Route path='/Buscar' element={<GetExibir />}/>
          <Route path='/Editar' element={<EditarInfoEmpresa />}/>
          <Route path='/Excluir' element={<ExcluirEmpresa />}/>
          {/* <Route errorElement={<ErrorPage />}/> */}
        </Routes>
      </Router>
  );
}

export default App
