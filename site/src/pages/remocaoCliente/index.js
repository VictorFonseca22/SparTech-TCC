import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { deletarCliente, listarCliente } from '../../api/admApi';
import {toast, Toaster } from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function RemocaoCli() {
    const [clientes, setClientes] = useState([])

    const navigate = useNavigate();

    async function ListarClientesAdm() {
        const r = await listarCliente()
        setClientes(r)
    }

    useEffect(() => {
        ListarClientesAdm()
    }, [])

    function home() {
        navigate('/')
    }

    function menu() {
        navigate('/menu-adm')
    }

    async function removerClienteClick(id, nome) {

        confirmAlert({
            title:'Remover cliente',
            message:`Deseja remover o cliente ${nome} ?`,
            buttons:[
                {
                    label:'Sim',
                    onClick: async () => {
                    const resposta = await deletarCliente(id, nome);

                    toast.loading("Excluindo...")

                    setTimeout(() => {
                    toast.dismiss();
                    ListarClientesAdm();
                    toast.success(`Você removeu ${nome}`)
                    }, 600);
                    }
                    
                },
                {
                    label:'Não'
                }
            ]


        })

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
                                <td><button onClick={() => removerClienteClick(item.id, item.nome)}><img src="/assets/images/lixeira.png" alt="" /></button></td>
                            </tr>
                        )}

                    </tbody>
                </table>
                    <Toaster/>
            </section>

        </main>
    )
}

