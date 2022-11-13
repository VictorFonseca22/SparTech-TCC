import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './index.scss';
import Pendente from '../../../components/pendentes';
import { ServicosAtivosProfissional, concluirServico } from '../../../api/servico';
import { toast, Toaster } from 'react-hot-toast'
export default function ServicosPendentes() {
    const [servico, setServico] = useState([])

    const navigate = useNavigate();
    const {idParam} = useParams()

    async function carregarServicosPendentes() {
        const resposta = await ServicosAtivosProfissional(idParam);
        setServico(resposta)
    }
    useEffect(() => {
        carregarServicosPendentes()
    }, [])



    function home() {
        navigate('/')
    }

    function perfil() {
        navigate(`/meus-servicos/${idParam}`)
    }

    async function ConcluiSolicitacao(id) {
        try {
            const resposta = await concluirServico(id);
            toast.loading('Concluindo...');

            setTimeout(() => {
                toast.dismiss();
                toast.success('Serviço Concluido!')
            }, 600);
        }
        catch (err) {
            if (err.response)
                toast.error(err.response.data.erro);
            else {
                toast.error(err.message)
            }
        }
    }


    return (
        <main className="remocao">
            <header className="barra">

                <div>
                    <img onClick={home} className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1>Serviços Pendentes</h1>

                <div className='volta' onClick={perfil}>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>

            </header>

            <section>

                <div className='externa'>

                    <div className='wrap'>
                        {servico.map(item => 
                        <Pendente nome={item.cliente} 
                        tiposerv={item.tipo_servico} 
                        datalimite={item.data} 
                        localizacao={item.rua + ', ' + item.complemento + '- ' + item.bairro}
                        preco={item.valor}
                        telefone={item.tel_cliente}
                        profissional={item.profissional}
                        funcao={ConcluiSolicitacao}
                        conclui={item.id}/>
                        )}
                        <Toaster/>

                    </div>
                
                </div>

            </section>

        </main>
    )
}

