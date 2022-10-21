import './index.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { buscarImagem, MostrarPerfilCliente } from '../../api/clienteApi';
import storage from 'local-storage'
import Modal from 'react-modal'
import Editar from '../../components/editar-perfil'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Denunciar from '../../components/denuciar-perfil';
import MeusServicos from '../meus-servicos';

export default function PerfilCliente() {

    const [perfil, setPerfil] = useState([])
    const [comentario, setComentario] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [ModalIsOpen, SetIsOpen] = useState(false);
    const [comentar, setComentar] = useState('')


    const { idParam } = useParams();


    const navigate = useNavigate()


    function home() {
        navigate('/')
    }
    useEffect(() => {
        if (idParam) {
            carregarPerfil();
        }

    }, [])

    async function carregarPerfil() {
        const resposta = await MostrarPerfilCliente(idParam);
        setPerfil(resposta)
    }


    /*async function carregarTodosComentarios() {
        const resposta = await mostrarComentarios();
        setComentario(resposta);
    }
    useEffect(() => {
        carregarTodosComentarios()
    }, []) */


    function voltarLP() {
        navigate('/')
    }

    useEffect(() => {
        if (!storage('profissional-logado') && !storage('cliente-logado') && !storage('adm-logado')) {
            navigate('/login')
        }
    }, [])

    Modal.setAppElement('#root');

    function openModalEditar() {
        setIsOpen(true);
    }

    function closeModalEditar() {
        setIsOpen(false);
    }

    function recarregarAPagina() {
        window.location.reload();
    }

    function meusServicos() {
        navigate(`/meus-servicos/${idParam}`)
    }

    const customStyles = {
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

    function openModalDenunciar() {
        SetIsOpen(true);
    }

    function closeModalDenunciar() {
        SetIsOpen(false);
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
        <main className='Perfil-Cliente'>
            <ToastContainer />

            <div className='barra'>

                <div className="voltar" onClick={voltarLP}>
                    <img src='/assets/images/voltar.png' />
                    <h1>sair</h1>
                </div>

                <div className="c">
                    <img className='Logo' src='/assets/images/teste final 1.png' onClick={home} />
                </div>
                <div className="acoes">
            {!storage('cliente-logado') &&
            <div>
                    <h1 onClick={openModalDenunciar}>denunciar</h1>
                     <Modal
                        isOpen={ModalIsOpen}
                        onRequestClose={closeModalDenunciar}
                        style={Css}
                    >
                        <Denunciar />

                        <img src={'/assets/images/cancelar.png'} onClick={closeModalDenunciar} height={'30'} />




                    </Modal> 
                    </div>
            
            }

                    <h1 onClick={meusServicos}>Meus Serviços</h1>
                </div>


            </div>
            {/* {perfil.map(item => */}
        {perfil.map(item => 
            <div>

                <div className='fundo'>

                    <img src={buscarImagem(item.foto)} className="foto" />

                    <img src='/assets/images/fundo.png' className="cinza" />

                </div>
                <div className='informacoes'>

                    <div className="op">
                        <div className="ip">

                            {/* <h1 className='nome'>{item.nome}</h1>

                                <p className="tel">{item.telefone}</p>

                                <p className="email">{item.email}</p> */}

                            <h1 className='nome'>{item.nome}</h1>

                            <p className="tel">{item.telefone}</p>

                            <p className="email">{item.email}</p>

                        </div>
                        <div className='editar'>
                            {storage('cliente-logado') &&
                                <div className='botoes-perfil'>

                                    <button className='botao-refresh' onClick={recarregarAPagina}>
                                        <h1 className="perfil-refresh">atualizar informações</h1>
                                        <img class="spinner is-animating" src='/assets/images/atualizar.png' />
                                    </button>


                                    <button onClick={openModalEditar} className="botao-editar">
                                        <h1 className="perfil">editar perfil</h1>
                                        <img className='editar-animation' src='/assets/images/caneta.png' />
                                    </button>

                                </div>
                            }
                            {storage('adm-logado') &&
                                <div className='botoes-perfil'>

                                    <button className='botao-refresh' onClick={recarregarAPagina}>
                                        <h1 className="perfil-refresh">atualizar informações</h1>
                                        <img class="spinner is-animating" src='/assets/images/atualizar.png' />
                                    </button>


                                    <button onClick={openModalEditar} className="botao-editar">
                                        <h1 className="perfil">editar perfil</h1>
                                        <img className='editar-animation' src='/assets/images/caneta.png' />
                                    </button>

                                </div>
                            }
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModalEditar}
                                style={customStyles}

                            >

                                <Editar />

                                <img src={'/assets/images/cancelar.png'} alt="" height={'30'} onClick={closeModalEditar} />


                            </Modal>



                        </div>
                    </div>
                    <hr />

                    <div className='experiencia'>

                        <div className="area-de-atuacao">
                            <h1>Bio/Descrição</h1>

                            <p>{item.biografia}</p>

                        </div>

                    </div>


                </div>
    
            </div>
                 )}
            {/* )} */}

            <div className='informacoes'>
                <hr />
                <div className="comentes">
                    {storage('profissional-logado') &&
                        <h1>comentários sobre você</h1>
                    }
                    {storage('adm-logado') &&
                        <h1>comentários sobre esse profissional</h1>
                    }




                    {comentario.map(item =>



                        <div className='comentario'>
                            <p className='nome-cliente'>{item.cliente}
                            </p>
                            <div class="v-line">
                            </div>
                            <p className='desc-comentario'>{item.comentário}</p>
                            <p className='data-comentario'>{item.data}</p>


                        </div>


                    )}
                </div>

            </div>





        </main>
    );

}