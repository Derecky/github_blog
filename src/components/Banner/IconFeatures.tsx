import { iconTypes, IconTypesInterface } from "../../models/Icon";
import { IconFeaturesContainer } from './styles';

export interface IconFeaturesProps {
    icon:string,
    color:string,
    description:string[],
    distance?:string,
}

export function IconFeatures ({icon,color,description, distance = "10px 0px"}: IconFeaturesProps) {
    return(
        <IconFeaturesContainer color={ color } distance={ distance }>
            <span className='IconSpan'>
                { iconTypes[icon as keyof IconTypesInterface] } 
            </span>
            <span className="IconDescription" >
                { description[0] }<strong>{ description[1] }</strong><br/>
                { description[2] }<strong>{ description[3] }</strong>
            </span>
        </IconFeaturesContainer>
    )
}