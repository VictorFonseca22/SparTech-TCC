import './index.scss';
import { useNavigate } from 'react-router-dom';


export default function MenuADM() {


    const navigate = useNavigate()


    function voltarLP() {
        navigate('/')
    }

   


    return (
        <main className='menuadm'>
            <header className="barra">

                <div>       
                    <img onClick={() => [navigate('/')]} className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1 className="meus">Funções do administrador</h1>

                <div className='volta' onClick={voltarLP}>
                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>

            </header>
            <section className='tudo'>
                
                    <section className="section">
                        <div onClick={() => [navigate('/denuncias-cliente')]}>
                            <img src="/assets/images/denucli.png" alt="" />
                            <h4>denúncias dos clientes</h4>
                        </div>
                        <div onClick={() => [navigate('/denuncias-profissional')]}>
                            <img src="/assets/images/denuprof.png" alt="" />
                            <h4>denúncias dos profissionais</h4>
                        </div>
                        
                    </section>


                
                    <section className="section">
                        <div onClick={() => [navigate('/remover-cliente')]}>
                            <img src="/assets/images/remocli.png" alt="" />
                            <h4>remoção de contas de clientes</h4>
                        </div>
                        <div onClick={() => [navigate('/remover-profissional')]}>
                            <img src="/assets/images/remoprof.png" alt="" />
                            <h4>remoção de contas de profissionais</h4>
                        </div>
                    </section>






            </section>
        </main>
    )
}