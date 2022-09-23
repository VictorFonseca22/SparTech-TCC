import './index.scss';
import CardProf from '../../components/cardProf'

export default function Busca() {

    return (
        <main className='Busca-prof'>

            <header className="barra">


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

                    <div className='voltar'>
                        <img className='logo-menu' src='/assets/images/voltar.png' />
                        <h1>voltar</h1>
                    </div>

                </div>

            </header>





            <div className='resultado'>

                <CardProf img={'/assets/images/moça.png'} nome='alessandra Maria' tiposerv='especialista em front-end' avaliacao = '4.0' sererealizado= '28 serviços realizados' destaque = 'destaque espartech' />

                <CardProf img={'/assets/images/moça.png'} nome='alessandra Maria' tiposerv='especialista em front-end' avaliacao = '4.0' sererealizado= '28 serviços realizados' destaque = 'destaque espartech' />

                <CardProf img={'/assets/images/moça.png'} nome='alessandra Maria' tiposerv='especialista em front-end' avaliacao = '4.0' sererealizado= '28 serviços realizados' destaque = 'destaque espartech' />

            </div>


        </main>
    );

}