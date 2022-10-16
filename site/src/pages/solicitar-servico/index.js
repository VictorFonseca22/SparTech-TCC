import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaCategoria } from '../../api/usuarioApi';
import { buscarImagem, MostrarPerfil } from '../../api/profissionalApi.js'
import { CadastrarServico, ListaPagamento} from '../../api/servico.js'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import storage from 'local-storage'


export default function SolicitarServ() {
    const [servico, SetServico] = useState([]);
    const [infoperfil, setInfoPerfil] = useState([])
    const [IdServico, SetIdServico] = useState();

    const [rua, setRua] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [limite, setLimite] = useState('');
    const [detalhes, setDetalhes] = useState('');
    
    const [pagamento, setPagamento] = useState([]);
    const [idPagamento, setIdPagamento] = useState();

    

    const { register, handleSubmit, setValue, setFocus } = useForm();

    const { idParam } = useParams();

    const navigate = useNavigate();

    const idCliente = storage('cliente-logado').id

    async function SalvarServico() {
        try {
            await CadastrarServico(idCliente, idParam, IdServico, idPagamento, rua, complemento, bairro, cidade, uf, limite, detalhes)
            toast.success('Serviço cadastrado! ✅');
        } catch (err) {
            if (err.response)
               toast.error(err.response.data.erro);
            else {
                toast.error(err.message)
            }
        }
    }

    useEffect(() => {
        CarregarServico();
    }, [])




    function home() {
        navigate('/')
    }
    function servicosAtivos() {
        navigate(`/servicos-ativos/${idParam}`)
    }


    const onSubmit = (e) => {
        console.log(e);
    }

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            console.log(data);
            // register({ name: 'address', value: data.logradouro });
            setValue('address', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setValue('uf', data.uf);
        });
    }

    async function CarregarServico() {
        const r = await ListaCategoria();
        SetServico(r);
    }

    async function carregarPerfil() {
        const resposta = await MostrarPerfil(idParam);
        setInfoPerfil(resposta)
    }

    useEffect(() => {
        if (idParam) {
            carregarPerfil();
        }

    }, [])

    async function CarregarPagamentos() {
        const r = await ListaPagamento();
        setPagamento(r);
    }

    useEffect(() => {
        CarregarPagamentos();
    }, [])




    return (

        <main className='page-solicitar'>
            <ToastContainer/>

            <header className='barra'>

                <div>
                    <img className='logo' src='/assets/images/teste final 1.png' onClick={home} />
                </div>

                <h1 className="ativos">detalhes do serviço</h1>

                <div className='volta'>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p onClick={() => [navigate(`/perfil-profissional/${idParam}`)]}>voltar</p>
                </div>


            </header>


            <div className='vizinho'>
                <div className="contratar">




                    <div className='esquerda'>

                        <h1 className="prof">profissional a ser contratado</h1>
                        {infoperfil.map(item =>
                            <div className="jota">
                                <h4 className="nome">{item.nome}</h4>

                                <img src={buscarImagem(item.foto)} />

                                <p>{item.area}</p>
                            </div>

                        )}

                        <textarea className='textarea' placeholder='Descreva o serviço a ser feito' type='text' value={detalhes} onChange={e => setDetalhes(e.target.value)}/>

                    </div>





                    <div className='direita'>

                        <div className="texts">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='linha-tex'>

                                    <div className='tex-1'>

                                        <p>endereço do serviço:</p>

                                        <input type='text' {...register("address")} placeholder='rua joa...' value={rua} onChange={e => setRua(e.target.value)} />

                                    </div>

                                    <div className='tex-2'>
                                        <p>CEP:</p>

                                        <input type='text' placeholder='00000-000' {...register("cep")} onBlur={checkCEP} />
                                    </div>


                                </div>

                                <div className='linha-tex'>

                                <div className='tex-1'>
                                        <p>Bairro:</p>

                                        <input type='text' placeholder='val-fl...' {...register("neighborhood")}  value={bairro} onChange={e => setBairro(e.target.value)}/>
                                    </div>
                                    <div className='tex-2'>
                                        <p>complemento:</p>

                                        <input type='text' placeholder='nº/apto...' value={complemento} onChange={e => setComplemento(e.target.value)}/>

                                    </div>

                                    
                                </div>
                                <div className='linha-tex'>


                                    <div className='tex-1'>

                                        <p>Cidade:</p>

                                        <input type='text' {...register("city")} placeholder='embú-gua...'  value={cidade} onChange={e => setCidade(e.target.value)}/>

                                    </div>

                                    <div className='tex-2'>
                                        <p>Estado:</p>

                                        <input type='text' placeholder='sp' {...register("uf")}  value={uf} onChange={e => setUf(e.target.value)}/>
                                    </div>
                                </div>
                            </form>
                            <div className='linha-tex'>

                                <div className='tex-1'>

                                    <p>tipo de serviço:</p>

                                    <select value={IdServico} onChange={e => SetIdServico(e.target.value)}>
                                        <option selected  hidden>Selecione</option>

                                        {servico.map(item =>
                                            <option value={item.IdCategoria}> {item.servico} </option>
                                        )}

                                    </select>

                                </div>

                                <div className='tex-2'>

                                    <p>data limite:</p>

                                    <input type='date' className="data" value={limite} onChange={e => setLimite(e.target.value)}/>

                                </div>


                            </div>

                        </div>

                        <div className='pagamento'>

                            <p className="text">entrada necessária para solicitar o serviço valor da entrada: <p className="valor">R$25,00</p></p>


                            <div className='metodo'>

                                <p>método de pagamento:</p>

                                <select className="abc" value={idPagamento} onChange={e => setIdPagamento(e.target.value)}>
                                    <option selected  hidden>Selecione</option>

                                    {pagamento.map(item =>
                                <option value={item.idPagamento}> {item.pagamento} </option>
                            )}
                                    

                                </select>

                            </div>

                        </div>



                    </div>
                </div>
                <div>
                <button className='botao' onClick={SalvarServico}>contratar serviço</button>
                <button className='botao' onClick={servicosAtivos}>serviços ativos</button>
                </div>

            </div>





        </main>




    )
}
