import './index.scss'
import {alterarPerfil, MostrarPerfil} from '../../api/profissionalApi.js'
import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import storage from 'local-storage'
export default function Editar() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [atuacao, setAtuacao] = useState('');
    const [licenca, setLicenca] = useState('');
    const [perfil, setPerfil] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
     
    const idParam = useParams();
    const navigate = useNavigate();
    const  id= storage('usuario-logado').id;

    async function salvarEditar() {
        try{
        await alterarPerfil(id, nome, telefone, atuacao, licenca)
        toast.success('Perfil alterado com sucesso 🚀')
        }
        catch (err) {
            if(err.response)
                toast.error(err.response.data.erro);  
            else{
                toast.error(err.message)
            }
        }
    }

    


    async function carregarPerfil() {
        const resposta = await MostrarPerfil(idParam);
        setPerfil(resposta)
    }

    useEffect(() => {
     carregarPerfil();
    
    }, [])

    
    

    
    return (
        <main className='page-editar'>
            <ToastContainer />

            <h1>edição de perfil</h1>

            <div className='img'>

                <img src='/assets/images/pessoa.png' />

                <h4>alterar imagem</h4>

            </div>

            <div className='text'>
                <p>nome de perfil</p>

                <input type='text' maxLength={100} className="a" value={nome} onChange={e => setNome(e.target.value)} />
            </div>

            <div className='text'>
                <p>telefone</p>

                <input type="text" maxLength={20} className="a" value={telefone} onChange={e => setTelefone(e.target.value)}/>
            </div>

            <div className='text'>
                <p>áreas de atuação</p>

                <textarea type='text' maxLength={100} className="b" value={atuacao} onChange={e => setAtuacao(e.target.value)}/>
            </div>

            <div className='text'>
                <p>licenças e certificados</p>

                <textarea type='text' maxLength={300} className="b" value={licenca} onChange={e => setLicenca(e.target.value)}/>
            </div>

            <button onClick={salvarEditar}>salvar</button>


        </main>
    );
}