import { LogarCliente, LogarProfissional } from '../../api/usuarioApi';
import { useNavigate } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { useState, useRef, useEffect } from 'react';
import './index.scss';
import storage from 'local-storage'
export default function Login() {
    const [Email, SetEmail] = useState('');
    const [Senha, SetSenha] = useState('');
    const [erro, SetErro] = useState('');
    const [Carregando, SetCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    const newStorageProfissional = (usuarioprofissional) => {
        storage('profissional-logado', usuarioprofissional)
    }
    const newStorageCliente = (usuariocliente) => {
        storage('cliente-logado', usuariocliente)
    }

    async function Click() {
        ref.current.continuousStart();
        SetCarregando(true);

        try {
            const resp = await LogarProfissional(Email, Senha);
            newStorageProfissional(resp)
            setTimeout(() => {
                navigate(`/perfil-profissional/${resp.id}`)
            }, 3000);


        } catch (err) {

            try {
                const r = await LogarCliente(Email, Senha)
                newStorageCliente(r)
                setTimeout(() => {
                    navigate(`/busca-profissional`)
                }, 3000);

            }
            catch (err2) {
                if (err2.response.status === 401) {
                    ref.current.complete();
                    SetCarregando(false);
                    SetErro(err2.response.data.erro);
                }
            }

        }
    }


    useEffect(() => {
        if (storage('profissional-logado')) {
            navigate(`/perfil-profissional/1`)
        }
        if (storage('cliente-logado')) {
            navigate(`/busca-profissional`)
        }

    }, [])

    document.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const btn = document.querySelector("#send");
            btn.click();
        }
    })



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
                        <input placeholder='Email' type='text' value={Email} onChange={e => SetEmail(e.target.value)} />
                    </div>

                    <div className='senha'>
                        <input placeholder='Senha' type='password' value={Senha} onChange={e => SetSenha(e.target.value)} />
                    </div>

                </div>

                <div className='entrar'>

                    <button id='send' className='foi' onClick={Click} disabled={Carregando} >

                        <img src='/assets/images/seta-direita.png' />

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