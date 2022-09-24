import styled from "styled-components"

export const BodyContainer = styled.div`
    width:100%; 
    height:100%;
    background-color: #fafafa;

    .Container{
        padding: 0;
        margin:0 auto;
        max-width: 1120px;
        display:flex;
        flex-direction: column;
    }    
    
    .bodyCheckout{
        display:flex; 
        flex-direction:row;
        .cartLeft{
            width:300px; 
            display:flex;
        }
        .cartDiv{
            width:448px;
            border-radius:6px;
            justify-content:center;
            align-items:center;
            display:flex;
            div {
                display:flex;
            }
        }
    }
`

export const main = styled.div`
    min-height: 100vh;
    max-width: 1120px;
    padding:0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:relative;
`

