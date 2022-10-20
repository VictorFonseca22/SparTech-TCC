
import './index.scss'


const Pendente = (props) => {


  return (
    <main className='pendente'>
      
        <div>
          <h4>{props.nome}</h4>
          <p className='tipo'>{props.tiposerv}</p>
          <p className='data'>{props.datalimite}</p>
          <h5>{props.localizacao}</h5>
          <button onClick={''}>Chat</button>
        </div>
        
       
    </main>
    
  )
}

export default Pendente