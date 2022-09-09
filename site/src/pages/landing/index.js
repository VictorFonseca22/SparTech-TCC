import './index.scss';
import Header from '../../components/header';


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
        </main>
    )
}