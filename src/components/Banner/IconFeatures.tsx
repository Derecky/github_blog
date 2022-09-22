import { ShoppingCart, Package,Timer,Coffee } from 'phosphor-react';
import { IconFeaturesContainer } from './styles';
import { IconTypes } from "../../models/icon";



interface IconFeaturesProps {
    icon:string,
    color:string,
    description:string
}

export function IconFeatures ({icon,color,description}: IconFeaturesProps) {
    
    const iconTypesFeatures: IconTypes = {
        ShoppingCart     : <ShoppingCart />,
        Timer            : <Timer />,
        Package          : <Package />,
        Coffee           : <Coffee />
    }

    return(
        <IconFeaturesContainer color={ color }>
            <span className='IconSpan'>
                { iconTypesFeatures[icon as keyof IconTypes] } 
            </span>
            { description }
        </IconFeaturesContainer>
    )
}