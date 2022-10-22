import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ServicoConcluido } from '../../api/servico';
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
                                <td><button><a href={'https://wa.me/55' + item.telefone + '?text=Ol%C3%A1,%20sou%20seu%20profissional!%20Meu%20nome%20%C3%A9%20' 
         + item.cliente + '%20e%20estou%20te%20contatando%20para%20confirmar%20os%20detalhes%20do%20servi%C3%A7o'}></a><img src="/assets/images/chat.png" className='chat' alt="" /></button></td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </section>

        </main>
    )
}

