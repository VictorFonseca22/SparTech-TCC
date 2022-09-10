import './index.scss';

export default function Login() {

    return(
        <main className='Login-page'> 

        

        <div className='logar'>

            <img src='/assets/images/teste final 1.png'/>

            <h1>login</h1>

           <input placeholder='Email' type='text'/>

           <input placeholder='Senha' type='text'/>

           <button className='foi'>
            <a href='/'>
            <img src='/assets/images/seta-direita.png' />
            </a>
           </button>

           <h2>Não tem uma conta?</h2>

           <a href='/'>
           <h2 className='cadastra'>Cadastre-se!</h2>
           </a>

           <p>esqueci a senha</p>

        </div>

        <div className='astronauta'>

        <img src='/assets/images/planeta e astro.png' className='ola'/>
        </div>
        

        
        </main>
    );
    
}