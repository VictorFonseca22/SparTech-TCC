import './index.scss';

export default function Login() {

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
                        <input placeholder='Email' type='text' />
                    </div>

                    <div className='senha'>
                        <input placeholder='Senha' type='password' />
                    </div>

                </div>

                <div className='entrar'>

                    <button className='foi'>

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