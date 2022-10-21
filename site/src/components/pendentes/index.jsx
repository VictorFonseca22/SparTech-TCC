import { concluirServico } from '../../api/servico';
import './index.scss'


const Pendente = (props) => {

  return (
    <main className='pendente'>
      
        <div>
          <h4>{props.nome}</h4>
          <p className='tipo'>{props.tiposerv}</p>
          <p className='data'>{props.datalimite}</p>
          <h5>{props.localizacao}</h5>
         <a href={'https://wa.me/55' + props.telefone + '?text=Ol%C3%A1,%20sou%20seu%20profissional!%20Meu%20nome%20%C3%A9%20' 
         + props.profissional + '%20e%20estou%20te%20contatando%20para%20confirmar%20os%20detalhes%20do%20servi%C3%A7o'}><button>Chat</button></a>
        <button onClick={() => props.funcao(props.conclui)}> Concluir serviço</button>        
        </div>
       
    </main>
    
  )
}

export default Pendente