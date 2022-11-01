import './index.scss'


const Estrelas = (props) => {

    return (
        <main className='estrelas-props'>
        <div>
            {props.avaliacao <= 1 &&
            <img src='/assets/images/estrela.png' />
            }
            {props.avaliacao <= 2 &&
            <div className>
            <img src='/assets/images/estrela.png' />
            <img src='/assets/images/estrela.png' />
            </div>
            }
            {props.avaliacao <= 3 &&
            <div>
            <img src='/assets/images/estrela.png' />
            <img src='/assets/images/estrela.png' />
            <img src='/assets/images/estrela.png' />
            </div>
            }
            {props.avaliacao <= 4 &&
            <div>
            <img src='/assets/images/estrela.png' />
            <img src='/assets/images/estrela.png' />
            <img src='/assets/images/estrela.png' />
            <img src='/assets/images/estrela.png' />
            </div>
            }
            {props.avaliacao <= 5 &&
            <div>
            <img src='/assets/images/estrela.png' />
            <img src='/assets/images/estrela.png' />
            <img src='/assets/images/estrela.png' />
            <img src='/assets/images/estrela.png' />
            <img src='/assets/images/estrela.png' />
            </div>
            }
        </div>
        </main>
    )
}

export default Estrelas