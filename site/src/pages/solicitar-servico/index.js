import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { CadastrarServico } from '../../api/servico';
import { ListaCategoria } from '../../api/usuarioApi';
import { MostrarPerfil, buscarImagem } from '../../api/profissionalApi';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


export default function SolicitarServ() {
    const [cliente, Setcliente] = useState('');
    const [profissional, Setprofissional] = useState('');
    const [pagamento, Setpagamento] = useState('');
    const [endereco, Setendereco] = useState('');
    const [complemento, Setcomplemento] = useState('');
    const [limite, Setlimite] = useState('');
    const [detalhes, Setdetalhes] = useState('');
    const [servico, SetServico] = useState([]);
    const [IdServico, SetIdServico] = useState();
    const [perfil, setPerfil] = useState([]);

    const { idParam } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        CarregarServico();
    }, [])

    useEffect(() => {
        if (idParam) {
            carregarPerfil();
        }
    }, [])


    function home() {
        navigate('/')
    }

    function contratar() {
        navigate('/servicos-ativos')
    }

    async function cadastrarServico() {
        try {
            await CadastrarServico(cliente, profissional, IdServico, pagamento, endereco, limite, detalhes)
            toast.dark('✅Serviço Cadastrado')
        } catch (err) {

            if (err.response) {
                alert(err.response.data.erro);
            }
        }

    }

    async function CarregarServico() {
        const r = await ListaCategoria();
        SetServico(r);
    }


    async function carregarPerfil() {
        const Resp = await MostrarPerfil(idParam);
        setPerfil(Resp)
    }

    return (

        <main className='page-solicitar'>

            <header className='barra'>

                <div>
                    <img className='logo' src='/assets/images/teste final 1.png' onClick={home} />
                </div>

                <h1 className="ativos">detalhes do serviço</h1>

                <div className='volta'>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>


            </header>


            <div className='vizinho'>
                <div className="contratar">

                    {perfil.map(item =>
                        <div>

                            <div className='esquerda'>

                                <h1 className="prof">profissional a ser contratado</h1>

                                <div className="jota">
                                    <h4 className="nome">{item.nome}</h4>

                                    <img src={buscarImagem(item.foto)} />

                                    <p>{item.area}</p>
                                </div>
                                <textarea className='textarea' placeholder='Descreva o serviço a ser feito' type='text' />

                            </div>

                        </div>
                    )}


                    <div className='direita'>

                        <div className="texts">

                            <div className='linha-tex'>

                                <div className='tex-1'>

                                    <p>endereço do serviço:</p>

                                    <input type='text' placeholder='rua joa...' value={endereco} onChange={e => Setendereco(e.target.value)} />

                                </div>

                                <div className='tex-2'>
                                    <p>complemento:</p>

                                    <input type='text' placeholder='nº/apto...' value={complemento} onChange={e => Setcomplemento(e.target.value)} />

                                </div>
                            </div>

                            <div className='linha-tex'>

                                <div className='tex-1'>

                                    <p>Cidade:</p>

                                    <input type='text' placeholder='embú-gua...' />

                                </div>

                                <div className='tex-2'>
                                    <p>Estado:</p>

                                    <select>
                                        <option selected disabled hidden>Selecione</option>
                                        <option>São Paulo</option>
                                        <option>Rio de Janeiro</option>
                                        <option>Amapá</option>
                                        <option>Santa Catarina</option>
                                        <option>Espírito Santo</option>
                                        <option>Roraima</option>
                                        <option>Amazonas</option>
                                        <option>Paraná</option>
                                        <option>Rio Grande do Sul</option>
                                        <option>Goiás</option>
                                        <option>DF</option>
                                        <option>Tocantins</option>
                                        <option>Acre</option>
                                        <option>Ceará</option>
                                        <option>Pernambuco</option>
                                        <option>Piauí</option>
                                        <option>Maranhão</option>
                                        <option>Paraíba</option>
                                        <option>Alagoas</option>
                                        <option>Rio Grande do Norte</option>
                                        <option>Bahia</option>
                                        <option>Rondônia</option>
                                        <option>Mato Grosso</option>
                                        <option>Mato Grosso do Sul</option>
                                        <option>Minas Gerais</option>
                                        <option>Sergipe</option>
                                        <option>Pará</option>

                                    </select>
                                </div>
                            </div>

                            <div className='linha-tex'>

                                <div className='tex-1'>

                                    <p>tipo de serviço:</p>

                                    <select value={IdServico} onChange={e => SetIdServico(e.target.value)}>
                                        <option selected disabled hidden>Selecione</option>

                                        {servico.map(item =>
                                            <option value={item.IdCategoria}> {item.servico} </option>
                                        )}

                                    </select>

                                </div>

                                <div className='tex-2'>

                                    <p>data limite:</p>

                                    <input type='date' className="data" value={limite} onChange={e => Setlimite(e.target.value)} />

                                </div>


                            </div>

                        </div>

                        <div className='pagamento'>

                            <p className="text">entrada necessária para solicitar o serviço valor da entrada: <p className="valor">R$25,00</p></p>


                            <div className='metodo'>

                                <p>método de pagamento:</p>

                                <select className="abc">
                                    <option selected disabled hidden>Selecione</option>
                                    <option>cartão de debito/crédito</option>
                                    <option>pix</option>
                                    <option>boleto</option>
                                    <option>pic pay</option>
                                    <option>mercado pago</option>

                                </select>

                            </div>

                        </div>



                    </div>
                </div>
                <button className='botao' onClick={cadastrarServico}>contratar serviço</button>


            </div>





        </main>




    )

}