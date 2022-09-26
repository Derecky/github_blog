import styled from "styled-components"

export const MainPageContainer = styled.div `
    display:flex; 
    justify-content: left;
    flex-flow: row wrap;
    align-content:space-between;

    .ProductGroupTitle{
        margin-top:70px;
        font-family:'Baloo 2', cursive;
        display:block;
        font-size:32px;
        font-weight: 800;
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
