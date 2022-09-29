import './index.scss';


export default function SolicitarServ() {

    return (

        <main className='page-solicitar'>

            <header className='barra'>

                <div>
                    <img className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1 className="ativos">detalhes do serviço</h1>

                <div className='volta'>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <h1>voltar</h1>
                </div>


            </header>


            <div className='contratar'>

                <div className='esquerda'>

                    <h1 className="prof">profissional a ser contratado</h1>

                    <h4>Jonas Cunha</h4>

                    <img src='/assets/images/japones.png' />

                    <p>especialista em front-end suporte técnico</p>

                    <input type='text' />

                </div>

                <div className='direita'>

                    <div className='linha-tex'>

                        <div className='tex-2'>

                            <p>endereço do serviço:</p>

                            <input type='text' />

                        </div>

                        <div className='tex-2'>
                            <p>complemento:</p>

                            <input type='text' />

                        </div>
                    </div>


                    <div className='linha-tex'>

                        <div className='tex-2'>

                            <p>tipo de serviço:</p>

                            <input type='text' />

                        </div>

                        <div className='radio-1'>

                            <input type='radio'></input>

                            <input type='radio'></input>

                        </div>
                    </div>

                    <div className='pagamento'>

                        <p>entrada necessária para solicitar o serviço</p>

                        <p>valor da entrada: R$25,00</p>

                    </div>

                    <div className='metodo'>

                        <p>método de pagamento:</p>
                        <input type='text' />

                    </div>



                </div>

            </div>

            <button className='botao'>contratar serviço</button>




        </main>




    )

}