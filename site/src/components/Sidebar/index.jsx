import React from 'react'
import { Container, Content } from './styles'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import storage from 'local-storage'
import {
  FaTimes,
  FaSuitcaseRolling,
  FaDoorOpen,
  FaUserAlt,
  FaMapMarkedAlt
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }
  const navigate = useNavigate()

  function sairClick() {
    storage.remove('profissional-logado')
    storage.remove('cliente-logado')
    storage.remove('adm-logado')
    toast.loading("Deslogando...")

    setTimeout(() => {
      toast.dismiss();
      toast.success('Você foi deslogado(a) com sucesso!')
    }, 600);

    setTimeout(() => {
      window.location.reload();
    }, 2000)

  }



  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        {storage('profissional-logado') &&
          <SidebarItem Icon={FaUserAlt} Text="Meu perfil" onClick={() => [navigate(`/perfil-profissional/${storage('profissional-logado').id}`)]} />
        }
        {storage('cliente-logado') &&
          <SidebarItem Icon={FaUserAlt} Text="Meu perfil" onClick={() => [navigate(`/perfil-cliente/${storage('cliente-logado').id}`)]}/>
        }
        {storage('adm-logado') &&
          <SidebarItem Icon={FaUserAlt} Text="Menu ADM" onClick={() => [navigate('/menu-adm')]} />
        }

        <SidebarItem Icon={FaMapMarkedAlt} Text="Buscar serviços" onClick={() => [navigate('/busca-profissional')]}/>

        <SidebarItem Icon={FaSuitcaseRolling} Text="Meus serviços" onClick={() => [navigate(`/meus-servicos/${storage('cliente-logado').id}`)]} />

        {!storage('profissional-logado') && !storage('cliente-logado') && !storage('adm-logado') &&
          <div>
            <SidebarItem Icon={FaDoorOpen} Text="Entrar" onClick={() => [navigate('/login')]} />
            <Toaster />
          </div>
        }

        {storage('adm-logado') &&
          <SidebarItem Icon={FaDoorOpen} Text="Sair" onClick={sairClick} />
        }
        {storage('profissional-logado') &&
          <SidebarItem Icon={FaDoorOpen} Text="Sair" onClick={sairClick} />
        }
        {storage('cliente-logado') &&
          <SidebarItem Icon={FaDoorOpen} Text="Sair" onClick={sairClick} />
        }

      </Content>
    </Container>
  )
}

export default Sidebar