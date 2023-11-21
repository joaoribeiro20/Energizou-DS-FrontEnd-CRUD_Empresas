import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../Pages/homePage/Home.js'
import ListAll from '../Pages/searchPage/searchAll/ListAll.js'
import EditInfoCompany from '../Pages/editPage/EditInfoCompany.js'
import DeleteCompany from '../Pages/deletePage/DeleteCompany.js'
import PageRegister from '../Pages/registerNewCompanyPage/PageRegister.js' 

/* import ErrorPage from './componets/errorPage.js'; */



function router() {
  return  (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Cadastro' element={<PageRegister />}/>
          <Route path='/Buscar' element={<ListAll />}/>
          <Route path='/Editar' element={<EditInfoCompany />}/>
          <Route path='/Excluir' element={<DeleteCompany />}/>
          {/* <Route errorElement={<ErrorPage />}/> */}
        </Routes>
      </Router>
    </>
      
  );
}

export default router