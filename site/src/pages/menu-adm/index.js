import './index.scss';
import { useNavigate } from 'react-router-dom';


export default function MenuADM() {


    const navigate = useNavigate()


    function home() {
        navigate('/')
    }

    

    function denunciaCliente() {
        navigate('/denuncias-clientes')
    }

    function denunciaProf() {
        navigate('/denuncias-prof')
    }

    function remocaoCli() {
        navigate('/remover-cliente')
    }

    function remocaoProf() {
        navigate('/remover-profissional')
    }


    return (
        <main className='menuadm'>
            <header className="barra">

                <div>
                    <img onClick={home} className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1 className="meus">Funções do administrador</h1>

                <div className='volta'>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>

            </header>
            <section className='tudo'>
                
                    <section className="section">
                        <div onClick={denunciaCliente}>
                            <img src="/assets/images/denucli.png" alt="" />
                            <h4>denúncias dos clientes</h4>
                        </div>
                        <div onClick={denunciaProf}>
                            <img src="/assets/images/denuprof.png" alt="" />
                            <h4>denúncias dos profissionais</h4>
                        </div>
                        
                    </section>


                
                    <section className="section">
                        <div onClick={remocaoCli}>
                            <img src="/assets/images/remocli.png" alt="" />
                            <h4>remoção de contas de clientes</h4>
                        </div>
                        <div onClick={remocaoProf}>
                            <img src="/assets/images/remoprof.png" alt="" />
                            <h4>remoção de contas de profissionais</h4>
                        </div>
                    </section>






            </section>
        </main>
    )
}