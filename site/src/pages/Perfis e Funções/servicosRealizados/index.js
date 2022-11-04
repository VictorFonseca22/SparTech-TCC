import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ServicoConcluido } from '../../../api/servico';
import './index.scss';

export default function ServicosRealizados() {
    const [servico, setServico] = useState([])

    const navigate = useNavigate();
    const {idParam} = useParams()
    

    function home() {
        navigate('/')
    }

    function perfil() {
        navigate(`/meus-servicos/${idParam}`)
    }

    async function carregarConclusoes() {
        const resposta = await ServicoConcluido(idParam);
        setServico(resposta)
    }    

    useEffect(() => {
        carregarConclusoes()
    }, [])




    return (
        <main className="remocao">
            <header className="barra">

                <div>
                    <img onClick={home} className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1>Serviços Realizados</h1>

                <div className='volta' onClick={perfil}>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>

            </header>

            <section>
                <table>
                    <thead>
                        <tr>
                            <th className="inicio">nome do cliente</th>
                            <th>tipo de serviço</th>
                            <th>data do serviço</th>
                            <th>localização</th>
                            <th className='fim'>chat</th>
                        </tr>

                    </thead>
                    <tbody>
                    
                    
                        {servico.map(item =>
                            <tr>
                                <td>{item.cliente}</td>
                                <td>{item.tipo_servico}</td>
                                <td>{item.data}</td>
                                <td>{item.rua + ', ' + item.complemento + '- ' + item.bairro}</td>
                                <td><a href={'https://wa.me/55' + item.telefone_cliente}><button><img src="/assets/images/chat.png" className='chat' alt="" /></button></a></td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </section>

        </main>
    )
}

