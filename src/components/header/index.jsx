
import './index.scss'

const Header = () => {
  
  return (
    <main>
        <header>
              <div>
                <img className='logo' src='../images/teste final 1.png'/>
              </div>

              <div>
                <input placeholder='Digite o serviço que busca' type='text'/>
                <label>
                    <img className='jobseeker' src='../images/Job Seeker.png'/>
                </label>
              </div>

              <div>
                <img className='logo-spartan' src='../images/spartan 5.png'/>

          </div>
            </header>
        
       
    </main>
    
  )
}

export default Header