import './index.scss'

export default function Denunciar() {

    return (
        <main className='denunciar'>
            <div className='conteiner'>

                <h1>denunciar</h1>
                <p>deseja denunciar janete gonçalves por:</p>

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

                <div className='data'>
                    <label>data da ocorrência</label>
                    <input type='date' className="date" />
                </div>

                <div className='descreva'>
                    <h1>descreva a situação:</h1>
                    <textarea  className="textarea"  placeholder='a denuncia...' />

                </div>

            </div>
        </main>
    );
}