import { LogarCliente, LogarProfissional } from '../../../api/usuarioApi';
import { useNavigate } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { useState, useRef, useEffect } from 'react';
import './index.scss';
import storage from 'local-storage'
import { LogarAdmin } from '../../../api/admApi';
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
    const newStorageAdm = (adm) => {
        storage('adm-logado', adm)
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
                    navigate(`/perfil-cliente/${r.id}`)
                }, 3000);

            }
            catch (err2) {
                try {
                    const r = await LogarAdmin(Email, Senha)
                    newStorageAdm(r)
                    setTimeout(() => {
                    navigate(`/menu-adm`)
                }, 3000);
                } catch (err3) {
                    if (err3.response.status === 401) {
                        ref.current.complete();
                        SetCarregando(false);
                        SetErro(err3.response.data.erro);
                    }
                }
            }

        }
    }
    function StorageProfissional() {
        if (storage('profissional-logado')) {
            const idProfissional = storage('profissional-logado').id
            navigate(`/perfil-profissional/${idProfissional}`)
        }
    }

    function StorageCliente() {
        if (storage('cliente-logado')) {
            const idCliente = storage('cliente-logado').id
            navigate(`/perfil-cliente/${idCliente}`)
        }
        }
    


    useEffect(() => {
        StorageProfissional()
        StorageCliente()
        if(storage('adm-logado')) {
            navigate(`/menu-adm`)
        }

    }, [])

    function mostrarOcultarSenha(){
        const senha = document.getElementById("senha");
        if(senha.type==="password")
            senha.type = "text";
        
        else 
        senha.type = "password"
    }

    document.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const btn = document.querySelector("#send");
            btn.click();
        }
    })



    return (
        <main className='page-Login'>

            <LoadingBar color='#41B6E6' ref={ref} />

            <section className='logar'>

                <div className='logo' >

                    <a href='/' >
                        <img src='/assets/images/teste final 1.png'   />
                    </a>

                </div>

                <h1>login</h1>

                <div className='fazer'>

                    <div className='email'>
                        <input placeholder='Email' type='text' value={Email} onChange={e => SetEmail(e.target.value)} />
                    </div>

                    <div className='senha'>
                        <input placeholder='Senha' type='password' id='senha' value={Senha} onChange={e => SetSenha(e.target.value)}/>

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