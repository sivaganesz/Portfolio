import React from 'react'
import { skills } from '../../data/constants'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
position:relative;
z-index:1;
align-items:center;
padding:40px 0px 50px 0px;
@media (max-width:430px){
  margin-top:-70px;
}
`;
const Wrapper = styled.div`
max-width:1100px;
position:relative;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
gap:12px;
`;
const Title = styled.div`
font-size:42px;
font-weight:600;
text-align:center;
margin-top:20px;
color:${({ theme })=> theme.text_primary};
@media (max-width: 768px){
  margin-top:12px;
  font-size:32px;
}
`;
const Desc = styled.div`
font-size:18px;
max-width:600px;
text-align:center;
color:${({ theme })=>theme.text_primary};
@media (max-width:768px){
  font-size:16px; 
}
`;
const SkillContainer = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
margin-top:30px;
justify-content:center;
gap:30px;

`;
const Skill = styled.div`
width:80%;
maax-width:500px;
background-color :${({theme })=> theme.card};
border-radius:16px;
border:0.1px solid #854ce6;
padding: 18px 36px;

@media screen and (max-width: 768px){
  max-width:400px;
  padding:10px 36px;
}
@media screen and (min-width: 500px){
max-width:300px;
padding:10px 36px;
}
&:hover{
  transform:scale(1.05);
  transition: all 0.4s ease-in-out;
  box-shadow:0px 0px 20px #1F2634;
}
`;
const SkillTitle = styled.div`
color: ${({theme})=>theme.text_secondary};
font-weight:600;
font-size:27px;
text-align:center;
margin-bottom:20px;
`;
const SkillList = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
gap:12px;
margin-bottom:20px;
`;
const SkillItem = styled.div`
display:flex;
gap:8px;
align-items:center;
justify-content:center;
color:${({theme})=>theme.text_primary+80};
border:0.1px solid ${({ theme })=> theme.text_primary+80};
border-radius:12px;
padding:12px 14px;
font-size:16px;
font-weight:400;

@media screen and (max-width: 768px){
font-size:14px;
padding:8px 12px;
}

@media screen and (min-width: 500px){
font-size:12px;
padding:6px 12px;
}
`;
const SkillImage = styled.img`
width:20px;
height:20px;
`;
const Link = styled.img`

`;


export const  Skills = () => {
  return (
    <>
    <Link id='skills'/>
    <Container>
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which i have been working on for the 
          past 2 years.
        </Desc>
        <SkillContainer>
            {skills.map((item) => (
              <Skill key={item.title}>
                <SkillTitle>{item.title}</SkillTitle>
                <SkillList>
                  {item.skills.map((skill, index) => (
                    <SkillItem key={index}>
                      <SkillImage src={skill.image} alt={skill.name} />
                      {skill.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillContainer>
      </Wrapper>
    </Container>
    </>
  )
}