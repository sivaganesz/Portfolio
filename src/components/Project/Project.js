import React, { useState } from 'react'
import styled from 'styled-components';
import { projects } from '../../data/constants'
import { ProjectCard } from '../Cards/ProjectCard';
const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
position:relative;
z-index:1;
align-items:center;
padding:70px 0px 30px 0px;
background:linear-gradient{
  343.07deg,
  rgba(132,59,206,0.06) 5.71%,
  rgba(132,59,206,0) 64.83%
};
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
margin-bottom:30px;
`;
const Title = styled.div`
font-size:42px;
font-weight:600;
text-align:center;
color:${({ theme }) => theme.text_primary};
@media (max-width: 768px){
  font-size:32px;
}
`;
const Desc = styled.div`
  font-size: 18px;
  width: 100%;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    max-width: 450px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    max-width: 300px;
  }
`;


const ToogleGroup = styled.div`
display:flex;
border:1.5px solid ${({ theme }) => theme.primary};
color:${({ theme }) => theme.primary};
font-size:16px;
border-radius:10px;
font-weight:500;
margin:22px 0;
@media (max-width: 768px){
  font-size:12px;
}
`;
const ToogleButton = styled.div`
padding: 8px 18px;
cursor:pointer;
${({ active, theme }) =>
    active && `background-color:${theme.primary + 20};`}
&:hover{
  background-color:${({ theme }) => theme.primary + 8};
}
@media (max-width: 768px){
padding:6px 8px;
border-radius:4px;
}

`;
const Divider = styled.div`
width:1.5px;
background-color:${({ theme }) => theme.primary};
`;
const CardContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
gap:12px;
`;



export const Project = () => {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="Project">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>I have worked on a wide range of projects. From web app to Android apps. Here are some of my projects.</Desc>
        <ToogleGroup>
          <ToogleButton active={toggle === "all" ? "true" : ""} onClick={() => setToggle("all")}>ALL</ToogleButton>
          <Divider />
          <ToogleButton active={toggle === "web app" ? "true" : ""} onClick={() => setToggle("web app")}>WEB APP'S</ToogleButton>
          <Divider />
          <ToogleButton active={toggle === "ml" ? "true" : ""} onClick={() => setToggle("ml")}>MACHINE LEARNING</ToogleButton>
          <Divider />
          <ToogleButton active={toggle === "android" ? "true" : ""} onClick={() => setToggle("android")}>ANDROID</ToogleButton>
        </ToogleGroup>

        <CardContainer>
          {toggle === "all" && projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          {projects.filter((item) => item.category === toggle).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};