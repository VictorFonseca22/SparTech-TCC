
import './index.scss'
import Menu from '../../components/Menu';

const Header = () => {
  
  return (
    <main className='cabecalho'>
        <header>
              <div>
                <img className='logo' src='/assets/images/teste final 1.png'/>
              </div>

              <div className='buscar'>
                <input placeholder='Digite o serviço que busca' type='text'/>
                
                    <img className='jobseeker' src='/assets/images/Job Seeker.png'/>
              </div>

              <div className='a'>
                <a href='/login'>
                <img className='logo-spartan' src='/assets/images/spartan 5.png'/>
                </a>

                <Menu />

              </div>
            </header>
        
       
    </main>
    
  )
}

export default Header