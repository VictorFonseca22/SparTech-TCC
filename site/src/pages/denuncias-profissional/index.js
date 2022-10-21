import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import {denunciaProf } from '../../api/admApi.js'
import Modal from 'react-modal'
import Denunciar from '../../components/denuciar-perfil';



export default function DenunProfissional() {
    const [denuncias, setDenuncias] = useState([])
    const [ModalIsOpen, SetIsOpen] = useState(false);
    const navigate = useNavigate();

    function home() {
        navigate('/')
    }

    function menu() {
        navigate('/menu-adm')
    }
    async function carregarDenuncia() {
        const resposta = await denunciaProf();
        setDenuncias(resposta)
    }
    useEffect(() => {
        carregarDenuncia()
    }, [])

    function openModalDenunciar(id) {
        SetIsOpen(true);
        navigate(`/denuncias-profissional/${id}`)
    }

    function closeModalDenunciar() {
        SetIsOpen(false);
        navigate(`/denuncias-profissional`)
    }
    const Css = {
        content: {
            display: 'flex',
            alignItens: 'center',
            justifyContent: 'center',
            border: 'none',
            margin: 'none',
            backgroundColor: '#00000000'
        },
        overlay: {
            backgroundColor: '#000000ce'
        },

    };
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
                                <td>{item.profissional}</td>
                                <td>{item.classificacao}</td>
                                <td>{item.data}</td>
                                <td>{item.cliente}</td>
                                <td><button onClick={() => openModalDenunciar(item.id)}><img src="/assets/images/denucli.png" alt="" />
                                </button>
                                </td>
                            </tr>
                        )}
                         <Modal
                                        isOpen={ModalIsOpen}
                                        onRequestClose={closeModalDenunciar}
                                        style={Css}
                                    >
                                        <Denunciar />

                                        <img src={'/assets/images/cancelar.png'} onClick={closeModalDenunciar} height={'30'} />




                                    </Modal>



                    </tbody>
                </table>
            </section>

        </main>
    )
}

