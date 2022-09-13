import './index.scss';

export default function CadastroCliente() {



    return (
        <main className="page-CadasCliente">

            <div className='cadastra'>

                <div className='logo'>

                    <a href='/'>
                        <img src='/assets/images/teste final 1.png' />
                    </a>

                </div>

                <h1>Cadastrar</h1>

                <div className='cadastro'>

                    <div className='nome'>
                        <label>Nome</label>
                        <input type='text' />
                    </div>

                    <div className='cpf'>
                        <label>cpf</label>
                        <input type='text' placeholder='Apenas Números' />
                    </div>

                    <div className='email'>
                        <label>Email</label>
                        <input type='text' />
                    </div>

                    <div className='senha'>
                        <label>Senha</label>
                        <input type='password' />
                    </div>

                    <div className='idade'>
                        <label>Idade</label>
                        <input type='number' />
                    </div>

                    <div className='nascimento'>
                        <label>Nascimento</label>
                        <input type='date' />
                    </div>

                    <div className='telefone'>
                        <label>Telefone</label>
                        <input type='number' />
                    </div>


                    <button className='cliente'>
                        <p>quero ser cliente</p>
                    </button>

                    <button className='profissional'>
                        <p>quero ser um profissional</p>
                    </button>

                    <button className='foi'>
                        <img src='/assets/images/seta-direita.png' />
                    </button>

                    <div className='informações'>

                        <h2>Já tem uma conta? <a href='/login'>Conecte-se</a> </h2>

                    </div>

                    <div className='astronauta'>

                        <img src='/assets/images/planeta e astro.png' className='ola' />

                    </div>


                </div>







            </div>








        </main>



    );
}