import './index.scss'
import { useNavigate } from 'react-router-dom';


export default function Serviços() {

    const navigate = useNavigate()


    function home() {
        navigate('/')
    }

    return (
        <main className='servicos'>

            <header className="barra">

                <div>
                    <img onClick={home} className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1 className="ativos">serviços ativos</h1>

                <div className='volta'>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>

            </header>

            <section className="ordem">

                <section className="ajuste">

                    <div className='informacoes'>

                        <img src='./assets/images/japones.png' />

                        <div className='ramo'>
                            <h1>Jonas Madeira</h1>

                            <p>especialista em front-end suporte técnico</p>
                        </div>

                        <div className="dois">
                            <div className='info'>
                                <h2>serviço a realizar</h2>

                                <p>reparar computador do cliente. possível troca de fonte de alimentação.</p>
                            </div>

                            <div className='info'>
                                <h2>valor a ser pago</h2>

                                <p>R$ 150,00</p>
                            </div>

                        </div>

                        <div className="dois">

                            <div className='endeinforeco'>
                                <h2>endereço do serviço</h2>

                                <p>rua joaquim mendes feliz, 349 - embu-guaçú - são paulo</p>
                            </div>

                            <div className='info'>
                                <h2>data de entrega marcada</h2>

                                <p>22-08-2022</p>
                            </div>

                        </div>

                        <div className="dois">

                            <div className='info'>
                                <h2>data limite</h2>

                                <p>11-09-2022</p>
                            </div>

                            <div className='info'>
                                <h2>situação do serviço</h2>

                                <p>concluído</p>
                            </div>

                        </div>

                    </div>

                    <div className='resumo'>

                        <h1>resumo do serviço ativo</h1>

                        <hr />

                        <div className='valor'>
                            <p>valor total do serviço ativo</p>

                            <p>r$ 150,00</p>
                        </div>



                        <hr />

                        <div className="button">
                            <button className='pagar'>
                                pagar serviço concluído
                            </button>

                            <button className='cancelar'>
                                cancelar serviço
                            </button>
                        </div>
                        <h5>A EsparTech, irá dar a garantia de 1 mês
                            sobre o serviço realizado, caso aconteça algum problema, a EsparTech irá mandar um profissional sem necessidade de um novo pagamento. </h5>


                    </div>



                </section>
            </section>




        </main>
    );

}