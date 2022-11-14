import { useRef } from 'react'
import { useState } from 'react'
import './index.scss'
import storage from 'local-storage'
import { useEffect } from 'react'
import PIX from "react-qrcode-pix";
const now = new Date().getTime().toString();
function Pagamento(props) {
    const [paid, setPaid] = useState(false)
    const [loaded, setLoaded] = useState(false)
    



    let paypalRef = useRef();

    const valor = storage('serv-selecionado').preco
    const nome = storage('serv-selecionado').nome

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
            loadButtons();
        }
    })



    return (
        <main className='pag-props'>

            {props.pagt === 'cartao' &&
                <div>
                    <label>
                        <p>Número do Cartão</p>
                        <input type='text' />
                    </label>

                </div>
            }

            {props.pagt === 'paypal' &&
                <div>
                    {paid ? (
                        <div>
                            <h1>Sua compra foi confirmada! Clique em Já Paguei</h1>
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
        </main>
    )
        
}


export default Pagamento