import './index.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { buscarImagem, MostrarPerfil } from '../../../api/profissionalApi.js'
import { deletarServico, ServicosAtivosCliente } from '../../../api/servico';
import { toast, Toaster } from 'react-hot-toast'
import storage from 'local-storage'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Serviços() {
    const [infoServico, setInfoServico] = useState([])
    const [erro, setErro] = useState('');

    const navigate = useNavigate()
    const { idParam } = useParams()
    

    function home() {
        navigate('/')
    }

    function voltar() {
        navigate(`/meus-servicos/${idParam}`)
    }
    
    function selecionarServico(id, preco) {
       
        const idServ = (
            { 'id': id }
        )
        const precServ = (
            { 'preco': preco }
        )

        storage.remove('serv-selecionado')
        storage.remove('prec-selecionado')

        storage('serv-selecionado', idServ)
        storage('prec-selecionado', precServ)
        const senha = document.getElementById("faq-titulo-2");
        if (senha.checked == false) {
            senha.checked = true;

        }
        else {
            senha.checked = false
            storage.remove('serv-selecionado')
            storage.remove('prec-selecionado')
        }
        
        


    }

    async function carregarServico() {
        try {
            const resposta = await ServicosAtivosCliente(idParam);
            setInfoServico(resposta)
        }
        catch (err) {
            if (err.response.status == 400) {
                setErro(err.response.data.erro);
            }
        }
    }

    useEffect(() => {
        carregarServico();
       
       
    }, [])

    async function removerServico(profissional) {
        if (storage('serv-selecionado')) {
            confirmAlert({
                title: 'Remover serviço',
                message: `Deseja remover o serviço com ${profissional} ?`,
                buttons: [
                    {
                        label: 'Sim',
                        onClick: async () => {

                            const id = storage('serv-selecionado').id
                            const resposta = await deletarServico(id, profissional);

                            toast.loading("Excluindo...")

                            setTimeout(() => {
                                toast.dismiss();
                                toast.success(`Você removeu seu serviço com ${profissional}`)
                            }, 600);



                        }
                    },
                    {
                        label: 'Não'
                    }
                ]


            })
        }
        else {
            toast.error('Você não selecionou um serviço')
        }

    }


    return (
        <main className='servicos'>
            <Toaster />
            <header className="barra">

                <div>
                    <img onClick={home} className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1 className="ativos">serviços ativos</h1>

                <div className='volta' onClick={voltar}>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>

            </header>


            <section className="ordem">


                <section className="ajuste">
                    {infoServico.map(item =>

                        <div className='informacoes' onClick={() => selecionarServico(item.id, item.valor)}>
                            <input class="trigger-input" id="faq-titulo-2" type="radio" />


                            <div className='mapeamento-perfil'>
                                <img src={buscarImagem(item.foto)} />
                                <div className='ramo'>
                                    <h1>{item.profissional}</h1>

                                    <p>{item.area}</p>
                                </div>
                            </div>






                            <div className="dois">
                                <div className='info'>
                                    <h2>serviço a realizar</h2>

                                    <p>{item.detalhes}</p>
                                </div>

                                <div className='info'>
                                    <h2>valor a ser pago</h2>

                                    <p>R${item.valor}</p>
                                </div>

                            </div>

                            <div className="dois">

                                <div className='endeinforeco'>
                                    <h2>endereço do serviço</h2>

                                    <p>{item.rua}, {item.complemento} - {item.cidade} - {item.estado}</p>
                                </div>

                                <div className='info'>
                                    <h2>data de entrega marcada</h2>

                                    <p>22-08-2022</p>
                                </div>

                            </div>

                            <div className="dois">

                                <div className='info'>
                                    <h2>data limite</h2>

                                    <p>{item.data}</p>
                                </div>

                                <div className='info'>
                                    <h2>situação do serviço</h2>

                                    <p>Pendente</p>
                                </div>

                            </div>
                        </div>

                    )}
                    {erro !== undefined &&
                        <div className="informacoes-err">
                            {erro}
                        </div>
                    }

                    {storage('serv-selecionado') &&

                        <div className='resumo'>

                            <h1>resumo do serviço selecionado</h1>

                            <hr />

                            <div className='valor'>
                                <p>valor total do serviço</p>

                                <p>R${storage('prec-selecionado').preco}</p>
                            </div>



                            <hr />
                            {infoServico.map(item =>
                                <div className="button">
                                    <button className='pagar'>
                                        pagar serviço concluído
                                    </button>

                                    <button className='cancelar' onClick={() => removerServico(item.profissional)}>
                                        cancelar serviço

                                    </button>
                                </div>
                            )}
                            <h5>A EsparTech, irá dar a garantia de 1 mês
                                sobre o serviço realizado, caso aconteça algum problema, a EsparTech irá mandar um profissional sem necessidade de um novo pagamento. </h5>


                        </div>
                    }




                </section>
            </section>




        </main>
    );

}