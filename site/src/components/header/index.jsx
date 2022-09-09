
import './index.scss'

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
                <img className='logo-spartan' src='/assets/images/spartan 5.png'/>

                <img className='logo-menu' src='/assets/images/botao-de-menu-de-tres-linhas-horizontais.png'/>

              </div>
            </header>
        
       
    </main>
    
  )
}

export default Header