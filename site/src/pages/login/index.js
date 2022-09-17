import axios from 'axios'
import { useState } from 'react';
import './index.scss';

export default function Login() {
    const [Email, SetEmail] = useState ('');
    const [Senha, SetSenha] = useState ('');

    async function Entra() {
        const j = await axios.get('') 
    }


    return (
        <main className='Login-page'>


            <section className='logar'>

                <div className='logo'>

                    <a href='/'>
                        <img src='/assets/images/teste final 1.png' />
                    </a>

                </div>

                <h1>login</h1>

                <div className='fazer'>

                    <div className='email'>
                        <input placeholder='Email' type='text' value={Email} onChange={e => SetEmail (e.target.value) } />
                    </div>

                    <div className='senha'>
                        <input placeholder='Senha' type='password' value={Senha} onChange={e => SetSenha (e.target.value) } />
                    </div>

                </div>

                <div className='entrar'>

                    <button className='foi' onClick={Entra}>

                        <img src='/assets/images/seta-direita.png' />

                    </button>

                </div>

                <div className='informações'>
                    <div>
                        <h2>Não tem uma conta?</h2>


                        <h2 className='cadastra'> <a href='/cadastro-cliente'>Cadastre-se!</a> </h2>
                    </div>

                    <p className='esqueci'>esqueci a senha</p>

                </div>

            </section>

            

            <img src='/assets/images/planeta e astro.png' className='astronauta' />

        



        </main>
    );

}