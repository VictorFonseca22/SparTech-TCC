import { Logar } from '../../api/usuarioApi';
import {useNavigate} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { useState, useRef } from 'react';
import './index.scss';

export default function Login() {
    const [Email, SetEmail] = useState ('');
    const [Senha, SetSenha] = useState ('');
    const [erro, SetErro] = useState ('');
    const [Carregando, SetCarregando] = useState (false);

    const navigate = useNavigate();
    const ref = useRef();

    async function Click() {
        ref.current.continuousStart();
        SetCarregando(true);
        try {
            const Resp = await Logar(Email , Senha);

            setTimeout(() =>{
                navigate('/perfil-profissional')
            }, 3000);
            

        } catch (err) {
            ref.current.complete();
            SetCarregando(false);
            if (err.response.status === 401) {
                SetErro(err.response.data.erro);
            }
        }
    }

    return (
        <main className='Login-page'>

            <LoadingBar color='#41B6E6' ref={ref} />

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

                    <button className='foi' onClick={Click} disabled={Carregando} >

                        <img src='/assets/images/seta-direita.png'  />

                    </button>

                    <div className="Erro">
                        {erro}
                    </div>

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