import './index.scss';
import { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import {toast, Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { CadastrarProfissional, ListaCategoria } from '../../api/usuarioApi';

export default function CadastroProfissional() {
    const [nome, SetNome] = useState('');
    const [email, SetEmail] = useState('');
    const [cpf, SetCpf] = useState('');
    const [senha, SetSenha] = useState('');
    const [nascimento, SetNascimento] = useState('');
    const [telefone, SetTelefone] = useState('');
    const [servico, SetServico] = useState([]);
    const [IdServico, SetIdServico] = useState()



    async function SalvarProf() {
        console.log(servico) 
        console.log(IdServico)
       try {
            await CadastrarProfissional(nome, email, cpf, senha, nascimento, telefone, IdServico)
            toast('✅profissional cadastrado');
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
        SetServico(r);
    }

    useEffect(() => {
        CarregarServico();
    }, [])

   

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
                        <input placeholder='Insira seu nome' type='text' value={nome} onChange={e => SetNome(e.target.value)} />
                    </div>

                    <div className='text'>
                        <label>cpf</label>
                        <input placeholder='insira seu cpf' type='text' value={cpf} onChange={e => SetCpf(e.target.value)} />
                    </div>
                </div>
                <div className='dois'>
                    <div className='text'>
                        <label>Email</label>
                        <input placeholder='insira seu email' type='text' value={email} onChange={e => SetEmail(e.target.value)} />
                    </div>

                    <div className='text'>
                        <label>Senha</label>
                        <input placeholder='insira sua senha' type='password' value={senha} onChange={e => SetSenha(e.target.value)} />
                    </div>
                </div>
                <div className='dois'>
                    <div className='text'>
                        <label>Idade</label>
                        <input placeholder='insira sua idade' type='number' />
                    </div>

                    <div className='text'>
                        <label>Nascimento</label>
                        <input type='date' value={nascimento} onChange={e => SetNascimento(e.target.value)} />
                    </div>
                </div>
                <div className='dois'>
                    <div className='text'>
                        <label>Telefone</label>
                        <input placeholder='insira seu telefone' type='number' value={telefone} onChange={e => SetTelefone(e.target.value)} />
                    </div>

                    <div className='text'>
                    <label>Tipo de Serviço</label>
                    <select value={IdServico} onChange={e => SetIdServico(e.target.value)} >
                            <option selected disabled hidden>Selecione</option>

                            {servico.map(item =>
                                <option value={item.IdCategoria}> {item.servico} </option>
                            )}
                        </select>
                    </div>

                </div>
                <div className='tipo'>
                    <Link to='/cadastro-cliente' >
                        <button className='cliente'>
                            <p>Quero ser cliente</p>
                        </button>
                    </Link>

                    <Link to='/cadastro-profissional' >
                        <button className='profissional'>
                            <p>Quero ser um profissional</p>
                        </button>
                    </Link>

                </div>
            <div>
                <button className='foi' onClick={SalvarProf}>
                    <img src='/assets/images/seta-direita.png' />
                </button>
                <Toaster/>
                </div>

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