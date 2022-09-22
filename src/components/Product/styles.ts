import styled from "styled-components"

export const ProductCardContainer = styled.div`
    display:flex;
    /*flex-direction:column; */
    position:relative;
    background-color:${(props)=>props.theme.baseCard};
    width:256px;
    margin:16px;
    margin-bottom:70px;
    border-radius:6px 36px;
    justify-content: center; 
    flex-wrap:wrap;
    align-items:flex-start;

    *{
        height:fit-content;
        vertical-align:middle;
        padding:0px;
        margin:0px;
    }

    img {
        width:120px; 
        height:120px; 
        position:absolute; 
        top:-20px;
        left:68px;
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
        padding:0px 20px;
    }

    .PriceAndAddCartButton{
        margin-top:36px;
        margin-bottom:23px;
        width:100%;
        display:flex;
        justify-content:space-around;
        vertical-align:middle;
        align-items:center;

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
                font-weight:bold;
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
`
export const ProductMinimalContainer = styled.div `
    display:flex;    
`
