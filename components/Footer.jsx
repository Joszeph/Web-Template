import styled from 'styled-components'

const FooterSection = styled.footer`
height: 50px;
width: 100%;
background-color: rgb(25, 60, 105);
color: white;
display: flex;
flex-direction: column;
align-content:center;
text-align: center;
`

const Footer = () =>{

    return(
        <FooterSection>
            <p>Copyright Template Items 2021</p>
        </FooterSection>
    )
}

export default Footer