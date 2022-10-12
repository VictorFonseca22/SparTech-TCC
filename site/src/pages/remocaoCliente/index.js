import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';



export default function RemocaoCli() {
    const[clientes, setClientes] = useState([])

    const navigate = useNavigate();

    function home() {
        navigate('/')
    }

    function menu() {
        navigate('/menu-adm')
    }

    return (
        <main className="remocao">
            <header className="barra">

                <div>
                    <img onClick={home} className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1>Remover conta de cliente</h1>

                <div className='volta' onClick={menu}>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>

            </header>

            <section>
                <table>
                    <thead>
                        <tr>
                            <th className="inicio">nome cliente</th>
                            <th>telefone</th>
                            <th>cpf</th>
                            <th>idade</th>
                            <th className="fim">excluir</th>
                        </tr>

                    </thead>
                    <tbody>

                        {clientes.map(item => 
                                <tr>
                                    <td>{item.nome}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.cpf}</td>
                                    <td>{item.idade}</td>
                                    <td><button><img src="/assets/images/lixeira.png" alt="" /></button></td>
                                </tr>
                            )}

                    </tbody>
                </table>
            </section>

        </main>
    )
}

