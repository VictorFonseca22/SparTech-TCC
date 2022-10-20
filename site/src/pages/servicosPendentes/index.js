import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import Pendente from '../../components/pendentes';

export default function ServicosPendentes() {
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

                <h1>Serviços Pendentes</h1>

                <div className='volta' onClick={perfil}>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>

            </header>

            <section>

                <div className='externa'>

                    <div className='wrap'>
                        <Pendente />
                        <Pendente />
                        <Pendente />
                        <Pendente />
                        <Pendente />
                        <Pendente />

                    </div>
                
                </div>

                {/* {servico.map(item =>
                    <tr>
                        <td>{item.nome}</td>
                        <td>{item.tiposerv}</td>
                        <td>{item.dataserv}</td>
                        <td>{item.localização}</td>
                        <td>
                            <img onClick={''}><img src="/assets/images/aceitar.png" alt="" /></img>
                        </td>
                    </tr>
                )} */}
            </section>

        </main>
    )
}

