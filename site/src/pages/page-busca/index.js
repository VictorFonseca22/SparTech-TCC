import './index.scss';
import Header from '../../components/header';

export default function Busca() {

    return (
        <main className='Busca-prof'>

            <div className="barra">

                
                    <header>

                        <div>
                            <img className='logo' src='/assets/images/teste final 1.png' />
                        </div>

                        <div className='buscar'>
                            <input placeholder='Digite o serviço que busca' type='text' />

                            <img className='jobseeker' src='/assets/images/Job Seeker.png' />
                        </div>

                        <div className='a'>
                            <a href='/login'>
                                <img className='logo-spartan' src='/assets/images/spartan 5.png' />
                            </a>

                            <img className='logo-menu' src='/assets/images/voltar.png' />
                            <h1>voltar</h1>

                        </div>

                    </header>


            </div>


            <div className='resultado'>

                <div className="pessoa">

                    <img src='/assets/images/moça.png' />

                    <h1>alessandra maria</h1>

                    <p>especialista em front-end</p>

                    <img src='/assets/images/estrela.png' />
                    <img src='/assets/images/estrela.png' />
                    <img src='/assets/images/estrela.png' />
                    <img src='/assets/images/estrela.png' />

                    <p>4.0</p>

                    <p>28 serviços realizados</p>

                    <img src='/assets/images/destaque.png' />

                    <h1>destaque espartech</h1>

                    <img src='/assets/images/sla.png' />

                </div>

            </div>


        </main>
    );

}