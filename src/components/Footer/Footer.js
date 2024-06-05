import React from 'react'
import styled from 'styled-components';
import { FaInstagram, FaLinkedin,FaTwitter } from "react-icons/fa";

const Container = styled.div`
color:${({ theme }) => theme.primary};
font-size:15px;
margin-top:80px;

`;
const Name = styled.div`
font-size:16px;
font-weight:600;
text-align:center;
margin-bottom:30px;
`;
const UL = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:17px;
margin-bottom:30px;
`;
const LI = styled.a`
color:${({ theme }) => theme.text_primary};
text-decoration:none;
font-size:17px;
font-weight:500;
text-align:center;

&:hover{
    transition: all 0.4s ease-in-out;
    font-size:18px;
    transform: translateY(-5px);

}
`;
const Social = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:15px;
font-size:28px;
color:${({ theme }) => theme.text_primary};
margin-bottom:30px;
`;
const Link = styled.a`
  color: white;
  &:hover {
    transition: all 0.4s ease-in-out;
    transform: translateY(-5px);
  }
`;


export const Footer = () => {
    return (
        <Container>
            <Name>SIVA MUTHU NARAYANAN</Name>
            <UL>
                <LI href='#about'>     About     </LI>
                <LI href='#skills'>    Skills    </LI>
                <LI href='#Experience'>Experience</LI>
                <LI href='#Project'>   Projects  </LI>
                <LI href='#Education'> Education </LI>
            </UL>
            <Social>
                <Link href='https://www.instagram.com/sivaganesz/'><FaInstagram /></Link>
                <Link href='www.linkedin.com/in/sivamuthu-narayana-45968622a'><FaLinkedin /></Link>
                <Link href='https://x.com/sivaganesz__'><FaTwitter /></Link>

            </Social>
        </Container>
    )
}

