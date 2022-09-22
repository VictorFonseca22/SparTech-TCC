import './index.scss';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CadastrarProfissional, ListaCategoria } from '../../api/usuarioApi';

export default function CadastroProfissional() {
    const [Nome, SetNome] = useState('');
    const [Email, SetEmail] = useState('');
    const [Cpf, SetCpf] = useState('');
    const [Senha, SetSenha] = useState('');
    const [Nascimento, SetNascimento] = useState('');
    const [Telefone, SetTelefone] = useState('');
    const [Categoria, SetCategoria] = useState([]);
    const [IdServico, SetIdServico] = useState()



    async function SalvarProf() {
        try {
            const j = await CadastrarProfissional(Nome, Email, Cpf, Senha, Nascimento, Telefone, Categoria)
            toast.dark('✅profissional cadastrado');
        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro);
            else {
                toast.error(err.message)
            }
        }
    }

    async function CarregarServico() {
        const r = await ListaCategoria();
        SetCategoria(r);
    }

    useEffect(() => {
        CarregarServico();
    }, [])



    return (
        <main className="page-CadasProf">
            <ToastContainer />


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
                        <input type='text' value={Nome} onChange={e => SetNome(e.target.value)} />
                    </div>

                    <div className='text'>
                        <label>cpf</label>
                        <input type='text' value={Cpf} onChange={e => SetCpf(e.target.value)} />
                    </div>
                </div>
                <div className='dois'>
                    <div className='text'>
                        <label>Email</label>
                        <input type='text' value={Email} onChange={e => SetEmail(e.target.value)} />
                    </div>

                    <div className='text'>
                        <label>Senha</label>
                        <input type='password' value={Senha} onChange={e => SetSenha(e.target.value)} />
                    </div>
                </div>
                <div className='dois'>
                    <div className='text'>
                        <label>Idade</label>
                        <input type='number' />
                    </div>

                    <div className='text'>
                        <label>Nascimento</label>
                        <input type='date' value={Nascimento} onChange={e => SetNascimento(e.target.value)} />
                    </div>
                </div>
                <div className='dois'>
                    <div className='text'>
                        <label>Telefone</label>
                        <input type='number' value={Telefone} onChange={e => SetTelefone(e.target.value)} />
                    </div>

                    <div className='text'>
                    <label>Tipo de Serviço</label>
                        <select></select>
                    </div>

                </div>
                <div className='tipo'>
                    <Link to='/cadastro-cliente' >
                        <button className='cliente'>
                            <p>quero ser cliente</p>
                        </button>
                    </Link>

                    <Link to='/cadastro-profissional' >
                        <button className='profissional'>
                            <p>quero ser um profissional</p>
                        </button>
                    </Link>

                </div>

                <button className='foi' onClick={SalvarProf}>
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