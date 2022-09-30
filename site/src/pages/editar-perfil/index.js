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
                <p>nome de perfil:</p>

                <input type='text' />
            </div>

            <div className='text'>
                <p>telefone:</p>

                <input type="text" />
            </div>

            <div className='text'>
                <p>áreas de atuação:</p>

                <input type='text' />
            </div>

            <div className='text'>
                <p>licenças e certificados</p>

                <input type='text' />
            </div>

            <button>salvar</button>


        </main>
    );
}