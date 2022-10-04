import './index.scss';
import Header from '../../components/header';
import Categoria from '../../components/categoria';


export default function Landing() {

    return (
        <main className='landing-page'>
            <Header />
            <section className='faixa-1'>

                <div className='introdução'>
                    <h1>A UM ANO LIGANDO O CLIENTE AOS MELHORES PROFISSIONAIS</h1>

                    <button className='b'>SAIBA MAIS</button>
                </div>
            </section>

            <section className='faixa-2'>
                <h4>serviços mais solicitados</h4>
                <div className='categorias'>
                    <Categoria nome='Montagem e Manutenção de Computadores' />
                    <Categoria nome='Limpeza e Higienização de Computadores' />
                    <Categoria nome='Cabeamento de Redes' />
                    <Categoria nome='Desenvolvimento de Website' />
                </div>
            </section>

            <div className='destaques'>

                <h1>PROFISSIONAIS QUE ESTÃO EM NOSSO SITE</h1>

                <h2>Bruno oliveira</h2>

                <p>PROFISSIONAL ESPARTECH DESDE 2021</p>

                <h4>DEV SÊNIOR</h4>
                <h4>PROFESSOR</h4>
                <h4>GESTOR DE EMPRESAS</h4>

                <div className="foto">
                    <img src="./assets/images/bruno.png" />
                </div>


            </div>

            <div className='historia'>

                <div className="centro">

                    <h1>surgimento da EsparTech</h1>

                    <p>O EsparTech nasceu em 2021, com o propósito de conectar quem precisa com quem sabe fazer. Somos um plataforma que conecta clientes e profissionais.</p>

                </div>

                <div className='esquerda'>

                    <h1>Como o EsparTech funciona para o cliente?</h1>

                    <p>O cliente da EsparTech, terá o melhor serviço dos nossos profissionais. Caso o profissional não tenha cumprido com o trabalho, você será reembolsado!
                        pois para solicitar um serviço é necessário um entrada no pagamento no valor de 25 reais. </p>

                    <h1>como a espartech beneficia o profissional?</h1>

                    <p>O profissional da EsparTech, terá o reconhecimento REGIONAL pelo seu trabalho.
                        quanto mais avaliações positivas no site você tiver, mais será recomendado aos serviços</p>

                </div>

                <div className="imagen">

                    <img src="./assets/images/oculos.png" />

                </div>

            </div>

            <div className="profissionais">

                <h1>profissionais de</h1>

                <div className='prof'>

                                    

                </div>

            </div>

        </main>
    )
}