import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import storage from 'local-storage'


export default function MeusServicos() {


    const navigate = useNavigate()
    const {idParam} = useParams()

    function home() {
        navigate('/')
    }

    function solicitacoes() {
        navigate(`/solicitacoes-de-servico/${idParam}`)
    }

    function pendentes() {
        navigate(`/servicos-pendentes/${idParam}`)
    }

    function realizados() {
        navigate(`/servicos-realizados/${idParam}`)
    }

    //O navigate do ativos possivelmente precisa de um endpoint
    function ativos() {
        navigate('/servicos-ativos/1')
    }

    function contratados() {
        navigate('/servicos-contratados')
    }

    function voltar() {
        window.history.back()
    }


    return (
        <main className='meus-servicos'>
            <header className="barra">

                <div>
                    <img onClick={home} className='logo' src='/assets/images/teste final 1.png' />
                </div>

                <h1 className="meus">meus serviços</h1>

                <div className='volta' onClick={
                    storage
                }>

                    <img className='menu' src='/assets/images/voltar.png' />
                    <p>voltar</p>
                </div>

            </header>
            <section>
                {storage('profissional-logado') &&
                    <section className="section">
                        <div onClick={solicitacoes}>
                            <img src="/assets/images/solicitacoes.png" alt="" />
                            <h4>solicitações de serviço</h4>
                        </div>
                        <div onClick={pendentes}>
                            <img src="/assets/images/ampulheta.png" alt="" />
                            <h4>serviços pendentes</h4>
                        </div>
                        <div onClick={realizados}>
                            <img src="/assets/images/cubo.png" alt="" />
                            <h4>serviços realizados</h4>
                        </div>
                    </section>
                }


                {storage('cliente-logado') &&
                    <section className="section">
                        <div onClick={ativos}>
                            <img src="/assets/images/ampulheta.png" alt="" />
                            <h4>serviços ativos</h4>
                        </div>
                        <div onClick={contratados}>
                            <img src="/assets/images/cubo.png" alt="" />
                            <h4>serviços contratados</h4>
                        </div>
                    </section>
                }






            </section>
        </main>
    )
}