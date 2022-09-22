import { IconContext} from "phosphor-react";
import { defaultTheme, defaultThemeInterface } from "../../styles/themes/theme";
import { iconTypes, IconTypesInterface } from "../../models/icon";
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

export function IconButton ({icon, size=20, background = "purpleDark", backgroundHover = "purple", color = "white",colorHover, colorIcon,colorIconHover,  text="", clickFunction} : IconButtonProps) {
    const colorC=defaultTheme[color as keyof defaultThemeInterface];
    const backgroundC=defaultTheme[background as keyof defaultThemeInterface];
    const backgroundHoverC=backgroundHover?defaultTheme[backgroundHover as keyof defaultThemeInterface]:defaultTheme[background as keyof defaultThemeInterface];
    const colorHoverC=colorHover?defaultTheme[colorHover as keyof defaultThemeInterface]:defaultTheme[color as keyof defaultThemeInterface];
    const colorIconC=colorIcon?defaultTheme[colorIcon as keyof defaultThemeInterface]:defaultTheme[color as keyof defaultThemeInterface];
    const colorIconHoverC=colorIconHover?defaultTheme[colorIconHover as keyof defaultThemeInterface]:defaultTheme[colorIcon as keyof defaultThemeInterface];        
    
    return (
        <IconButtonContainer 
            color={ colorC } 
            colorHover = { colorHoverC }
            background={ backgroundC }
            backgroundHover={ backgroundHoverC } 
            colorIconHover={ colorIconHoverC }
            onClick={ clickFunction }>
                <IconContext.Provider value={{size:size, color:colorIconC}} >
                    { iconTypes[icon as keyof IconTypesInterface] } 
                </IconContext.Provider>     
                    { text?(<span>{ text }</span>):"" }       
        </IconButtonContainer>
        
    )
}

