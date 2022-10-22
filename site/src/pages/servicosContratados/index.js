import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './index.scss';

export default function ServicosContratados() {
    const [servico, setServico] = useState([])

    const navigate = useNavigate();
    const {idParam} = useParams()
    

   

    function home() {
        navigate('/')
    }

    function perfil() {
        navigate(`/meus-servicos/${idParam}`)
    }

    


    return (
        <main className="remocao">
            <header className="barra">

                <div>
                    <img onClick={home} className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1>Serviços Concluídos</h1>

                <div className='volta' onClick={perfil}>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>

            </header>

            <section>
                <table>
                    <thead>
                        <tr>
                            <th className="inicio">nome do profissional</th>
                            <th>tipo de serviço</th>
                            <th>data do serviço</th>
                            <th>chat</th>
                            <th className="fim">concluído</th>
                        </tr>

                    </thead>
                    <tbody>
                    <tr>
                                <td>jose</td>
                                <td>limpeza</td>
                                <td>21/10/2022</td>
                                <td><button><img src="/assets/images/chat.png" className='chat' alt="" /></button></td>
                                <td>
                                    <img src="/assets/images/aceitar.png" className='ok' alt="" />
                                </td>
                            </tr>
                    
                        {servico.map(item =>
                            <tr>
                                <td>{item.nome}</td>
                                <td>{item.tiposerv}</td>
                                <td>{item.dataserv}</td>
                                <td>{item.localização}</td>
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

