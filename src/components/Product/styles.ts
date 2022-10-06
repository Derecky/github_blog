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
        padding:0px 20px;
        text-align: center;
    }

    .PriceAndAddCartButton{
        margin:36px 20px 23px 20px;
        width:100%;
        display:flex;
        justify-content:space-between;
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
    width:fit-content;
    display:flex;
    flex-flow:nowrap;
`


export const MinusPlusButtonContainer = styled.div`

    display:flex;
    text-align:center;
    font-size: 16px;
    justify-content:space-around;
    gap:8px;
    padding: 0px 8px;
    align-items:center;
    transition: 1s; 
    margin-right:8px;
    border-radius:6px;
    background-color:${(props) => props.theme.baseButton};

    .quantity{
        display:flex;
        color:${(props) => props.theme.baseTitle};
        font-weight:normal;
        align-items:center;
        padding:0px;
        margin:0px;
        display:flex;
        display:inline-block;
        color:${(props) => props.theme.baseTitle};
        font-weight:normal;
        border:none;
        background:inherit;
        width:26px;
        text-align: center;
        -moz-appearance: textfield;
        ::-webkit-outer-spin-button,::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &:active, &:focus-visible, &:focus, &:focus-within,&:focus-visible,&:target,&:visited, &:valid{
            border:none;
            outline: 0cm;
        }
    }
    svg {
        margin:0px;
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
    padding:32px 0px;
    border-bottom: 1px solid ${(props) => props.theme.baseButton};
    display:flex;
    align-content:space-between;
    justify-content: space-between;
    
    .MinimalProductImg{
        width:64px;
        height:64px;
        margin-right: 20px;
    }
    .MinimalMain{
        display:flex;
        width:191px;
        flex-direction: column;
        height:fit-content;
        h2{ 
            color:${(props) => props.theme.baseSubtTitle};
            font-size:16px;
            margin-bottom:8px;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            line-height: 130%;
            text-align:left;
        }
        .MinimalButtons{
            display:flex;
            height: 32px;
            margin:0px;
            justify-content: left;
            align-items: center;
            text-align: left;
            
            .MinimalMinusPlusButton{
                text-align:left;
                display: flex;
                font-size: 16px;
                transition: 1s; 
                margin-right:8px;
                border-radius:6px;
                width:fit-content;
                padding:0px 8px;
                align-items: center;
                justify-content: center;
                height:100%;
                background-color:${(props) => props.theme.baseButton};

                .quantity{
                    align-items:center;
                    padding:0px;
                    margin:0px;
                    display:flex;
                    display:inline-block;
                    color:${(props) => props.theme.baseTitle};
                    font-weight:normal;
                    border:none;
                    background:inherit;
                    width:40px;
                    text-align: center;
                    -moz-appearance: textfield;
                    ::-webkit-outer-spin-button,::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }

                    &:active, &:focus-visible, &:focus, &:focus-within,&:focus-visible,&:target,&:visited, &:valid{
                        border:none;
                        outline: 0cm;
                    }
                }           

                svg{
                    color:${(props) => props.theme.purple};
                    cursor:pointer;
                }
                svg:hover{
                    color:${(props) => props.theme.purpleDark};
                }
            }
 
        }
    }
    .MinimalPrice{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        height:100%;
        width:120px;
        font-size:16px;
        color:${(props) => props.theme.baseSubtTitle};
        text-align: right;
    }
`
