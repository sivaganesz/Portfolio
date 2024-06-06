import React from 'react'
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {experiences} from '../../data/constants'
import { ExperienceCard } from '../Cards/ExperienceCard';

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
position:relative;
z-index:1;
align-items:center;

padding:50px 0px 25px 0px;
@media (max-width:960px){
  padding:0px;
}
@media (max-width:450px){
  margin-right:25px;
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
margin-bottom:60px;
`;
const Title = styled.div`
font-size:42px;
font-weight:600;
text-align:center;
margin-top:20px;
color:${({ theme }) => theme.text_primary};
@media (max-width: 768px){
  margin-top:12px;
  font-size:32px;
}
@media (max-width:450px){
  margin-left:25px;
}
`;
const Desc = styled.div`
font-size:18px;
max-width:600px;
text-align:center;
color:${({ theme }) => theme.text_primary};
@media (max-width:768px){
  font-size:16px; 
}
@media (max-width:450px){
  margin-left:25px;
}
`;
const TimeLineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;


export const Experience = () => {
  return (
    <Container id='Experience'> 
      <Wrapper>
        <Title>Experience</Title>
        <Desc>Here are some of my projects</Desc>
        <TimeLineSection>
          <Timeline>
            {experiences.map((experience,index)=>(
              <TimelineItem key={index}>
                <TimelineSeparator >
                  <TimelineDot variant='outlined' color='secondary'/>
                 {index !== experiences.length -1 && <TimelineConnector/>}
                </TimelineSeparator>
                <TimelineContent sx={{py:'12px',px:'8px'}}>
                  <ExperienceCard experience={experience}/>
                </TimelineContent>
               </TimelineItem>
            ))}
          </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  )
}
