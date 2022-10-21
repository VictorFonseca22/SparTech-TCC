import './index.scss'
import { MostrarPerfil, inserirDenuncia } from '../../api/profissionalApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import storage from 'local-storage'
import { toast, Toaster } from 'react-hot-toast'
import { DenunciaClienteporId, DenunciaProfissionalporId } from '../../api/admApi';
import { inserirDenunciaCliente, MostrarPerfilCliente } from '../../api/clienteApi';
import { useNavigate } from 'react-router-dom';

export default function Denunciar() {
    const [Perfil, SetPerfil] = useState([]);
    const [PerfilCliente, SetPerfilCliente] = useState([]);
    const [classificacao, setClassificacao] = useState('')
    const [data, setData] = useState('')
    const [detalhes, setDetalhes] = useState('')

    const { idParam } = useParams();
    const navigate= useNavigate()
    async function Carregar() {
        const resp = await MostrarPerfil(idParam);
        SetPerfil(resp);
        console.log(resp);
    }
    async function CarregarCliente() {
        const resp = await MostrarPerfilCliente(idParam);
        SetPerfilCliente(resp);
        console.log(resp);
    }

    useEffect(() => {
        if (storage('profissional-logado')) {
            CarregarCliente()
        }
        if (!storage('cliente-logado')) {
            Carregar()
        }
    }, [])

    async function SalvarDenuncia() {
        try {
            if (storage('cliente-logado')) {
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

    async function SalvarDenunciaCliente() {
        try {
            if (storage('profissional-logado')) {
                const idProfissional = storage('profissional-logado').id
                await inserirDenunciaCliente(idProfissional, idParam, classificacao, data, detalhes)
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


    async function carregarDenunciaCliente() {
        const resposta = await DenunciaClienteporId(idParam);
        console.log(resposta);

        setClassificacao(resposta.classificacao)
        setData(resposta.data)
        setDetalhes(resposta.detalhes)
    }
    async function carregarDenunciaProfissional() {
        const resposta = await DenunciaProfissionalporId(idParam);
        console.log(resposta);

        setClassificacao(resposta.classificacao)
        setData(resposta.data)
        setDetalhes(resposta.detalhes)
    }

    useEffect(() => {
        if(storage('adm-logado')) {
            carregarDenunciaCliente()
            carregarDenunciaProfissional()
        }
    }, [])

    return (
        <main className='denunciar'>
            <div className='conteiner'>
                {storage('adm-logado') &&

                    <h1>Analise a denúncia</h1>

                }
                {storage('profissional-logado') &&
                <div>
                        {PerfilCliente.map(item =>
                            <div>
                                <p> deseja denunciar {item.nome} por:</p>
                            </div>
                        )}
                </div>
                }
                {storage('cliente-logado') &&
                <div>
                {Perfil.map(item =>
                    <div>
                        <p> deseja denunciar {item.nome} por:</p>
                    </div>
                )}
                </div>
                
                }


                <div className="dois">
                    <div className='classificar'>
                        <label>classificação da denúncia</label>
                        {!storage('adm-logado') &&
                            <select className='sele' value={classificacao} onChange={e => setClassificacao(e.target.value)}>
                                <option selected hidden>Selecione</option>
                                <option>assédio</option>
                                <option>serviço mal feito</option>
                                <option>estrupo</option>
                                <option>palavras feias</option>
                                <option>pagamento invalido</option>
                            </select>
                        }
                        {storage('adm-logado') &&
                            <select className='sele' value={classificacao} disabled onChange={e => setClassificacao(e.target.value)}>
                                <option selected hidden>Selecione</option>
                                <option>assédio</option>
                                <option>serviço mal feito</option>
                                <option>estrupo</option>
                                <option>palavras feias</option>
                                <option>pagamento invalido</option>
                            </select>
                        }
                    </div>

                    <div className='classificar' value={data} onChange={e => setData(e.target.value)}>
                        <label>data da ocorrência</label>
                        {storage('adm-logado') &&
                            <input type='date' disabled className="date" />

                        }
                        {!storage('adm-logado') &&
                            <input type='date' className="date" />

                        }
                    </div>
                </div>
                {storage('adm-logado') &&
                    <h1 className="descreva">descrição da situação:</h1>
                }

                {storage('adm-logado') &&
                    <textarea className="textarea" placeholder='a denuncia...' disabled value={detalhes} onChange={e => setDetalhes(e.target.value)} />
                }
                {!storage('adm-logado') &&
                    <textarea className="textarea" placeholder='a denuncia...' value={detalhes} onChange={e => setDetalhes(e.target.value)} />
                }
                <div>
                    {storage('cliente-logado') &&
                        <button onClick={SalvarDenuncia}>enviar</button>
                    }
                    {storage('profissional-logado') &&
                        <button onClick={SalvarDenunciaCliente}>enviar</button>
                    }
                </div>
                <Toaster />
            </div>
        </main>
    );
}