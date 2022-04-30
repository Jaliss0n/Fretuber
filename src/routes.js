import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cadastro from './pags/cadastro/cadastro';
import Home from './pags/home/home';
import Login from './pags/login/login';
import Sobre from './pags/sobre/sobre';


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;