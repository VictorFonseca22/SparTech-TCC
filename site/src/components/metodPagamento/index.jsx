import { useRef } from 'react'
import { useState } from 'react'
import './index.scss'
import storage from 'local-storage'
import { useEffect } from 'react'
import PIX from "react-qrcode-pix";
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss'
import InputMask from 'react-input-mask'
import JsBarcode from 'jsbarcode'
const now = new Date().getTime().toString();
function Pagamento(props) {

    const valor = storage('serv-selecionado').preco
    const nome = storage('serv-selecionado').nome

    //Cartão de Crédito
    const [CCnome, setCCNome] = useState('')
    const [CCnumero, setCCNumero] = useState('')
    const [CCseg, setCCSeg] = useState()
    const [CCexp, setCCexp] = useState('')
    const [focus, setFocus] = useState('')



    //Integração do PayPal
    const [paid, setPaid] = useState(false)
    const [loaded, setLoaded] = useState(false)
    let paypalRef = useRef();

    const product = {
        price: valor,
        description: `Pagamento de serviço ao ${nome}`
    }

    useEffect(() => {
        const script = document.createElement("script")
        const id = "AarzKG32Ne41BYwZl3BRCJ__oASvPvXFR01AzyUHDLttevQIAUaWkmhrcUn5HaJHUlZLhB19FiC8U6V7"
        script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`

        script.addEventListener("load", () => setLoaded(true))
        document.body.appendChild(script)

        if (loaded) {
            function loadButtons() {
                setTimeout(() => {
                    window.paypal
                        .Buttons({
                            createOrder: (data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            description: product.description,
                                            amount: {
                                                currency_code: "BRL",
                                                value: product.price
                                            }

                                        }
                                    ]
                                });
                            },
                            onApprove: async (_, actions) => {
                                const order = await actions.order.capture();

                                setPaid(true)
                                console.log(order)
                            }
                        })
                        .render(paypalRef)
                })
            }
            loadButtons()
        }
    })
    //Pix
    const [finishedTimeout, setFinishedTimeout] = useState(false);
    useEffect(() => {
        if (props.pagt === 'pix') {
            setTimeout(() => {
                setFinishedTimeout(true)
            }, 2000)
        }
    }, [])

    //Gerar Boleto]
    
    const [array, setArray] = useState([])
    const [finishedTimeoutBoleto, setFinishedTimeoutBoleto] = useState(false);
    const [finishedBoleto, setFinishedBoleto] = useState(false);
    let barcode = document.getElementById("barcode");
    let arr = []

    function Gerar() {
        if(props.pagt == 'boleto') {
            for (let i = 1; i <= 48; i++) {
                let n = parseInt(Math.random() * 9)
                arr = [...arr, n]
            }
            setFinishedTimeoutBoleto(true)
            setTimeout(() => {
                setFinishedTimeoutBoleto(false)
                setFinishedBoleto(true)
                setArray(arr)
                JsBarcode("#barcode", arr)
            }, 2000)
            storage('validado', 'ok')
        }
    }
    
    function ValidarPagCartao() {
        
        if(CCnome != '' && 
           CCexp != '' && 
           CCseg != '' && 
           CCnumero != '') {
            storage('validado', 'ok')
        }
        else{
            storage.remove('validado')
        }
    }

    useEffect(() => {
    if(props.pagt === 'cartao') {
        ValidarPagCartao()
    }
    }, [CCnome, CCexp, CCnumero, CCseg])
    


    useEffect(() => {
        if(props.pagt === 'paypal') {
            storage('validado', 'ok')
        }
        if(props.pagt === 'boleto') {
            storage('validado', 'ok')
        }
        if(props.pagt === 'pix') {
            storage('validado', 'ok')
        }
    }, [])





    return (
        <main className='pag-props'>

            {props.pagt === 'cartao' &&
                <div className='cartao-valid'>
                    <Cards
                        number={CCnumero}
                        name={CCnome}
                        cvc={CCseg}
                        expiry={CCexp}
                        focused={focus}
                    />
                    <div className='input-cartao'>
                        <label>
                            <p>Número do Cartão</p>
                            <InputMask type='text' value={CCnumero} onFocus={e => setFocus(e.target.name)} onChange={e => setCCNumero(Number(e.target.value))} />
                        </label>
                        <label>
                            <p>Nome no Cartão</p>
                            <input type='text' value={CCnome} onFocus={e => setFocus(e.target.name)} onChange={e => setCCNome(e.target.value)} />
                        </label>
                        <label>
                            <p>CVV</p>
                            <InputMask mask='999' name="cvc" type='text' value={CCseg} onFocus={e => setFocus(e.target.name)} onChange={e => setCCSeg(e.target.value)} />
                        </label>
                        <label>
                            <p>Data de vencimento</p>
                            <InputMask mask='99/99' type='text' value={CCexp} onFocus={e => setFocus(e.target.name)} onChange={e => setCCexp(e.target.value)} />
                        </label>
                    </div>

                </div>
            }

            {props.pagt === 'paypal' &&
                <div>
                    {paid ? (
                        <div>
                            <h1>Sua compra foi confirmada! Clique em Confirmar Pagamento</h1>
                        </div>
                    ) : (
                        <>
                            <h1>{product.description}</h1>
                            <div className='bot-paypal' ref={e => (paypalRef = e)} />
                        </>

                    )}
                </div>
            }

            {props.pagt === 'pix' &&
                <div>
                    {finishedTimeout === false &&
                        <div className='align-pix-gif'>
                            <h1>Um momento, estamos gerando seu Código QR...</h1>
                            <img className='img-gif' src="/assets/images/gif-loading.gif" alt="" />
                        </div>
                    }
                    {finishedTimeout === true &&
                        <div className='pix-align'>
                            <div className='text-pix'>
                                <h1>Pagamento por PIX</h1>
                                <p>1° Abra o aplicativo do seu Banco</p>
                                <p>2° Vá na Aba "Pix"</p>
                                <p>3° Escaneie o código abaixo</p>
                            </div>
                            <PIX
                                pixkey="victor.fonseca0@gmail.com"
                                merchant="Victor Martins Fonseca"
                                city="São Paulo"
                                cep="04806-020"
                                code={"RQP" + now}
                                amount={Number(valor)}

                                resize={300}
                                variant="fluid"
                                padding={30}
                                color={{
                                    eyes: '#3498db',
                                    body: '#357'
                                }}
                                bgColor="#def"
                                bgRounded
                                divider
                            />
                        </div>
                    }

                </div>
            }

            {props.pagt === 'boleto' &&

                <div className='boleto-div'>
                    {finishedTimeoutBoleto == false &&
                        <div className='carregando-boleto'>
                            <p>Clique no botão abaixo para gerar seu boleto</p>
                            <button onClick={Gerar}>Gerar Boleto</button>
                        </div>

                    }
                    {finishedTimeoutBoleto == true &&
                        <div className='carregando-boleto'>
                            <p>Um momento, estamos gerando seu boleto...</p>
                            <img className='img-gif' src='/assets/images/gif-loading.gif' />
                        </div>

                    }
                    {finishedBoleto == true &&
                        <div className='codigo-boleto'>
                            <p>Boleto gerado!</p>
                            <p>Valor: R${storage('serv-selecionado').preco}</p>
                            <div className='array'>
                            {array}
                            </div>
                            <img id='barcode' />
                        </div>
                    }
                </div>
            }
        </main>
    )

}


export default Pagamento