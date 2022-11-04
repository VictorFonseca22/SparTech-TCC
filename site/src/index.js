import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing'
import Login from './pages/Cadastros-Login/login'
import CadastraCliente from './pages/Cadastros-Login/cadastro-cliente'
import CadastraProfissional from './pages/Cadastros-Login/cadastro-profissional'
import PerfilProfissional from './pages/perfis-funcoes/perfil-profissional'
import BuscaProf from './pages/page-busca'
import ServicosAtivos from './pages/perfis-funcoes/servicos-ativos';
import SolicitarServ from './pages/perfis-funcoes/solicitar-servico';
import MeusServicos from './pages/perfis-funcoes/meus-servicos';
import MenuADM from './pages/ADM/menu-adm';
import RemocaoCli from './pages/ADM/remocaoCliente';
import RemocaoProf from './pages/ADM/remocaoProf';
import DenunCliente from './pages/ADM/denuncias-cliente';
import DenunProfissional from './pages/ADM/denuncias-profissional';
import SolicitacoesServ from './pages/perfis-funcoes/solicitacoesServ';
import ServicosRealizados from './pages/perfis-funcoes/servicosRealizados';
import ServicosPendentes from './pages/perfis-funcoes/servicosPendentes';
import PerfilCliente from './pages/perfis-funcoes/perfil-cliente';
import ServicosContratados from './pages/perfis-funcoes/servicosContratados';
import PagarServico from './pages/perfis-funcoes/pagar-servicos';

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
        <Route path='/servicos-contratados/:idParam' element={<ServicosContratados />} />
        <Route path='/pagamento' element={<PagarServico />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


