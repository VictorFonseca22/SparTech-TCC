import './index.scss'
import { alterarPerfil, MostrarPerfil, AdicionarImagem, buscarImagem } from '../../api/profissionalApi.js'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import storage from 'local-storage'
import { AdicionarImagemCliente, alterarPerfilCliente, MostrarPerfilCliente } from '../../api/clienteApi';
export default function Editar() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [atuacao, setAtuacao] = useState('');
    const [licenca, setLicenca] = useState('');
    const [biografia, setBiografia] = useState('')
    const [perfil, setPerfil] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [foto, setFoto] = useState();


    const { idParam } = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        if (storage('cliente-logado')) {
            carregarInfosCliente()
        }
        if (storage('profissional-logado')) {
            carregarInfos()
        }
    }, [])

    async function carregarInfos() {
        const resposta = await MostrarPerfil(idParam);

        setNome(resposta[0].nome);
        setTelefone(resposta[0].telefone);
        setAtuacao(resposta[0].area)
        setLicenca(resposta[0].licenca)
        setFoto(resposta[0].foto)
    }

    async function carregarInfosCliente() {
        const resposta = await MostrarPerfilCliente(idParam);

        setNome(resposta[0].nome);
        setTelefone(resposta[0].telefone);
        setBiografia(resposta[0].biografia)
        setFoto(resposta[0].foto)
    }


    async function salvarEditar() {
        try {

            await alterarPerfil(idParam, nome, telefone, atuacao, licenca)

            if (!foto) {
                throw new Error("A foto não pôde ser salva")
            }

            if (typeof (foto) == 'object') {
                await AdicionarImagem(idParam, foto)
            }

            toast.success('Perfil alterado com sucesso!')
        }
        catch (err) {
            if (err.response)
                toast.error(err.response.data.erro);
            else {
                toast.error(err.message)
            }
        }
    }

    async function salvarEditarCliente() {
        try {

            await alterarPerfilCliente(idParam, nome, telefone, biografia)

            if (!foto) {
                throw new Error("A foto não pôde ser salva")
            }

            if (typeof (foto) == 'object') {
                await AdicionarImagemCliente(idParam, foto)
            }

            toast.success('Perfil alterado com sucesso!')
        }
        catch (err) {
            if (err.response)
                toast.error(err.response.data.erro);
            else {
                toast.error(err.message)
            }
        }
    }






    function EscolherFoto() {
        document.getElementById('ClickFoto').click();
    }

    function MostrarFoto() {
        if (typeof (foto) === 'object') {
            return URL.createObjectURL(foto)
        }
        else {
            return buscarImagem(foto)
        }

    }





    return (
        <main className='page-editar'>

            <h1>edição de perfil</h1>

            <div className='img' >


                {!foto &&
                    <img onClick={EscolherFoto} src='/assets/images/foto.png' />
 
                }

                {foto &&
                    <img className="foto-editar" onClick={EscolherFoto} src={MostrarFoto()} />
                }


                <h4>alterar imagem</h4>
                <input type="file" id='ClickFoto' onChange={e => setFoto(e.target.files[0])} />
            </div>

            <div className='text'>
                <p>nome de perfil</p>

                <input type='text' maxLength={100} className="a" value={nome} onChange={e => setNome(e.target.value)} />
            </div>

            <div className='text'>
                <p>telefone</p>

                <input type="text" maxLength={20} className="a" value={telefone} onChange={e => setTelefone(e.target.value)} />
            </div>
            {!storage('cliente-logado') &&
                <div>
                    <div className='text'>
                        <p>áreas de atuação</p>

                        <textarea type='text' maxLength={100} className="b" value={atuacao} onChange={e => setAtuacao(e.target.value)} />
                    </div>

                    <div className='text'>
                        <p>licenças e certificados</p>

                        <textarea type='text' maxLength={300} className="b" value={licenca} onChange={e => setLicenca(e.target.value)} />
                    </div>
                </div>

            }
             {storage('cliente-logado') &&
                    <div className='text'>
                        <p>Biografia</p>

                        <textarea type='text' maxLength={100} className="b" value={biografia} onChange={e => setBiografia(e.target.value)} />
                    </div>

                    

            }
            {!storage('cliente-logado') &&
            <div>
                <button onClick={salvarEditar}>salvar</button>
                <Toaster />
            </div> 
            }
            {storage('cliente-logado') &&
            <div>
                <button onClick={salvarEditarCliente}>salvar</button>
                <Toaster />
            </div> 
            }

        </main>
    );
}