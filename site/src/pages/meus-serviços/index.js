import './index.scss'

export default function Serviços() {

    return (
        <main className='servicos'>

            <header className="barra">

                <div>
                    <img className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1 className="ativos">serviços ativos</h1>

                <div className='volta'>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <h1>voltar</h1>
                </div>

            </header>

                    <div className='informacoes'>

                        <img src='./assets/images/japones.png' />

                            <h1>Jonas Madeira</h1>

                            <p>especialista em front-end suporte técnico</p>

                            <h1>serviço a realizar</h1>

                            <p>reparar computador do cliente. possível troca de fonte de alimentação.</p>

                            <h1>valor a ser pago</h1>

                            <p>R$ 150,00</p>

                            <h1>endereço do serviço</h1>

                            <p>rua joaquim mendes feliz, 349 - embu-guaçú - são paulo</p>

                            <h1>data de entrega marcada</h1>

                            <p>22-08-2022</p>

                            <h1>data limite</h1>

                            <p>11-09-2022</p>

                            <h1>situação do serviço</h1>

                            <p>concluído</p>

                    </div>

            <div className='resumo'>

                <h1>resumo do serviço ativo</h1>

                <hr />

                <p>valor total do serviço ativo</p>

                <p>r$ 350,00</p>

                <p>qtd. de serviço ativo</p>

                <p>2</p>

                <hr />

                <button className='pagar'>
                    pagar serviço concluído
                </button>

                <button className='cancelar'>
                cancelar serviço
                </button>

                <h1>A EsparTech, irá dar a garantia de 1 mês
 sobre o serviço realizado, caso aconteça algum problema, a EsparTech irá mandar um profissional sem necessidade de um novo pagamento. </h1>


            </div>









        </main>
    );

}