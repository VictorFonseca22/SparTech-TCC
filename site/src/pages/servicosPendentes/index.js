import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './index.scss';
import Pendente from '../../components/pendentes';
import { ServicosAtivosProfissional } from '../../api/servico';
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
                        telefone={item.tel_cliente}
                        profissional={item.profissional}/>
                            
                            )}

                    </div>
                
                </div>

            </section>

        </main>
    )
}

