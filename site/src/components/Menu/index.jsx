import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import {Toaster } from 'react-hot-toast'


const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    
    <Container>
      <img src='/assets/images/botao-de-menu-de-tres-linhas-horizontais.png'  className="svg"   onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
      <Toaster />
    </Container>
  )
}

export default Header