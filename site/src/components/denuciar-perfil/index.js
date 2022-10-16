import './index.scss'
import { MostrarPerfil, inserirDenuncia } from '../../api/profissionalApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import storage from 'local-storage'
import {toast, Toaster} from 'react-hot-toast'

export default function Denunciar() {
    const [Perfil, SetPerfil] = useState([]);
    const [classificacao, setClassificacao] = useState('')
    const [data, setData] = useState('')
    const [detalhes, setDetalhes] = useState('')

    const {idParam} = useParams ('');

    async function Carregar() {
        const resp = await MostrarPerfil(idParam);
        SetPerfil(resp);
        console.log(resp);
    }

    useEffect(() => {
        if (idParam) {
            Carregar()   
        }
    }, [])

    async function SalvarDenuncia() {
       try {
        if(storage('cliente-logado')) {
            const idCliente = storage('cliente-logado').id
            await inserirDenuncia(idCliente, idParam, classificacao, data, detalhes)
            toast.loading('Denunciando...');

            setTimeout(() => {
                toast.dismiss();
                toast.success('Denúncia enviada!')
              }, 600);
        }
        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro);
            else {
                toast.error(err.message)
            }
        }
    }


    return (
        <main className='denunciar'>
            <div className='conteiner'>
                <h1>denunciar</h1>

                {Perfil.map(item =>
                <div> 
                    <p> deseja denunciar {item.nome} por:</p>
                </div>
                )}

                <div className="dois">
                    <div className='classificar'>
                        <label>classificação da denúncia</label>
                        <select className='sele' value={classificacao} onChange={e => setClassificacao(e.target.value)}>
                            <option selected hidden>Selecione</option>
                            <option>assédio</option>
                            <option>serviço mal feito</option>
                            <option>estrupo</option>
                            <option>palavras feias</option>
                            <option>pagamento invalido</option>
                        </select>
                    </div>

                    <div className='classificar' value={data} onChange={e => setData(e.target.value)}>
                        <label>data da ocorrência</label>
                        <input type='date' className="date" />
                    </div>
                </div>

                <h1 className="descreva">descreva a situação:</h1>

                <textarea className="textarea" placeholder='a denuncia...' value={detalhes} onChange={e => setDetalhes(e.target.value)}/>
            <div>
                <button onClick={SalvarDenuncia}>enviar</button>
                <Toaster/>
                </div>
            </div>
        </main>
    );
}