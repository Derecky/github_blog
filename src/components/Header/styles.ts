import styled from "styled-components"

export const HoverCardCart = styled.button`
 *{
    transition: 0.2s; 
  }
  cursor: pointer;
  transition: 0.2s; 
  border: none;
  display: flex;
  border-radius:6px;
  justify-content:center;
  align-items:center;
  background:${(props) => props.theme.yellowLight};
  color:${(props) => props.theme.yellowDark};
  padding:8px 10.75px; 

  :disabled{filter: brightness(0.7);}

  .CartDivQtd{
      width:20px;
      height:20px; 
      background:${(props) => props.theme.yellowDark};
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
        gap:12px;
    }

`