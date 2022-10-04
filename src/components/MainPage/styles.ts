import styled from "styled-components"

export const MainPageContainer = styled.div `
    display:flex; 
    justify-content: left;
    flex-flow: row wrap;
    align-content:space-between;

    .ProductGroupTitle{
        font-family:'Baloo 2', cursive;
        display:block;
        font-size:32px;
        width:100%;
        color:${(props)=>props.theme.baseSubtTitle};
    }

    .ProductGroup{
        width:100%;
        margin-top:30px;
        display:grid;
        grid-template-columns: repeat(auto-fill, 256px);
        flex-flow: row wrap;
        justify-content:space-between;
    }
`
