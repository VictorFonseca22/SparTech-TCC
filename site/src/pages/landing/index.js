import './index.scss';
import Header from '../../components/header';
import Categoria from '../../components/categoria';
import Carousel from 'react-elastic-carousel';
import Item from '../../components/carousel/Item';
import { useNavigate } from 'react-router-dom';




export default function Landing() {
    
    const navigate = useNavigate()

    const breakPoints = [
        { width: 1, itemsToShow: 1.4 },
        { width: 750, itemsToShow: 2.4, itemsToScroll: 2 },
        { width: 850, itemsToShow: 3.4, itemsToScroll: 3 },
        { width: 1560, itemsToShow: 4.4, itemsToScroll: 4 }
    ];


    return (
        <main className='landing-page'>
            <Header />

            <section className='faixa-1'>

                <div className='introdução'>
                    <h1>A UM ANO LIGANDO O CLIENTE AOS MELHORES PROFISSIONAIS</h1>

                    <a className='b' href='#SaibaMais'>SAIBA MAIS</a>
                </div>
            </section>

            <section className='faixa-2'>

                <h4>serviços mais solicitados</h4>
                <div className='categorias'>
                    <Carousel breakPoints={breakPoints}>
                        <Categoria nome='Montagem e Manutenção de Computadores' number="1" />
                        <Categoria nome='limpeza e higienização de computadores' number="2" />
                        <Categoria nome='CABEAMENTO DE REDES' number="3" />
                        <Categoria nome='DESENVOLVIMENTO de websites' number="4" />
                        <Categoria nome='2' number="4" />
                        <Categoria nome='3' number="4" />
                        <Categoria nome='4' number="4" />
                        <Categoria nome='5' number="4" />
                        <Categoria nome='5' number="4" />
                        <Categoria nome='6' number="4" />

                    </Carousel>

                </div>

            </section>

            <section className='destaque'>
                <div className="meio">
                    <div className="infos">
                        <h1>PROFISSIONAIS QUE ESTÃO EM NOSSO SITE</h1>
                        <div className='texts'>
                            <div className="a">
                                <h2>Bruno oliveira</h2>
                                <p>PROFISSIONAL ESPARTECH DESDE 2021</p>
                            </div>
                            <ul>
                                <li>DEV SÊNIOR</li>
                                <li>PROFESSOR</li>
                                <li>GESTOR DE EMPRESAS</li>
                            </ul>
                            <div className="avaliacao">
                                <div className="estrelas">
                                    <img src='/assets/images/estrela.png' />
                                    <img src='/assets/images/estrela.png' />
                                    <img src='/assets/images/estrela.png' />
                                    <img src='/assets/images/estrela.png' />
                                    <img src='/assets/images/estrela.png' />

                                </div>
                                <p>5.0</p>
                            </div>

                        </div>

                    </div>
                    <div className="fogo">
                        <img src="./assets/images/bruno.png" />
                    </div>
                </div>

            </section>

            <section className='historia' id='SaibaMais'>

                <div className="centro">

                    <h1>surgimento da EsparTech</h1>

                    <p>O EsparTech nasceu em 2021, com o propósito de conectar quem precisa com quem sabe fazer. Somos um plataforma que conecta clientes e profissionais.</p>

                </div>
                <div className='b'>
                    <div className='esquerda'>
                        <div className="text">
                            <h1>Como o EsparTech funciona para o cliente?</h1>

                            <p className='p2'>O cliente da EsparTech, terá o melhor serviço dos nossos profissionais. Caso o profissional não tenha cumprido o trabalho corretamente, você será reembolsado! pois para solicitar um serviço é necessário um entrada no pagamento no valor de 25 reais.</p>
                        </div>
                        <div className='text2'>
                            <h1>como a espartech beneficia o profissional?</h1>

                            <p className="p1">O profissional da EsparTech, terá o reconhecimento REGIONAL pelo seu trabalho. quanto mais avaliações positivas no site você tiver, mais será recomendado aos serviços.</p>
                        </div>
                    </div>

                    <div className="direita">

                        <img src="./assets/images/oculos.png" />

                    </div>
                </div>
            </section>

            <section className="profissionais">

                <h1>PROFISSIONAIS especializados</h1>

                <div className='profs1'>



                    <div className='prof'>

                        <img src="./assets/images/moça2.png" />
                        <h3>maria fernanda </h3>
                        <p>Front-end</p>

                    </div>

                    <div className='prof'>

                        <img src="./assets/images/lindo.png" />
                        <h3>pedro Soares</h3>
                        <p>ciência de dados</p>

                    </div>

                    <div className='prof'>
                        <img src="./assets/images/rafa.png" />
                        <h3>RAFAEL oliveira</h3>
                        <p>WEB-DESIGN</p>

                    </div>

                </div>

                <div className='profs2'>
                    <div className='prof'>

                        <img src="./assets/images/lucas.png" />
                        <h3>Lucas tatsuo</h3>
                        <p>BACK-END</p>

                    </div>

                    <div className='prof'>

                        <img src="./assets/images/gi.png" />
                        <h3>giovanna silva</h3>
                        <p>analista de sistemas</p>

                    </div>
                </div>

            </section>


            <section className='rodape'>

                <div className="logos">
                    <img src="./assets/images/teste final 1.png" className="logo" />

                    <div className="patro">

                        <h1>patrocinadores:</h1>
                        <img src="./assets/images/frei.png" />

                    </div>

                </div>


                <div className="formas">

                    <h1 className='pagamento'>Formas de pagamento:</h1>

                    <div className="primeiro">

                        <img src="./assets/images/visa.png" />
                        <img src="./assets/images/MASTERCARD.png" />
                        <img src="./assets/images/MERCADO PAGO.png" />

                    </div>

                    <div className="segundo">

                        <img src="./assets/images/boleto.png" />
                        <img src="./assets/images/PIX.png" />
                        <img src="./assets/images/PIC PAY.png" />

                    </div>

                    <div className="terceiro">

                        <img src="./assets/images/paypal.png" />

                    </div>

                </div>

                <div className="login">

                    <div className='contrate'>
                        <h1>contrate já um profissional</h1>
                        <button onClick={() => [navigate ('/login')]}>login</button>
                    </div>

                    <div className="fale">
                        <h1>Fale conosco:</h1>

                        <div className="insta">

                            <img src="./assets/images/insta.png" />
                            <p>@espartech_oficial</p>

                        </div>

                        <div className="twi">

                            <img src="./assets/images/tt.png" />
                            <p>@espartech</p>

                        </div>

                        <div className="email">

                            <img src="./assets/images/email.png" />
                            <p>espartech@gmail.com</p>

                        </div>
                    </div>
                </div>

            </section>

        </main>
    )
}