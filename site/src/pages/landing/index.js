import './index.scss';
import Header from '../../components/header';
import Categoria from '../../components/categoria';


export default function Landing(){

    return(
        <main className='landing-page'>
            <Header/>
            <section className='faixa-1'>
                
                <div className='introdução'>
                    <h1>A UM ANO LIGANDO O CLIENTE AOS MELHORES PROFISSIONAIS</h1>

                    <button className='b'>SAIBA MAIS</button>
                </div>
            </section>

            <section className='faixa-2'>
                <h4>serviços mais solicitados</h4>
                <div className='categorias'>
                    <Categoria nome='Montagem e Manutenção de Computadores'/>
                    <Categoria nome='Limpeza e Higienização de Computadores'/>
                    <Categoria nome='Cabeamento de Redes'/>
                    <Categoria nome='Desenvolvimento de Website'/>
                </div>
            </section>
        </main>
    )
}