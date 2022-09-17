import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { CadastrarCliente} from '../../api/usuarioApi'


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
            alert('cliente cadastrado')
        } catch (err) {
            
        }
    }


    return (
        <main className="page-CadasCliente">

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
                        <input type='number' value={Idade} onChange={e => SetIdade(e.target.value)} />
                    </div>

                    <div className='text'>
                        <label>Nascimento</label>
                        <input type='date' value={Nascimento} onChange={e => SetNascimento(e.target.value)} />
                    </div>
                </div>
                <div className='text'>
                    <label>Telefone</label>
                    <input type='number' value={Telefone} onChange={e => SetTelefone(e.target.value)} />
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