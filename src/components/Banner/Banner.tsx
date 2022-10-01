import { IconContext} from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/theme';
import { IconFeatures } from './IconFeatures';
import { BannerContainer } from './styles'


export function Banner () {
    return (
        <BannerContainer>
            <div className='DivBanner'>
                <div className='BannerBackground'>a</div>
                <div className='DivLeft'>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                    <div className='DivFeatures'>
                    <IconContext.Provider
                            value={{
                                color: defaultTheme.white,
                                size: 15,
                                weight: "bold",
                                mirrored: false,
                            }}
                        >
                            <IconFeatures 
                                icon="ShoppingCart" 
                                color={ defaultTheme.yellowDark } 
                                description={['Compra Simples e Segura', '', '', '']}
                            />
                            <IconFeatures 
                                icon="Package" 
                                color={ defaultTheme.baseText } 
                                description={['Embalagem mantem o café intacto', '', '', '']} 
                            />
                            <IconFeatures 
                                icon="Timer" 
                                color={ defaultTheme.yellow } 
                                description={['Entrega rápida e rastreada', '', '', '']} 
                            />
                            <IconFeatures 
                                icon="Coffee" 
                                color={ defaultTheme.purple } 
                                description={['O café chega fresquinho até você', '', '', '']} 
                            />
                        </IconContext.Provider>
                    </div>
                </div>

                <div className='DivRight'>
                    <img src='png/banner_img.png'/>
                </div>                
            </div>    
        </BannerContainer>    )
} 