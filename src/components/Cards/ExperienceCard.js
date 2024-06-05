import { } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
width:650px;
border-radius:10px;
box-shadow:0px 0px 10px rgba(0,0,0,0.1);
padding:12px 16px;
justify-content:space-between;
position:relative;
overflow:hidden;
display:flex;
flex-direction:column;
gap:12px;
transition: all 0.3s ease-in-out;

&:hover{
    box-shadow:0px 0px 20px rgba(0,0,0,0.2);
    transform:translateY(-5px);
}

@media screen and (max-width: 768px){
padding:10px;
gap:8px;
width:300px;
}
border:0.1px solid #306ee8;
box-shadow:rgba(23 , 92, 230, 0.15) 0px 4px 24px;
`;
const Top = styled.div`
display:flex;
gap:12px;
width:100%;

`;
const Logo = styled.img`
height:50px;
width:50px;
background-color:#000;
border-radius:10px;
margin-top:4px;

@media screen and (max-width: 768px){
    height:40px;
}
`;
const Body = styled.div`
display:flex;
flex-direction:column;
width:100%;
`;
const Role = styled.div`
font-size:18px;
font-weight:600;
color:${({theme})=> theme.text_secondary+99};

@media (max-width:768px){
    font-size:14px;
}
`;
const Company = styled.div`
font-size:16px;
font-weight:500;
color:${({theme})=> theme.text_secondary+90};
@media (max-width:768px){
    font-size:12px;
}

`;
const Duration = styled.div`
font-size:12px;
font-weight:400;
color:${({theme})=> theme.text_secondary+80};
@media (max-width:768px){
    font-size:10px;
}
`;

const Description = styled.div`
width:100%
font-size:15px;
font-weight:400;
color:${({theme})=> theme.text_secondary+99};
@media (max-width:768px){
    font-size:11px;
}

`;

const Skills = styled.div`
display:flex;
width:100%;
gap:12px;
margin-top:10px;
@media (max-width:768px){
    font-size:10px;
}
`;
const ItemsWrapper = styled.div`
display:flex;
gap:10px;
flex-wrap:wrap;
margin-bottom:10px;
`;
const Skill = styled.div`
font-weight:500;
color:${({theme})=> theme.text_secondary+90};
@media (max-width:768px){
    font-size:12px;
}
`;
export const ExperienceCard = ({ experience }) => {
    return (
      <Card>
        <Top>
          <Logo src={experience.img} />
          <Body>
            <Role>{experience.role}</Role>
            <Company>{experience.company}</Company>
            <Duration>{experience.date}</Duration>
          </Body>
        </Top>
        <Description>
          {experience.desc}
          {experience?.skills && (
            <Skills>
              <b>Skills:</b>
              <ItemsWrapper>
                {experience.skills.map((skill, index) => (
                  <Skill key={index}>• {skill}</Skill>
                ))}
              </ItemsWrapper>
            </Skills>
          )}
        </Description>
      </Card>
    );
  };