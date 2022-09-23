import './index.scss'

const CardProf = (props) => {

    return (
        <main className='CardProf'>

            <img className="img" src={props.img} />
                <div className='info'>
            
                <h5 className="nome">{props.nome}</h5>
                <h4 className="nome">{props.nome}</h4>
                <div className='avaliacao'>{props.estrelas}{props.avaliacao}</div>
                <h4 className='realizado'>{props.servrealizado}</h4>
                <div className='destaque'>{props.destaque}</div>

                </div>

        </main>
    );


}

export default CardProf