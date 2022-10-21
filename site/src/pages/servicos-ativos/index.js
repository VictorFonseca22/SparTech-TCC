import './index.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { buscarImagem, MostrarPerfil } from '../../api/profissionalApi.js'
import {ServicosAtivosCliente } from '../../api/servico';


export default function Serviços() {
    const [infoServico, setInfoServico] = useState([])

    const navigate = useNavigate()
    const {idParam} = useParams()


    function home() {
        navigate('/')
    }

    function voltar() {
        navigate('/meus-servicos')
    }

    async function carregarServico() {
        const resposta = await ServicosAtivosCliente(idParam);
        setInfoServico(resposta)
    }

    useEffect(() => {
            carregarServico();

    }, [])

    return (
        <main className='servicos'>

            <header className="barra">

                <div>
                    <img onClick={home} className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1 className="ativos">serviços ativos</h1>

                <div className='volta' onClick={voltar}>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>

            </header>


            <section className="ordem">
                
                
                <section className="ajuste">
            {infoServico.map(item =>

                    <div className='informacoes'>

                    
                        <div className='mapeamento-perfil'>
                            <img src={buscarImagem(item.foto)} />
                            <div className='ramo'>
                                <h1>{item.cliente}</h1>

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