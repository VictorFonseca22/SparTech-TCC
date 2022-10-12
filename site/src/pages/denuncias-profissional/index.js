import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';



export default function DenunProfissional() {
    const [denuncias, setDenuncias] = useState([])

    const navigate = useNavigate();

    function home() {
        navigate('/')
    }

    function menu() {
        navigate('/menu-adm')
    }

    return (
        <main className="denuncias">
            <header className="barra">

                <div>
                    <img onClick={home} className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1>denúncias dos profissionais</h1>

                <div className='volta' onClick={menu}>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>

            </header>

            <section>
                <table>
                    <thead>
                        <tr>
                            <th className="inicio">emissor</th>
                            <th>tipo de denúncia</th>
                            <th>data de emissão</th>
                            <th>nome do cliente</th>
                            <th className="fim">visualizar</th>
                        </tr>

                    </thead>
                    <tbody>

                        {denuncias.map(item =>
                            <tr>
                                <td>{item.emissor}</td>
                                <td>{item.tipo}</td>
                                <td>{item.reserva.substr(0, 10)}</td>
                                <td>{item.prof}</td>
                                <td><button><img src="/assets/images/lixeira.png" alt="" /></button></td>
                            </tr>
                        )}



                    </tbody>
                </table>
            </section>

        </main>
    )
}

