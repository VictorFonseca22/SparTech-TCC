import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { deletarProfissional, listarProfissionais } from '../../api/admApi.js'
import {toast, Toaster } from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function RemocaoProf() {
    const[profissionais, setProfissionais] = useState([])

    const navigate = useNavigate();

    async function ListarProfissionalAdm() {
        const r = await listarProfissionais()
        setProfissionais(r)
    }

    useEffect(() => {
        ListarProfissionalAdm()
    }, [])

    function home() {
        navigate('/')
    }

    function menu() {
        navigate('/menu-adm')
    }
    async function removerProfissionalClick(id, nome) {

        confirmAlert({
            title:'Remover profissional',
            message:`Deseja remover o profissional ${nome} ?`,
            buttons:[
                {
                    label:'Sim',
                    onClick: async () => {
                    const resposta = await deletarProfissional(id, nome);

                    toast.loading("Excluindo...")

                    setTimeout(() => {
                    toast.dismiss();
                    ListarProfissionalAdm();
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

                <h1>Remover conta de profissional</h1>

                <div className='volta' onClick={menu}>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>

            </header>

            <section>
                <table>
                    <thead>
                        <tr>
                            <th className="inicio">nome profissional</th>
                            <th>telefone</th>
                            <th>cpf</th>
                            <th>idade</th>
                            <th className="fim">excluir</th>
                        </tr>

                    </thead>
                    <tbody>

                        

                        {profissionais.map(item => 
                                <tr>
                                    <td>{item.nome}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.cpf}</td>
                                    <td>{item.idade}</td>
                                    <td><button onClick={() => removerProfissionalClick(item.id, item.nome)}><img src="/assets/images/lixeira.png" alt="" /></button>
                                    </td>
                                    
                                    </tr>
                            )}



                    </tbody>
                </table>
                    <Toaster/>
            </section>

        </main>
    )
}

