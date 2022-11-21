import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaCategoria, ListaCategoriaProfissional } from '../../../api/usuarioApi';
import { buscarImagem, MostrarPerfil } from '../../../api/profissionalApi.js'
import { CadastrarServico, ListaPagamento } from '../../../api/servico.js'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import storage from 'local-storage'
import InputMask from 'react-input-mask'


export default function SolicitarServ() {
    const [servico, SetServico] = useState([]);
    const [infoperfil, setInfoPerfil] = useState([])
    const [IdServico, SetIdServico] = useState();
    const [selecionado, setSelecionado] = useState([])

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
            const r = await CadastrarServico(idCliente, idParam, IdServico, idPagamento, rua, complemento, bairro, cidade, uf, limite, detalhes)
            console.log(r)
            toast.loading("Contratando...")

            setTimeout(() => {
                toast.dismiss();
                toast.success(`Serviço cadastrado!`)
            }, 600);
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
        navigate(`/servicos-ativos/${storage('cliente-logado').id}`)
    }


    const onSubmit = (e) => {
        console.log(e);
    }

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            console.log(data);
            if(data) {
                document.getElementById('rua').disabled = true;
                document.getElementById('bairro').disabled = true;
                document.getElementById('localidade').disabled = true;
                document.getElementById('uf').disabled = true;
            }
            // register({ name: 'address', value: data.logradouro });
            setRua(data.logradouro)
            setBairro(data.bairro)
            setCidade(data.localidade)
            setUf(data.uf)
        });

    }

    async function CarregarServico() {
        const r = await ListaCategoriaProfissional(idParam);
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

    function paymentType(x){
        console.log(x)
        if(x == 'Pix'){
            return(
                <div>AAAAAAAAAAAAAA</div>
            )
        }
    }

    useEffect(() => {
        CarregarPagamentos();
    }, [])





    return (

        <main className='page-solicitar'>
            <Toaster />

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

                        <textarea className='textarea' placeholder='Descreva o serviço a ser feito' type='text' value={detalhes} onChange={e => setDetalhes(e.target.value)} />

                    </div>





                    <div className='direita'>

                        <div className="texts">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='linha-tex'>

                                    <div className='tex-2'>
                                        <p>CEP:</p>

                                        <InputMask mask='99999-999' type='text' placeholder='00000-000' onBlur={checkCEP} />
                                    </div>
                                    <div className='tex-1'>

                                        <p>endereço do serviço:</p>

                                        <input type='text' id='rua' placeholder='rua joa...' value={rua} onChange={e => setRua(e.target.value)} />

                                    </div>



                                </div>

                                <div className='linha-tex'>

                                    <div className='tex-1'>
                                        <p>Bairro:</p>

                                        <input type='text' id='bairro' placeholder='val-fl...' value={bairro} onChange={e => setBairro(e.target.value)} />
                                    </div>

                                    <div className='tex-2'>
                                        <p>complemento:</p>

                                        <input type='text'  placeholder='nº/apto...' value={complemento} onChange={e => setComplemento(e.target.value)} />

                                    </div>


                                </div>
                                <div className='linha-tex'>


                                    <div className='tex-1'>

                                        <p>Cidade:</p>

                                        <input type='text' id='localidade' placeholder='embú-gua...' value={cidade} onChange={e => setCidade(e.target.value)} />

                                    </div>

                                    <div className='tex-2'>
                                        <p>Estado:</p>

                                        <input type='text' id='uf' placeholder='sp' value={uf} onChange={e => setUf(e.target.value)} />
                                    </div>
                                </div>
                            </form>
                            <div className='linha-tex'>

                                <div className='tex-1'>

                                    <p>tipo de serviço:</p>

                                    <select value={IdServico} onChange={e => SetIdServico(e.target.value)}>
                                    <option selected hidden>Selecione</option>
                                        {servico.map(item =>
                                            <option value={item.IdCategoria}> {item.servico} </option>
                                        )}

                                    </select>

                                </div>

                                <div className='tex-2'>

                                    <p>data limite:</p>

                                    <input type='date' className="data" value={limite} onChange={e => setLimite(e.target.value)} />

                                </div>


                            </div>

                        </div>

                        <div className='pagamento'>

                            


                            <div className='metodo'>
                                <div>
                                <p>método de pagamento:</p>
                                <br/>
                                <select className="abc" value={idPagamento} onChange={e => setIdPagamento(e.target.value)}>
                                    <option selected hidden>Selecione</option>

                                    {pagamento.map(item =>
                                        <option value={item.idPagamento}> {item.pagamento} </option>
                                    )}


                                </select>
                                </div>

                                <div>
                                    {idPagamento === '1' &&
                                    <div className='div-pag'>
                                    <img className='icones-pag' src='/assets/images/credit-card.png'/>
                                    </div>
                                    }
                                    {idPagamento === '2' &&
                                    <div className='div-pag'>
                                    <img className='icones-pag' src='/assets/images/pix.png'/>
                                    </div>
                                    }
                                    {idPagamento === '3' &&
                                    <div className='div-pag'>
                                    <img className='icones-pag' src='/assets/images/boleto.png'/>
                                    </div>
                                    }
                                    {idPagamento === '4' &&
                                    <div className='div-pag'>
                                    <img className='icones-pag' src='/assets/images/paypal.png'/>
                                    </div>
                                    }
                                </div>
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
