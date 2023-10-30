import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componets/Pages/Home.jsx'
import Cadastro from './componets/Pages/Cadastro.jsx';

import GetExibir from './Axios/GetExibir.js';
import GetViacep from './Axios/GetViacep.js';

function App() {
  return  (
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Cadastro' element={<Cadastro />}></Route>
          <Route path='/Pesquisar' element={<GetViacep />}></Route>
          {/* <Route path='/Editar' element={}></Route>
          <Route path='/Excluir' element={}></Route>
          <Route path='/Login' element={}></Route> */}
        </Routes>
      </Router>
  );
}

export default App
