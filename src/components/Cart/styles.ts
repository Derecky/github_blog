import styled from "styled-components"

export const CartContainer = styled.div`
        .CartDiv{
                font-family: 'Roboto', sans-serif;
                position:relative;
                background:${(props) => props.theme.baseCard};
                height:fit-content; 
                border-radius:6px 44px; 
                text-align: center; 
                color:${(props) => props.theme.baseSubtTitle}; 
                flex-wrap: wrap;
                width:448px;
                padding:40px;
                gap: 24px;
        } 
        .CartTotal{
                font-family: 'Roboto', sans-serif;
                width:448px;
                flex-wrap: wrap;
                .CartTotalRow{
                        width:100%;
                        flex-direction:row;
                        align-content: space-between;
                        justify-content: space-between;
                        color:${(props) => props.theme.baseText}; 
                        font-size: 16px;
                        margin-bottom:12px;
                        span {
                                color:${(props) => props.theme.baseText}; 
                                font-size:14px;
                                display:inline-block;
                                text-align: left;
                        }
                }
                .Total,.Total span{
                        font-size:20px;
                        font-weight: 700;
                        color:${(props) => props.theme.baseSubtTitle}; 
                }
                .CartTotalButton{
                        cursor:pointer;
                        width:100%;
                        background-color:${(props) => props.theme.yellow}; 
                        color:white;
                        border-radius:6px;
                        padding:12px;
                        font-weight: 700;
                        text-align: center;
                }
        }
`