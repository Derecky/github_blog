import styled from "styled-components"

interface IconFeaturesProps{
    color:string;
    distance:string;
}

export const IconFeaturesContainer = styled.div<IconFeaturesProps> `
    color: ${(props) => props.theme.baseText};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    margin:${(props) => props.distance};
    //margin:21px 0px; ou 10px 0px;

    .IconSpan{
        color:white;
        background-color: ${(props) => props.color};
        border-radius:50% 50%;
        height:32px;
        width:32px;
        line-height: 32px;
        min-width: 32px;
        text-align:center;
        display: inline-block;
        margin-right:12px;
        position:relative;
        vertical-align: middle;
        svg {
            position:absolute; 
            top:9px;
            left:9px;
            display:inline;
        }
    }    
    .IconDescription{
        font-size: 16px;
        line-height:130%;
    }    
`

export const BannerContainer = styled.div `
    margin-top:94px;
    height:fit-content;
    display:block;
    width:100%;
    position:relative;
    margin-bottom:52px;

    .BannerBackground{
        background: url("/svg/banner_background.svg") no-repeat;
        background-position: center center;
        background-size:100%;
        filter: blur(80px);
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
    }
    
    .DivBanner{
        display:flex;
        width:100%;
        
        .DivLeft{
            width:58%;
            padding-right:5%;
            h1{ margin-top:0px;
                font-size:48px;
                font-family:'Baloo 2', cursive;
                font-weight:800;
                color: ${(props) => props.theme.baseTitle};
                align-self: stretch;
                line-height:130%;
            }
            h2{
                margin-top:16px;
                font-weight: 400;
                font-size:20px;
                line-height:130%;
                font-family: 'Roboto', sans-serif;
                color: ${(props) => props.theme.baseSubtTitle};
            }
            .DivFeatures{
                margin-top:60px;
                div{min-width:48%;
                    max-width:52%;
                    display:inline-block;
                    line-height:32px;
                }                
            }
        }
        .DivRight{
            width:42%;
            text-align:right;
            
        }
    }
`
