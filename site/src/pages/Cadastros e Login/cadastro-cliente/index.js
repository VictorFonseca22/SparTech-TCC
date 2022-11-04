import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { CadastrarCliente} from '../../api/usuarioApi'
import { ToastContainer, toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import 'react-toastify/dist/ReactToastify.css';



export default function CadastroCliente() {
    const [Nome, SetNome] = useState ('');
    const [Email, SetEmail] = useState ('');
    const [Cpf, SetCpf] = useState ('');
    const [Senha, SetSenha] = useState ('');
    const [Idade, SetIdade] = useState('');
    const [Nascimento, SetNascimento] = useState('');
    const [Telefone, SetTelefone] = useState ('');

    async function SalvarPerfil() {
        try {
            const j = await CadastrarCliente(Nome,Email,Cpf,Senha,Idade,Nascimento,Telefone)
            toast.dark('✅cliente cadastrado');
        } catch (err) {
            if(err.response)
            toast.error(err.response.data.erro);
        else{
            toast.error(err.message)
        }
        }
    }


    return (
        <main className="page-CadasCliente">
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
                        <input placeholder='insira seu nome' type='text' value={Nome} onChange={e => SetNome(e.target.value)} />
                    </div>

                    <div className='text'>
                        <label>cpf</label>
                        <InputMask mask='999.999.999-99' placeholder='insira seu cpf' type='text' value={Cpf} onChange={e => SetCpf(e.target.value)} />
                    </div>
                </div>
                <div className='dois'>
                    <div className='text'>
                        <label>Email</label>
                        <input placeholder='insira seu email' type='text' value={Email} onChange={e => SetEmail(e.target.value)} />
                    </div>

                    <div className='text'>
                        <label>Senha</label>
                        <input placeholder='insira sua senha' type='password' value={Senha} onChange={e => SetSenha(e.target.value)} />
                    </div>
                </div>
                <div className='dois'>
                    <div className='text'>
                        <label>Idade</label>
                        <input placeholder='insira sua idade' type='number' value={Idade} onChange={e => SetIdade(e.target.value)} />
                    </div>

                    <div className='text'>
                        <label>Nascimento</label>
                        <input type='date' value={Nascimento} onChange={e => SetNascimento(e.target.value)} />
                    </div>
                </div>
                <div className='text-telefone'>
                    <label>Telefone</label>
                    <InputMask mask='(99) 99999-9999' placeholder='insira seu telefone' type='tel' value={Telefone} onChange={e => SetTelefone(e.target.value)} />
                </div>
                

                <div className='tipo'>
                    
                <Link to='/cadastro-cliente' >
                    <button className='cliente'>
                        <p>quero ser cliente</p>
                    </button>
                </Link>

                    <Link to='/cadastro-profissional'>
                    <button className='profissional'>
                        <p>quero ser um profissional</p>
                    </button>
                    </Link>

                </div>

                <button className='foi' onClick={SalvarPerfil}>
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