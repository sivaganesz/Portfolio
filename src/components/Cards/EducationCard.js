import React from 'react'
import styled from 'styled-components';

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

const School = styled.div`
font-size:18px;
font-weight:600;
color:${({ theme }) => theme.text_primary + 99};

@media (max-width:768px){
    font-size:14px;
}
`;
const Duration = styled.div`
font-size:12px;
font-weight:400;
color:${({ theme }) => theme.text_secondary + 80};
@media (max-width:768px){
    font-size:10px;
}
`;
const Grade = styled.div`
font-size:14px;
font-weight:500;
color:${({ theme }) => theme.text_secondary + 90};
@media (max-width:768px){
    font-size:12px;
}
`;
const Degree = styled.div`
font-size:14px;
font-weight:500;
color:${({ theme }) => theme.text_secondary + 90};
@media (max-width:768px){
    font-size:12px;
}
`;


const Description = styled.div`
font-weight:400;
font-size:15px;
color:${({ theme })=> theme.text_primary+99};
overflow:hidden;
text-overflow:ellipsis;
margin-top:6px;
max-width:100%;
display:-webkit-box;
-webkit-line-clamp:4;
-webkit-box-orient:vertical;

&:hover{
    overflow:hidden;
    text-overflow:ellipsis;
    max-width:100%;
    display:-webkit-box;
    -webkit-line-clamp:10;
    -webkit-box-orient:vertical;
}
`;

export const EducationCard = ({ education }) => {
    return (
        <Card data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500">
            <Top>
                <Logo src={education.img} />
                <Body>
                    <School>{education.school}</School>
                    <Degree>{education.degree}</Degree>
                    <Duration>{education.date}</Duration>

                </Body>
            </Top>
            <Grade>Grade: {education.grade}</Grade>
            <Description>
            {education.desc}
           </Description>
        </Card>
    )
}
