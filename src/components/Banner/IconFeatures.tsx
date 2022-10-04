import { iconTypes, IconTypesInterface } from "../../models/Icon";
import { IconFeaturesContainer } from './styles';



interface IconFeaturesProps {
    icon:string,
    color:string,
    description:string
}

export function IconFeatures ({icon,color,description}: IconFeaturesProps) {
    return(
        <IconFeaturesContainer color={ color }>
            <span className='IconSpan'>
                { iconTypes[icon as keyof IconTypesInterface] } 
            </span>
            { description }
        </IconFeaturesContainer>
    )
}