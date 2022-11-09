import './index.scss';


export default function PagarServico() {



    return (
        <main className='page-pagamento'>

            <header className="barra">

                <div>
                    <img className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1 className="ativos">serviços ativos</h1>

                <div className='volta'>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>

            </header>


            <section className="ordem">


                <section className="ajuste">

                    <section className='pag'>

                        <div className='informacoes' >
                            <input class="trigger-input" id="faq-titulo-2" type="radio" />


                            <div className='mapeamento-perfil'>
                                <img src='./assets/images/moça.png' />
                                <div className='ramo'>
                                    <h1>Maria</h1>

                                    <p>Programação</p>
                                </div>
                            </div>






                            <div className="dois">
                                <div className='info'>
                                    <h2>serviço a realizar</h2>

                                    <p>fazer um site</p>
                                </div>

                                <div className='info'>
                                    <h2>valor a ser pago</h2>

                                    <p>R$500</p>
                                </div>

                            </div>

                            <div className="dois">

                                <div className='endeinforeco'>
                                    <h2>endereço do serviço</h2>

                                    <p>Rua rua, 1234 - São Paulo - SP</p>
                                </div>

                                <div className='info'>
                                    <h2>data de entrega marcada</h2>

                                    <p>22-08-2022</p>
                                </div>

                            </div>

                            <div className="dois">

                                <div className='info'>
                                    <h2>data limite</h2>

                                    <p>20/05/2025</p>
                                </div>

                                <div className='info'>
                                    <h2>situação do serviço</h2>

                                    <p>Pendente</p>
                                </div>

                            </div>
                        </div>

                        <div className='pagamento'>

                            <input type='radio' />

                                <div className='cartão'>
                                    <img src="./assets/images/cartão.png" />
                                    <p>cartão de crédito/debito</p>
                                </div>

                            <input type='radio' />

                                <div className='boleto'>
                                    <img src='./assets/images/boleto.png' />
                                    <p>boleto bancário</p>
                                </div>

                            <input type='radio' />

                                <div className='pix'>
                                    <img src='./assets/images/pix.png' />
                                    <p>pix</p>
                                </div>

                            <input type='radio' />

                                <div className='mercado'>
                                    <img src='./assets/images/mercado pago.png' />
                                    <p>mercado pago</p>
                                </div>
                            
                            <input type='radio' />

                                <div className='pic'>
                                    <img src='./assets/images/pic pay.png' />
                                    <p>pic pay</p>
                                </div>

                            <input type='radio' />
                            
                            <div className='pay'>
                                <img src='./assets/images/paypal.png' />
                                <p>pay pal</p>
                            </div>

                        </div>

                    </section>


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