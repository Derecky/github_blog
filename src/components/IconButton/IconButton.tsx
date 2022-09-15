import {MapPin,MapPinLine,Trash,CurrencyDollar,ShoppingCart, Timer,Package,Coffee,Plus,Minus,CreditCard,Money, Bank} from "phosphor-react";
import { defaultTheme, defaultThemeInterface } from "../../styles/themes/theme";
import { IconButtonContainer } from './styles'

interface IconButtonProps {
    icon: string,
    size?: number,
    background?: string,
    backgroundHover?: string,
    color?: string,
    colorHover?: string,
    colorIcon?: string,
    colorIconHover?: string,    
    text?: string,
    clickFunction: ()=>void,
}

//Para o Eraldo, que está fazendo o card de Produto:
// Para chamar o IconButton, você pode fazer <IconButton color='white' background='purpleDark' backgroundHover='purple' icon="ShoppingCart" size={[TAMANHO QUE VOCÊ QUISER]} funcao={ ()=> [FUNÇÃO QUE COLOCA O PRODUTO NO CARRINHO] } />

// Para aquele que irá fazer o botão de remover, você pode fazer <IconButton icon="Trash" size={32} clickFunction={ ()=> alert('b') } color='baseTitle' colorIcon="purple" colorIconHover="purpleDark" colorHover='baseSubTitle' background='baseButton' backgroundHover='baseHover' text="REMOVER"/>

export function IconButton ({icon, size=20, background = "purpleDark", backgroundHover = "purple", color = "white",colorHover, colorIcon,colorIconHover,  text="", clickFunction} : IconButtonProps) {
    const colorC=defaultTheme[color as keyof defaultThemeInterface];
    const backgroundC=defaultTheme[background as keyof defaultThemeInterface];
    const backgroundHoverC=backgroundHover?defaultTheme[backgroundHover as keyof defaultThemeInterface]:defaultTheme[background as keyof defaultThemeInterface];
    const colorHoverC=colorHover?defaultTheme[colorHover as keyof defaultThemeInterface]:defaultTheme[color as keyof defaultThemeInterface];
    const colorIconC=colorIcon?defaultTheme[colorIcon as keyof defaultThemeInterface]:defaultTheme[color as keyof defaultThemeInterface];
    const colorIconHoverC=colorIconHover?defaultTheme[colorIconHover as keyof defaultThemeInterface]:defaultTheme[colorIcon as keyof defaultThemeInterface];        

    interface IconTypesInterface {
        MapPin           :JSX.Element,
        MapPinLine       :JSX.Element,
        Trash            :JSX.Element,
        CurrencyDollar   :JSX.Element,
        ShoppingCart     :JSX.Element,
        Timer            :JSX.Element,
        Package          :JSX.Element,
        Coffee           :JSX.Element,
        Plus             :JSX.Element,
        Minus            :JSX.Element,
        CreditCard       :JSX.Element,
        Money            :JSX.Element,
        Bank             :JSX.Element
    }
    
    const IconTypes: IconTypesInterface = {
        MapPin           : <MapPin size={ size } weight="fill" color={ colorIconC } />,
        MapPinLine       : <MapPinLine size={ size }  color={ colorIconC } />,
        Trash            : <Trash size={ size } color={ colorIconC } />,
        CurrencyDollar   : <CurrencyDollar size={ size } color={ colorIconC }/>,
        ShoppingCart     : <ShoppingCart size={ size }  weight="fill" color={ colorIconC } />,
        Timer            : <Timer size={ size }   weight="fill" color={ colorIconC } />,
        Package          : <Package size={ size }  weight="fill" color={ colorIconC } />,
        Coffee           : <Coffee size={ size }  weight="fill" color={ colorIconC } />,
        Plus             : <Plus size={ size }  weight="fill" color={ colorIconC } />,
        Minus            : <Minus size={ size }  weight="fill" color={ colorIconC } />,
        CreditCard       : <CreditCard size={ size } color={ colorIconC } />,
        Money            : <Money size={ size } color={ colorIconC } />,
        Bank             : <Bank size={ size } color={ colorIconC } />     
    }
    
    return (
        <IconButtonContainer 
            color={ colorC } 
            colorHover = { colorHoverC }
            background={ backgroundC }
            backgroundHover={ backgroundHoverC } 
            colorIconHover={ colorIconHoverC }
            onClick={ clickFunction }>{ IconTypes[icon as keyof IconTypesInterface] } 
            { text?(<span>{ text }</span>):"" }            
        </IconButtonContainer>
        
    )
}

