import styled from "styled-components"

export const ProductCardContainer = styled.div`
    display:flex;
    position:relative;
    background-color:${(props)=>props.theme.baseCard};
    width:248px;
    margin-bottom:50px;
    border-radius:6px 36px;
    justify-content: center; 
    flex-wrap:wrap;
    align-items:flex-start;

    *{
        height:fit-content;
        vertical-align:middle;
        transition: 1s; 
    }

    img {
        width:120px; 
        height:120px; 
        position:absolute; 
        top:-20px;
        left:68px;
        -webkit-user-select: none;
        -moz-user-select: -moz-none;
        -ms-user-select: none;
        user-select: none;
    }


    h2 {font-weight:bold;
        color:${(props) => props.theme.baseSubtTitle};
        font-size:20px;
        margin-top:20px; 
        width:100%;
        text-align:center;
        flex-flow: row wrap;    
        line-height:26px;
    }

    .tags {
        display:flex; 
        margin-top: 112px;
        -webkit-user-select: none;
        -moz-user-select: -moz-none;
        -ms-user-select: none;
        user-select: none;
    }

    .tags span{
        display:flex;
        padding:4px 8px;
        margin:0px 2px;
        border-radius:100px;
        font-size: 10px;
        background-color:${(props) => props.theme.yellowLight};
        color:${(props) => props.theme.yellowDark};
        font-weight:bold; 
    }

    .description{
        color: ${(props) => props.theme.baseLabel};
        font-size:14px;
        font-weight:normal;
        display:block;
        margin-top:8px;
        padding:0px 15px;
        text-align: center;
    }

    .PriceAndAddCartButton{
        margin-top:36px;
        margin-bottom:23px;
        width:100%;
        display:flex;
        justify-content:space-around;
        vertical-align:middle;
        align-items:center;
        height:38px;
        div{height:100%;}

        .price{
            font-size:14px;
            font-family: 'Roboto', sans-serif;
            font-weight:normal;
            color:${(props) => props.theme.baseText};

            span{
                font-size:24px;
                font-family: 'Baloo 2', cursive;
                display:inline-block;
                padding-left:3px;
                font-weight:800;
                vertical-align:baseline;
                
            }
        }
    }
`
export const AddCartButtonContainer = styled.div`
    width:120px;
    display:flex;
    flex-flow:nowrap; 
`


export const MinusPlusButtonContainer = styled.div`

    display:flex;
    text-align:center;
    font-size: 16px;
    justify-content:center;
    align-items:center;
    transition: 1s; 
    margin-right:8px;
    padding:6px;
    border-radius:6px;
    background-color:${(props) => props.theme.baseButton};

    div {
        display:flex;
        color:${(props) => props.theme.baseTitle};
        font-weight:normal;
    }
    svg {
        margin:8px;
        color:${(props) => props.theme.purple};
        cursor:pointer;
    }
    svg:hover{
        color:${(props) => props.theme.purpleDark};
    }
`
export const ProductMinimalContainer = styled.div `
    width:100%;
    background:${(props) => props.theme.baseCard};
    padding:14px;
    border-bottom: 1px solid ${(props) => props.theme.baseButton};
    display:flex;
    align-content:space-between;
    justify-content: space-between;
    
    .MinimalProductImg{
        width:64px;
        height:64px;
    }
    .MinimalMain{
        width:171px;
        flex-direction: column;
        h2{
            color:${(props) => props.theme.baseSubtTitle};
            font-size:16px;
            margin:0px;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            line-height: 130%;
        }
        .MinimalButtons{
            flex-direction: row;
            height: 32px;
            justify-content:center;
            align-items:stretch;
            div {
                align-items:center;
                padding:8px;
            }
        }
    }
    .MinimalPrice{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        line-height: 130%;
        font-size:16px;
        color:${(props) => props.theme.baseSubtTitle};
    }
    .MinimalMinusPlusButton{
        display:flex;
        text-align:center;
        font-size: 16px;
        transition: 1s; 
        margin-right:8px;
        border-radius:6px;
        padding:8px;
        background-color:${(props) => props.theme.baseButton};
        div{
            display:flex;
            color:${(props) => props.theme.baseTitle};
            font-weight:normal;           
        }        
        svg{
            color:${(props) => props.theme.purple};
            cursor:pointer;
        }
        svg:hover{
            color:${(props) => props.theme.purpleDark};
        }
    }
`
