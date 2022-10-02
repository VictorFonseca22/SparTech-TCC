import './index.scss';
import { useNavigate } from 'react-router-dom';


export default function SolicitarServ() {
    const navigate = useNavigate()

    function home() {
        navigate('/')
    }

    function contratar() {
        navigate('/servicos-ativos')
    }

    return (

        <main className='page-solicitar'>

            <header className='barra'>

                <div>
                    <img className='logo' src='/assets/images/teste final 1.png'  onClick={home}/>
                </div>

                <h1 className="ativos">detalhes do serviço</h1>

                <div className='volta'>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>


            </header>


            <div className='vizinho'>
                <div className="contratar">

                    <div className='esquerda'>

                        <h1 className="prof">profissional a ser contratado</h1>

                        <div className="jota">
                            <h4 className="nome">Jonas Cunha</h4>

                            <img src='/assets/images/japones.png' />

                            <p>especialista em front-end suporte técnico</p>
                        </div>
                        <textarea className='textarea' placeholder='Descreva o serviço a ser feito' type='text' />

                    </div>

                    <div className='direita'>

                        <div className="texts">

                            <div className='linha-tex'>

                                <div className='tex-1'>

                                    <p>endereço do serviço:</p>

                                    <input type='text' placeholder='rua joa...' />

                                </div>

                                <div className='tex-2'>
                                    <p>complemento:</p>

                                    <input type='text' placeholder='nº/apto...' />

                                </div>
                            </div>

                            <div className='linha-tex'>

                                <div className='tex-1'>

                                    <p>Cidade:</p>

                                    <input type='text' placeholder='embú-gua...' />

                                </div>

                                <div className='tex-2'>
                                    <p>Estado:</p>

                                    <select>
                                        <option selected disabled hidden>Selecione</option>
                                        <option>São Paulo</option>
                                        <option>Rio de Janeiro</option>
                                        <option>Amapá</option>
                                        <option>Santa Catarina</option>
                                        <option>Espírito Santo</option>
                                        <option>Roraima</option>
                                        <option>Amazonas</option>
                                        <option>Paraná</option>
                                        <option>Rio Grande do Sul</option>
                                        <option>Goiás</option>
                                        <option>DF</option>
                                        <option>Tocantins</option>
                                        <option>Acre</option>
                                        <option>Ceará</option>
                                        <option>Pernambuco</option>
                                        <option>Piauí</option>
                                        <option>Maranhão</option>
                                        <option>Paraíba</option>
                                        <option>Alagoas</option>
                                        <option>Rio Grande do Norte</option>
                                        <option>Bahia</option>
                                        <option>Rondônia</option>
                                        <option>Mato Grosso</option>
                                        <option>Mato Grosso do Sul</option>
                                        <option>Minas Gerais</option>
                                        <option>Sergipe</option>
                                        <option>Pará</option>

                                    </select>
                                </div>
                            </div>

                            <div className='linha-tex'>

                                <div className='tex-1'>

                                    <p>tipo de serviço:</p>

                                    <select>
                                        <option selected disabled hidden>Selecione</option>
                                        <option>Manutenção de Computador</option>
                                        <option>Limpeza de Wletrônico</option>
                                        <option>Confecçãode Website</option>

                                    </select>

                                </div>

                                <div className='tex-2'>

                                    <p>data limite:</p>

                                    <input type='date' className="data"  />

                                </div>


                            </div>

                        </div>

                        <div className='pagamento'>

                            <p className="text">entrada necessária para solicitar o serviço valor da entrada: <p className="valor">R$25,00</p></p>


                            <div className='metodo'>

                                <p>método de pagamento:</p>

                                <select className="abc">
                                    <option selected disabled hidden>Selecione</option>
                                    <option>cartão de debito/crédito</option>
                                    <option>pix</option>
                                    <option>boleto</option>
                                    <option>pic pay</option>
                                    <option>mercado pago</option>

                                </select>

                            </div>

                        </div>



                    </div>
                </div>
                <button className='botao' onClick={contratar}>contratar serviço</button>


            </div>





        </main>




    )

}