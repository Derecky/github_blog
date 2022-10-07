import type { NextPage } from 'next'
import { IconContext } from 'phosphor-react'
import React from 'react'
import { IconFeatures } from '../components/Banner/IconFeatures'
import { Header } from '../components/Header'
import { CartProduct } from '../models/Cart'
import { BodyContainer } from '../styles/pages/homeStyles'
import { defaultTheme } from '../styles/themes/theme'
import { useRouter } from 'next/router'
import { Error } from '../components/Error'

interface paymentInterface {
  credit: string,
  debit: string,
  money: string
}

const Home: NextPage = () => {
  const router=useRouter();  
  const payment : paymentInterface ={
    credit:"Cartão de Crédito",
    debit:"Cartão de Débito",
    money:"Dinheiro"
  };

  if (JSON.stringify(router.query)=="{}"){
    return(
      <BodyContainer>
      <main>
        <div className="Container">
          <Header currentCart = { [] as CartProduct[] } AddToCart = { () =>{return false;} } />
          <Error />
        </div>
      </main>
    </BodyContainer>
    );
  }
  else {
  const quotemarksCorrectionPayment = JSON.stringify(router.query.paymentType).replace(/[\\"]/g, '');
  const paymentDescription= payment[quotemarksCorrectionPayment as keyof paymentInterface];

  return (
    <BodyContainer>
      <main>
        <div className="Container">
          <Header currentCart = { [] as CartProduct[] } AddToCart = { () =>{return false;} } />
          <div className='bodySuccess'>
            <h2 className='h2Success'>Uhu! Pedido confirmado!</h2>
            <span className='spanSuccess'>Agora é só aguardar que logo o café chegará até você </span>
            <div className='divSuccessColumns'>
                <div className='divLeftContainer'>
                    <div className='divLeft'>
                    <IconContext.Provider
                            value={{
                                color: defaultTheme.white,
                                size: 15,
                                weight: "bold",
                                mirrored: false,
                            }}
                        >
                            <IconFeatures 
                                icon="MapPin" 
                                color={ defaultTheme.purple } 
                                description={[
                                    'Entrega em ', 
                                    router.query.street+', '+router.query.houseNumber,
                                    router.query.district+(router.query.complement?', '+router.query.complement:"")+' - '+router.query.city+','+router.query.stateAbbreviation,
                                    '']}
                                distance="21px 0px"    
                            />
                            <IconFeatures 
                                icon="Timer" 
                                color={ defaultTheme.yellow } 
                                description={[
                                    'Previsão de entrega','', 
                                    '','xxxx horas e yyy minutos']}
                                distance="21px 0px"    
                            />
                            <IconFeatures 
                                icon="CurrencyDollar" 
                                color={ defaultTheme.yellowDark } 
                                description={[
                                    'Pagamento na entrega','', 
                                    '',paymentDescription]}
                                distance="21px 0px"    
                            />              
                        </IconContext.Provider>    
                    </div>
                </div>
                <div className='divRight'>
                </div>
            </div>
          </div>    
        </div>
      </main>
    </BodyContainer>
  )
}
}

export default Home
