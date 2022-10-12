import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaUserAlt, 
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaUserAlt} Text="meu perfil" />
        <SidebarItem Icon={FaChartBar} Text="buscar serviços" />
        <SidebarItem Icon={FaHome} Text="meus serviços" />
        <SidebarItem Icon={FaEnvelope} Text="sair" />
      </Content>
    </Container>
  )
}

export default Sidebar