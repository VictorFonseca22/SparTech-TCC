
import './index.scss'


const Categoria = (props) => {


  return (
    <main className='categoria'>
      
        <div>
          <img  alt="" >{props.img}</img>
          <h5>{props.nome}</h5>
        </div>
        
       
    </main>
    
  )
}

export default Categoria