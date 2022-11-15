import './index.scss';
import { ServicoPorId } from '../../../api/servico';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { buscarImagem } from '../../../api/profissionalApi.js'
import { toast, Toaster } from 'react-hot-toast'
import storage from 'local-storage'
import Pagamento from '../../../components/metodPagamento';
export default function PagarServico() {

    const [info, setInfo] = useState([])
    const [checked, setChecked] = useState("cartao");

    const { idParam } = useParams()

    async function carregarServico() {
        try {
            const resposta = await ServicoPorId(idParam);
            setInfo(resposta)
        }
        catch (err) {
            if (err.response.status == 400) {
                toast.error(err.response.data.erro);
            }
        }
    }
    useEffect(() => {
        carregarServico()
    }, [])


    return (
        <main className='page-pagamento'>
            <Toaster />
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
                        {info.map(item =>


                            <div className='informacoes' >
                                <input class="trigger-input" id="faq-titulo-2" type="radio" />


                                <div className='mapeamento-perfil'>
                                    <img src={buscarImagem(item.foto)} />
                                    <div className='ramo'>
                                        <h1>{item.profissional}</h1>

                                        <p>{item.area}</p>
                                    </div>
                                </div>






                                <div className="dois">
                                    <div className='info'>
                                        <h2>serviço a realizar</h2>

                                        <p>{item.detalhes}</p>
                                    </div>

                                    <div className='info'>
                                        <h2>valor a ser pago</h2>

                                        <p>R${item.valor}</p>
                                    </div>

                                </div>

                                <div className="dois">

                                    <div className='endeinforeco'>
                                        <h2>endereço do serviço</h2>

                                        <p>{item.rua}, {item.complemento} - {item.cidade} - {item.estado}</p>
                                    </div>

                                    <div className='info'>
                                        <h2>data de entrega marcada</h2>

                                        <p>22-08-2022</p>
                                    </div>

                                </div>

                                <div className="dois">

                                    <div className='info'>
                                        <h2>data limite</h2>

                                        <p>{item.data}</p>
                                    </div>

                                    <div className='info'>
                                        <h2>situação do serviço</h2>

                                        <p>Pendente</p>
                                    </div>

                                </div>
                            </div>
                        )}
                        <div className='tipo-pag'>
                            <div className='pagamento'>



                                <div className='pag-tipo'>
                                    <input type='radio' name='pag' checked={checked === "cartao"} value="cartao" onChange={(e) => {
                                        setChecked(e.target.value)
                                    }} />
                                    <div className='text-pag'>
                                        <img src="/assets/images/cartão.png" />
                                        <p>cartão de crédito/debito</p>
                                    </div>
                                </div>



                                <div className='pag-tipo'>
                                    <input type='radio' name='pag' checked={checked === "boleto"} value="boleto" onChange={(e) => {
                                        setChecked(e.target.value)
                                    }} />
                                    <div className='text-pag'>
                                        <img src='/assets/images/boleto.png' />
                                        <p>boleto bancário</p>
                                    </div>
                                </div>



                                <div className='pag-tipo'>
                                    <input type='radio' name='pag' checked={checked === "pix"} value="pix" onChange={(e) => {
                                        setChecked(e.target.value)
                                    }} />
                                    <div className='text-pag'>
                                        <img src='/assets/images/pix.png' />
                                        <p>pix</p>
                                    </div>
                                </div>



                                <div className='pag-tipo'>
                                    <input type='radio' name='pag' checked={checked === "mercado-pago"} value="mercado-pago" onChange={(e) => {
                                        setChecked(e.target.value)
                                    }} />
                                    <div className='text-pag'>
                                        <img src='/assets/images/mercado pago.png' />
                                        <p>mercado pago</p>
                                    </div>
                                </div>



                                <div className='pag-tipo'>
                                    <input type='radio' name='pag' checked={checked === "picpay"} value="picpay" onChange={(e) => {
                                        setChecked(e.target.value)
                                    }} />
                                    <div className='text-pag'>
                                        <img src='/assets/images/pic pay.png' />
                                        <p>pic pay</p>
                                    </div>
                                </div>



                                <div className='pag-tipo'>
                                    <input type='radio' name='pag' checked={checked === "paypal"} value="paypal" onChange={(e) => {
                                        setChecked(e.target.value)
                                    }} />
                                    <div className='text-pag'>
                                        <img src='/assets/images/paypal.png' />
                                        <p>pay pal</p>
                                    </div>
                                </div>

                            </div>
                            <div className='campos-pag'>
                                {checked === 'cartao' &&
                                <Pagamento pagt='cartao'/>
                                }
                                {checked === 'boleto' &&
                                <Pagamento pagt='boleto' />
                                }
                                {checked === 'pix' &&
                                <Pagamento pagt='pix'/>
                                }
                                {checked === 'mercado-pago' &&
                                <div>MERCADO PAGO</div>
                                }
                                {checked === 'picpay' &&
                                <div>PICPAY</div>
                                }
                                {checked === 'paypal' &&
                               <Pagamento pagt='paypal'/>
                                }
                            </div>
                        </div>


                    </section>


                    <div className='resumo'>

                        <h1>resumo do serviço ativo</h1>

                        <hr />

                        <div className='valor'>
                            <p>valor total do serviço ativo</p>

                            <p>R${storage('serv-selecionado').preco}</p>

                        </div>





                        <hr />

                        <div className="button">
                            <button className='pagar'>
                                Confirmar pagamento
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