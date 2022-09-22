import './index.scss'

export default function Perfilprofissional() {

    return (
        <main className='Perfil-Profissional'>

            <div className='barra'>

                <div className="voltar">
                    <img src='/assets/images/voltar.png' />
                    <h1>voltar</h1>
                </div>

                <div className="c">
                    <img className='Logo' src='/assets/images/teste final 1.png' />
                </div>
                <div className="acoes">
                    <h1 className='denunciar'>denunciar</h1>

                    <h1 className='servico'>Serviços</h1>
                </div>


            </div>

            <div className='fundo'>
            
                <img src='/assets/images/pessoa.png' className="foto"/>

                <img src='/assets/images/fundo.png' className="cinza"/>

            </div>

            <div className='informacoes'>

                <div className="op">
                    <div className="ip">

                        <h1 className='nome'>JANETE GONÇALVES</h1>

                        <p className="tel">(11) 93344-2371</p>

                        <p className="email">janjango@yahoo.com.br</p>

                        <div className="avaliacao">
                            <div className="estrelas">
                                <img src='/assets/images/estrela.png' />
                                <img src='/assets/images/estrela.png' />
                                <img src='/assets/images/estrela.png' />
                                <img src='/assets/images/estrela.png' />
                                <img src='/assets/images/estrela-metade.png' />
                            </div>
                            <p>4,5</p>
                        </div>
                    </div>
                            <div className='editar'>

                                <h1 className="perfil">editar perfíl</h1>
                                <img src='/assets/images/caneta.png' />

                            </div>
                </div>
                <hr/>

                <div className='experiencia'>

                    <div className="area-de-atuacao">
                        <h1>área(s) de atuação</h1>

                        <p>front-end</p>
                        <p>back-end - javascript</p>
                        <p>back-end - banco de dados</p>
                    </div>
                    <div className='licenca'>
                        <h1>Licenças e certificados</h1>

                        <p>MCPS: Microsoft Certified Professional 2017</p>
                        <p>instituto social nossa senhora de fátima 1908</p>
                    </div>
                </div>

                <hr/>

                <div className="comentes">
                    <h1>comentários sobre você</h1>

                </div>

            </div>












        </main>
    );

}