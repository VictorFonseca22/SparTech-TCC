import './index.scss'

export default function Editar() {

    return (
        <main className='page-editar'>

            <h1>edição de perfil</h1>

            <div className='img'>

                <img src='/assets/images/pessoa.png' />

                <h4>alterar imagem</h4>

            </div>

            <div className='text'>
                <p>nome de perfil</p>

                <input type='text' maxLength={100} className="a" />
            </div>

            <div className='text'>
                <p>telefone</p>

                <input type="text" maxLength={20} className="a" />
            </div>

            <div className='text'>
                <p>áreas de atuação</p>

                <textarea type='text' maxLength={100} className="b" />
            </div>

            <div className='text'>
                <p>licenças e certificados</p>

                <textarea type='text' maxLength={300} className="b" />
            </div>

            <button>salvar</button>


        </main>
    );
}