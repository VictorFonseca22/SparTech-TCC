import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';

export default function ServicosRealizados() {
    const [servico, setServico] = useState([])

    const navigate = useNavigate();

    

   

    function home() {
        navigate('/')
    }

    function perfil() {
        navigate('/meus-servicos')
    }

    


    return (
        <main className="remocao">
            <header className="barra">

                <div>
                    <img onClick={home} className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1>Serviços realizados</h1>

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
                            <th>chat</th>
                            <th className="fim">concluído</th>
                        </tr>

                    </thead>
                    <tbody>
                    
                    
                        {servico.map(item =>
                            <tr>
                                <td>{item.nome}</td>
                                <td>{item.tiposerv}</td>
                                <td>{item.dataserv}</td>
                                <td>{item.localização}</td>
                                <td><button><img src="/assets/images/chat.png" className='chat' alt="" /></button></td>
                                <td>
                                    <img onClick={''}><img src="/assets/images/aceitar.png" alt="" /></img>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </section>

        </main>
    )
}

