import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/landing'
import Login from './pages/login'
import CadastraCliente from './pages/cadastro-cliente'
import CadastraProfissional from './pages/cadastro-profissional'
import PerfilProfissional from './pages/perfil-profissional'
import BuscaProf from './pages/page-busca'
import ServicosAtivos from './pages/servicos-ativos';
import SolicitarServ from './pages/solicitar-servico';
import MeusServicos from './pages/meus-servicos';
import MenuADM from './pages/menu-adm';
import RemocaoCli from './pages/remocaoCliente';
import RemocaoProf from './pages/remocaoProf';
import DenunCliente from './pages/denuncias-cliente';
import DenunProfissional from './pages/denuncias-profissional';
import SolicitacoesServ from './pages/solicitacoesServ';
import ServicosRealizados from './pages/servicosRealizados';
import ServicosPendentes from './pages/servicosPendentes';
import PerfilCliente from './pages/perfil-cliente';
import ServicosContratados from './pages/servicosContratados';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<LandingPage />} />
         <Route path='/login' element={<Login />} />
         <Route path='/cadastro-cliente' element={<CadastraCliente />} />
         <Route path='/cadastro-profissional' element={<CadastraProfissional />} />
         <Route path='/perfil-profissional' element={<PerfilProfissional />} />
         <Route path='/perfil-profissional/:idParam' element={<PerfilProfissional />} />
         <Route path='/perfil-cliente/:idParam' element={<PerfilCliente />} />
         <Route path='/busca-profissional' element={<BuscaProf />} />
         <Route path='/servicos-ativos/:idParam' element={<ServicosAtivos />} />
         <Route path='/solicitar-servico/:idParam' element={<SolicitarServ />} />
         <Route path='/meus-servicos/:idParam' element={<MeusServicos />} />
         <Route path='/menu-adm' element={<MenuADM />} />
         <Route path='/remover-cliente' element={<RemocaoCli />} />
         <Route path='/remover-profissional' element={<RemocaoProf />} />
         <Route path='/remover-profissional' element={<RemocaoProf />} />
         <Route path='/denuncias-cliente' element={<DenunCliente />} />
         <Route path='/denuncias-cliente/:idParam' element={<DenunCliente />} />
         <Route path='/denuncias-profissional' element={<DenunProfissional />} />
         <Route path='/denuncias-profissional/:idParam' element={<DenunProfissional />} />
         <Route path='/solicitacoes-de-servico/:idParam' element={<SolicitacoesServ />} />
         <Route path='/servicos-realizados/:idParam' element={<ServicosRealizados />} />
         <Route path='/servicos-pendentes/:idParam' element={<ServicosPendentes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


