import type { NextPage } from 'next'
import { IconContext } from 'phosphor-react'
import React, { useState } from 'react'
import { IconFeatures } from '../components/Banner/IconFeatures'
import { Header } from '../components/Header'
import { mockedCurrentCity, mockedCurrentStateCode } from '../components/Header/Mock'
import { CartProduct } from '../models/Cart'
import { ClientData } from '../models/ClientData'
import { BodyContainer } from '../styles/pages/homeStyles'
import { defaultTheme } from '../styles/themes/theme'

const Home: NextPage = () => {
  
  const [currentClientData] = useState({postalCode:'',street:'',houseNumber:'',complement:'',district:'',city:mockedCurrentCity,stateAbbreviation:mockedCurrentStateCode} as ClientData);
  
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
                                    currentClientData.street+', '+currentClientData.houseNumber,
                                    currentClientData.complement+' - '+currentClientData.city+','+currentClientData.stateAbbreviation,
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
                                    '','xxxx modo de pagamento']}
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

export default Home
