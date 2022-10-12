import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
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
        <SidebarItem Icon={FaHome} Text="meu perfil" />
        <SidebarItem Icon={FaChartBar} Text="buscar serviços" />
        <SidebarItem Icon={FaUserAlt} Text="meus serviços" />
        <SidebarItem Icon={FaEnvelope} Text="sair" />
      </Content>
    </Container>
  )
}

export default Sidebar