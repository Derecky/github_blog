import type { NextPage } from 'next'
import { IconContext } from 'phosphor-react'
import React, { useState } from 'react'
import { IconFeatures,IconFeaturesProps } from '../components/Banner/IconFeatures'
import { Header } from '../components/Header'
import {  MOCK_CART} from '../components/Header/Mock'
import { CartProduct } from '../models/Cart'
import { BodyContainer } from '../styles/pages/homeStyles'
import { defaultTheme } from '../styles/themes/theme'

const Home: NextPage = () => {
  //const [currentCart, setCurrentCart] = useState(MOCK_CART as CartProduct[]);
 
  return (
    <BodyContainer>
      <main>
        <div className="Container">
          <Header currentCart = { [] as CartProduct[] } AddToCart = { () =>{return false;} } />
          <div className='bodySuccess'>
            <h2 className='h2Success'>Uhu! Pedido confirmado!</h2>
            <span className='spanSuccess'>Agora é só aguardar que logo o café chegará até você</span>
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
                                    'Rua João Daniel Martinelli, 12',
                                    'Farrapos - Porto Alegre, RS','']}
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
                                    '','xxxx modo de pagamento']}
                                distance="21px 0px"    
                            />              
                        </IconContext.Provider>    
                    </div>
                </div>
                <div className='divRight'></div>
            </div>
          </div>    
        </div>
      </main>
    </BodyContainer>
  )
}

export default Home
