import styled from "styled-components"

export const HoverCardCart = styled.a`
 *{
    transition: 0.2s; 
  }

  cursor: pointer;
  display: flex;
  border-radius:6px;
  justify-content:center;
  align-items:center;
  background:#F1E9C9; 
  color:#C47F17; 
  padding:8px 10.75px;

  .CartDivQtd{
      width:20px;
      height:20px; 
      background:#C47F17; 
      color:white; 
      font-weight: bold; 
      font-size: 12px; 
      border-radius:50%;
      text-align: center; 
      line-height:20px; 
      position:absolute; 
      top:-8px;
      right:-8px;
      display:inline-block; 
  }

`;


export const DivHeaderContainer = styled.div`
    padding:32px 0px;
    text-align:justify; 
    width:100%;
    max-width:1120px; 
    position:relative;
    display: flex; 
    justify-content: space-between;  
    min-width:800px; 
    
    *{
        transition: 1s; 
        position:relative;  
        vertical-align: middle; 
        display:flex; 
        justify-content: space-between;
    }
    .logo{
        background-image:url("/svg/logo.svg"); 
        background-repeat: no-repeat;
        height:40px; 
        width:87px;
        display: block; 
        margin-right: 10px;
    }
    .div_header_direita{
        display: flex; 
        justify-content: flex-end; 
        min-width:400px;
        height: 38px;

        .div_local{
            border-radius:6px;
            justify-content:center;
            align-items:center; 
            padding:0px 0.6em; 
            font-size:14px;
            background:#EBE5F9;
            color:#4B2995; 
            font-family: 'Roboto', sans-serif; 
            margin-right:12px;

            select{
                background:#EBE5F9;
                color:#4B2995; 
                font-family: 'Roboto', sans-serif; 
                display:inline-block;
                border:0px; 
                border-radius: 6px;
            }
        }
        .button_carrinho{
            border-radius:6px;
            justify-content:center;
            align-items:center;
            background:#F1E9C9; 
            color:#C47F17; 
            padding:8px 10.75px;
            svg{
                cursor:pointer;
            }

            .CartDivQtd{
                width:20px;
                height:20px; 
                background:#C47F17; 
                color:white; 
                font-weight: bold; 
                font-size: 12px; 
                border-radius:10px;
                text-align: center; 
                line-height:20px; 
                position:absolute; 
                top:-8px;
                right:-8px;
                display:inline-block; 
            }

            .CartDiv{
                display:none;
                right:-50px; 
                top:16px; 
                position:absolute; 
                opacity:0.9;
                z-index: 9;
            }

            &:hover .CartDiv{
                display:flex;
            }
        }
    }

`