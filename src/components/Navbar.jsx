import styled from "styled-components"

function Navbar(){
    let title = "My Landing Page"

    let TextHeader = styled.h2`
        color: wheat;
        background-color: aqua;
        padding: 50px;
        margin: 0;
    `

    return(
        <>
            <div>
                <TextHeader>{title}</TextHeader>
            </div>
        </>
    )
}

export default Navbar