import {MapPin,MapPinLine,Trash,CurrencyDollar,ShoppingCart, Timer,Package,Coffee,Plus,Minus,CreditCard,Money, Bank} from "phosphor-react";
import { defaultTheme, defaultThemeInterface } from "../../styles/themes/theme";
import { IconButtonContainer } from './styles'

interface IconButtonProps {
    icon: string,
    size?: number,
    backgroundColor?: string,
    color?: string,
    funcao: ()=>void,
}

//Para o Eraldo, que está fazendo o card de Produto:
// Para chamar o IconButton, você pode fazer <IconButton icon="ShoppingCart" size={[TAMANHO QUE VOCÊ QUISER]} funcao={ ()=> [FUNÇÃO QUE COLOCA O PRODUTO NO CARRINHO] } />

export function IconButton ({icon, size=20, backgroundColor = "purple", color = defaultTheme.white, funcao} : IconButtonProps) {

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
        MapPin           : <MapPin size={ size } weight="fill" />,
        MapPinLine       : <MapPinLine size={ size }  />,
        Trash            : <Trash size={ size } />,
        CurrencyDollar   : <CurrencyDollar size={ size }/>,
        ShoppingCart     : <ShoppingCart size={ size }  weight="fill" />,
        Timer            : <Timer size={ size }   weight="fill" />,
        Package          : <Package size={ size }  weight="fill" />,
        Coffee           : <Coffee size={ size }  weight="fill" />,
        Plus             : <Plus size={ size }  weight="fill" />,
        Minus            : <Minus size={ size }  weight="fill" />,
        CreditCard       : <CreditCard size={ size } />,
        Money            : <Money size={ size } />,
        Bank             : <Bank size={ size } />     
    }

    
    return (
        <IconButtonContainer 
            color={ color } 
            backgroundColorDark={ defaultTheme[backgroundColor+'Dark' as keyof defaultThemeInterface] } 
            backgroundColorLight={ defaultTheme[backgroundColor as keyof defaultThemeInterface] } 
            onClick={ funcao }>{ IconTypes[icon as keyof IconTypesInterface] }</IconButtonContainer>
        
    )
}

