import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaCategoria } from '../../api/usuarioApi';
import { buscarImagem, MostrarPerfil } from '../../api/profissionalApi.js'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


export default function SolicitarServ() {
    const [servico, SetServico] = useState([]);
    const [infoperfil, setInfoPerfil] = useState([])
    const [IdServico, SetIdServico] = useState();
    const { register, handleSubmit, setValue, setFocus } = useForm();

    const { idParam } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        CarregarServico();
    }, [])




    function home() {
        navigate('/')
    }

    function contratar() {
        navigate('/servicos-ativos')
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
            setFocus('addressNumber');
        });
    }

    async function CarregarServico() {
        const r = await ListaCategoria();
        SetServico(r);
    }

    async function carregarPerfil() {
        const resposta = await MostrarPerfil(idParam);
        console.log(resposta)
        setInfoPerfil(resposta)
    }

    useEffect(() => {
        if (idParam) {
            carregarPerfil();
        }

    }, [])




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




                    <div className='esquerda'>

                        <h1 className="prof">profissional a ser contratado</h1>
                        {infoperfil.map(item =>
                            <div className="jota">
                                <h4 className="nome">{item.nome}</h4>

                                <img src={buscarImagem(item.foto)} />

                                <p>{item.area}</p>
                            </div>

                        )}

                        <textarea className='textarea' placeholder='Descreva o serviço a ser feito' type='text' />

                    </div>





                    <div className='direita'>

                        <div className="texts">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='linha-tex'>

                                    <div className='tex-1'>

                                        <p>endereço do serviço:</p>

                                        <input type='text' {...register("address")} placeholder='rua joa...' />

                                    </div>

                                    <div className='tex-2'>
                                        <p>CEP:</p>

                                        <input type='text' placeholder='00000-000' {...register("cep")} onBlur={checkCEP} />
                                    </div>


                                </div>

                                <div className='linha-tex'>

                                <div className='tex-1'>
                                        <p>Bairro:</p>

                                        <input type='text' placeholder='val-fl...' {...register("neighborhood")} />
                                    </div>
                                    <div className='tex-2'>
                                        <p>complemento:</p>

                                        <input type='text' placeholder='nº/apto...' />

                                    </div>

                                    
                                </div>
                                <div className='linha-tex'>


                                    <div className='tex-1'>

                                        <p>Cidade:</p>

                                        <input type='text' {...register("city")} placeholder='embú-gua...' />

                                    </div>

                                    <div className='tex-2'>
                                        <p>Estado:</p>

                                        <input type='text' placeholder='sp' {...register("uf")} />
                                    </div>
                                </div>
                            </form>
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

                                    <input type='date' className="data" />

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
                <button className='botao' onClick={contratar}>contratar serviço</button>


            </div>





        </main>




    )
}
