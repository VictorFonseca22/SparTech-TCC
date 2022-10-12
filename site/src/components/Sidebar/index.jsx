import React from 'react'
import { Container, Content } from './styles'
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

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaUserAlt} Text="meu perfil" />
        <SidebarItem Icon={FaMapMarkedAlt} Text="buscar serviços" />
        <SidebarItem Icon={FaSuitcaseRolling} Text="meus serviços" />
        <SidebarItem Icon={FaDoorOpen} Text="sair" />
      </Content>
    </Container>
  )
}

export default Sidebar