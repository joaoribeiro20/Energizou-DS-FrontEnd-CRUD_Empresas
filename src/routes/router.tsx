import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../componets/Pages/homePage/Home.js'
import ListAll from '../componets/Pages/searchPage/searchAll/ListAll.js'
import EditInfoCompany from '../componets/Pages/editPage/EditInfoCompany.js'
import DeleteCompany from '../componets/Pages/deletePage/DeleteCompany.js'
import PageRegister from '../componets/Pages/registerNewCompanyPage/PageRegister.js' 

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
          <Route path='/Excluir' element={<DeleteCompany message=''/>}/>
          {/* <Route errorElement={<ErrorPage />}/> */}
        </Routes>
      </Router>
    </>
      
  );
}

export default router