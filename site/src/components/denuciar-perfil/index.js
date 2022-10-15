import './index.scss'
import { MostrarPerfil } from '../../api/profissionalApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Denunciar() {
    const [Perfil, SetPerfil] = useState([]);

    const {idParam} = useParams ('');

    async function Carregar() {
        const resp = await MostrarPerfil(idParam);
        SetPerfil(resp);
        console.log(resp);
    }

    useEffect(() => {
        if (idParam) {
            Carregar()   
        }
    }, [])


    return (
        <main className='denunciar'>
            <div className='conteiner'>
                <h1>denunciar</h1>

                {Perfil.map(item =>
                <div> 
                    <p> deseja denunciar {item.nome} por:</p>
                </div>
                )}

                <div className="dois">
                    <div className='classificar'>
                        <label>classificação da denúncia</label>
                        <select className='sele'>
                            <option selected hidden>Selecione</option>
                            <option>assédio</option>
                            <option>serviço mal feito</option>
                            <option>estrupo</option>
                            <option>palavras feias</option>
                            <option>pagamento invalido</option>
                        </select>
                    </div>

                    <div className='classificar'>
                        <label>data da ocorrência</label>
                        <input type='date' className="date" />
                    </div>
                </div>

                <h1 className="descreva">descreva a situação:</h1>

                <textarea className="textarea" placeholder='a denuncia...' />

                <button>enviar</button>
            </div>
        </main>
    );
}