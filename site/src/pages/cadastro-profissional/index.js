import './index.scss';
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'

export default function Index() {
    const [Nome, SetNome] = useState ('');
    const [Email, SetEmail] = useState ('');
    const [Cpf, SetCpf] = useState ('');
    const [Senha, SetSenha] = useState ('');
    const [Idade, SetIdade] = useState('');
    const [Nascimento, SetNascimento] = useState('');
    const [Telefone, SetTelefone] = useState ('');
    const [Erro, SetErro] = useState ('');
    const [Carregando, SetCarregando] = useState(false);

    useEffect(() =>{
        if (storage('usuario-cadastrado')) {
            navigate('/perfil-profissional')
            
        }
    })



    return (
        <main className="page-CadasProf">

            <section className='cadastra'>

                <div className='logo'>

                    <a href='/'>
                        <img src='/assets/images/teste final 1.png' />
                    </a>

                </div>

                <h1>Cadastrar</h1>

                <div className='dois'>
                    <div className='text'>
                        <label>Nome</label>
                        <input type='text' />
                    </div>

                    <div className='text'>
                        <label>cpf</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='dois'>
                    <div className='text'>
                        <label>Email</label>
                        <input type='text' />
                    </div>

                    <div className='text'>
                        <label>Senha</label>
                        <input type='password' />
                    </div>
                </div>
                <div className='dois'>
                    <div className='text'>
                        <label>Idade</label>
                        <input type='number' />
                    </div>

                    <div className='text'>
                        <label>Nascimento</label>
                        <input type='date' />
                    </div>
                </div>
                <div className='dois'>
                    <div className='text'>
                        <label>Telefone</label>
                        <input type='number' />
                    </div>
                    <div className='text'>
                    <label>Tipo de Serviço</label>
                        <select></select>
                    </div>
                </div>
                <div className='tipo'>
                    <button className='cliente'>
                        <p>quero ser cliente</p>
                    </button>

                    <button className='profissional'>
                        <p>quero ser um profissional</p>
                    </button>
                </div>

                <button className='foi'>
                    <img src='/assets/images/seta-direita.png' />
                </button>

                <div className='informações'>

                    <h2>Já tem uma conta? <a href='/login'>Conecte-se</a> </h2>

                </div>










            </section>


            <div className='astronauta'>


                <h1>Bem-Vindo!</h1>

                <img src='/assets/images/planeta e astro.png' className='ola' />

            </div>






        </main>



    );
}