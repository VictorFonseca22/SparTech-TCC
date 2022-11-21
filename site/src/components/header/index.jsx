
import './index.scss'
import Menu from '../../components/Menu';
import storage from 'local-storage'
const Header = () => {
  
  return (
    <main className='cabecalho'>
        <header>
              <div>
                <img className='logo' src='/assets/images/teste final 1.png'/>
              </div>

             

              <div className='a'> 
                <a href='/login'>
                <img className='logo-spartan' src='/assets/images/spartan 5.png'/>
                <p className='login'>LOGIN</p>
              </a>
                
                

              <Menu />

              </div>
            </header>
        
       
    </main>
    
  )
}

export default Header