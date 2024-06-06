import React from 'react';
import styled from 'styled-components';
import { Bio } from '../../data/constants';
import Typewriter from "typewriter-effect";
import img from '../Image/portfolio.jpg'
import { HeroBgAnimation } from '../HeroBgAnimation/index';
const HeroContainer = styled.div`
background-color: ${({ theme }) => theme.bg};
display:flex;
justify-content:center;
position : relative;
padding: 80px 30px;

@media screen and (max-width: 960px){
  padding: 66px 16px;
}

@media screen and (max-width: 640px){
  padding: 32px 16px;
}

z-index:1;
clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
position: absolute;
display:flex;
justify-content:end;
top:50%;
right:0%;
bottom:0%;
left:50%;
overflow:hidden;
width:80%
height:100%;
padding:0px 30px;

-webkit-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) translateY(-50%);

@media screen and (max-width: 960px){
  padding: 0 0px;
  justify-content:center;
}
`;

const HeroInnerContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center
width:100%;
max-width:1100px;

@media screen and (max-width: 960px){
flex-direction:column;
}
`;

const HeroLeftContainer = styled.div`
width:100%;
order:1;
@media screen and (max-width: 960px){
order:2;
margin-bottom:32px;
display:flex;
align-items:center;
flex-direction:column;
}

@media screen and (max-width: 640px){
  order:2;
  margin-bottom:32px;
  display:flex;
  align-items:center;
  flex-direction:column;
  }
`;

const HeroRightContainer = styled.div`
width:100%;
order:2;
display:flex;
justify-content:end;
gap:12px;
@media screen and (max-width: 960px){
order:1;
justify-content:center;
align-items:center
margin-bottom:80px;
}

@media screen and (max-width: 640px){
  order:1;
  margin-bottom:10px;
  }
`;

const Title = styled.div`
font-size:43px;
font-weight:700;
color: ${({ theme }) => theme.text_primary};
line-height:68px;

@media screen and (max-width: 960px){
text-align: center;
}

@media screen and (max-width: 640px){
  font-size: 33px;
  line-height: 48px;
  margin-bottom: 8px; 
}
`;
const Textloop = styled.div`
font-size:29px;
font-weight:bold;

color: ${({ theme }) => theme.text_primary};
line-height:65px;
gap: 12px;
display:flex;

@media screen and (max-width: 960px){
  text-align: center;
  }
  
  @media screen and (max-width: 640px){
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px; 
  }
`;
const Span = styled.div`
color:${({ theme }) => theme.primary};
cursor:pointer;
`;

const SubTitle = styled.div`
font-size:20px;
color:${({ theme }) => theme.text_primary + 95};
line-height:32px;
margin-bottom:42px;
@media screen and (max-width: 960px){
  text-align: center;
  }
  
  @media screen and (max-width: 640px){
    font-size: 16px;
    line-height: 32px;
  }

`;
const ResumeButton = styled.a`
appearance:button;
text-decoration:none;
width:37%;
text-align:center;
padding:12px 0px;
color: ${({ theme }) => theme.white};
border-radius:20px;
cursor:pointer;
font-size:20px;
font-weight:600;
transition: all 0.2s ease-in-out !important;
background:hsla(271, 100%, 50%, 1);
background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
box-shadow:10px 10px 60px #1F2634,-10px -10px 60px #1F2634;
&:hover{
  transform:scale(1.05);
  transition: all 0.4s ease-in-out;
  box-shadow:20px 20px 60px #1F2634;
  filter: brightness(1);
}

  
  @media screen and (max-width: 640px){
    font-size: 18px;
    padding:12px 0;
  }
 
`;

const Image = styled.img` 
  width: 72%;
  height: 80%;
  border-radius: 50%;
 
  object-fit: cover;
  object-position: center;
  border: 2px solid ${({ theme }) => theme.primary};
  max-height: 500px;

  @media screen and (max-width: 960px) {
    max-width:50%;
    max-height:70%;  }

  @media screen and (max-width: 640px) {
    max-width:50%;
    max-height:70%;
  }
`;

export default Image;

export const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg >
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title data-aos="zoom-out" data-aos-duration="500" data-aos-delay="500"
            >Hi, I am <br />
              {Bio.name}
            </Title>
            <Textloop data-aos="zoom-out" data-aos-duration="500">I am a
              <Span>

                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }} />
              </Span>
            </Textloop>
            <SubTitle data-aos="zoom-out" data-aos-duration="500">{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='_blank' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"
            >Check Resume</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src={img} alt='img' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="200" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}
