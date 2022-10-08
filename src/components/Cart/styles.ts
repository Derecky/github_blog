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
                padding:16px 40px 40px 40px;
        } 
        .CartTotal{
                display: flex;
                font-family: 'Roboto', sans-serif;
                flex-wrap: wrap;
                margin-top: 25px;
                div{
                        width:368px;
                        text-align: right;
                        flex-direction:row;
                        align-content: space-between;
                        justify-content: space-between;
                        color:${(props) => props.theme.baseText}; 
                        font-size: 16px;
                        margin-bottom:12px;
                        span {
                                color:${(props) => props.theme.baseText}; 
                                font-size:14px;
                                text-align: left;
                                float:left;
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
                        border-radius:6px;
                        padding:12px;
                        border:none;
                        font-weight: 700;
                        text-align: center;
                        font-size: 14px;
                        line-height: 160%;
                        margin-top:10px;
                        color:white;
                        transition-duration: 500ms;

                        &:active, &:focus-visible, &:focus, &:focus-within,&:focus-visible,&:target,&:visited{
                                border:none;
                                outline: 0cm;
                        }
                        &:hover{
                                background-color:${(props) => props.theme.yellowDark}; 
                        }
                }
        }
`