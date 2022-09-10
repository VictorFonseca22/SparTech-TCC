
import './index.scss'

const Categoria = (props) => {
  
  return (
    <main className='categoria'>
        <div>
          {props.img}
          <h5>{props.nome}</h5>
        </div>
        
       
    </main>
    
  )
}

export default Categoria