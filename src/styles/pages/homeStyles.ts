import styled from "styled-components"

export const BodyContainer = styled.div`
    width:100%; 
    background-color: ${(props)=>props.theme.background};

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

    .bodySuccess{
        .h2Success{
            font-family: 'Baloo 2', cursive;
            font-style: normal;
            font-weight: 800;
            font-size: 32px;
            line-height: 130%;
            color: ${(props)=>props.theme.yellowDark};
            margin-top:80px;
            display: block;
        }
        .spanSuccess{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 130%;
            color: ${(props)=>props.theme.baseSubtTitle};
            font-stretch: 100;
        }
        .divSuccessColumns{
            margin-top:30px;
            display:flex;
            flex-direction: row;
            flex-wrap: nowrap;
            .divLeftContainer{
                border-radius:6px 36px;
                padding:1px;
                background:linear-gradient(to bottom right, ${(props)=>props.theme.yellow}, ${(props)=>props.theme.purple});
                flex:1;
                margin:12px 0px;
                
                .divLeft{
                    height:100%;
                    width:100%;
                    background:white;
                    border-radius:6px 36px;
                    padding:24px 40px;
                }
            }
            .divRight{
                background:url(svg/success_page.svg) no-repeat;
                background-position: center center;
                flex:1;
                min-height: 293px;
                margin-left:102px;
                div .IconDescription{
                    font-size:16px;
                }                
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

