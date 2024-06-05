import styled from 'styled-components'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 30px;
  padding: 10px 0px 80px 0px;

  @media (max-width: 960px) {
    padding: 0px;
  }

`;

const Top = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
  margin-bottom:30px;

  @media (max-width:968px){
    margin-bottom:90px;
  }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 18px;
  }
`;

const Contacts = styled.div`
  border-radius: 20px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 12px;
  display: flex;
  background-color: ${({ theme }) => theme.card};
  width: 470px;
  max-width: 100%;
  flex-direction: column;
  margin-top: 30px;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const Email = styled.div`
  padding: 20px 30px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 20px;
  font-weight: 500;
  display: flex;
  margin-top: 10px;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  align-items: center; /* Center align the contents */
`;

const StyledInput = styled.input`
  padding: 9px 12px;
  margin: 10px 10px;
  border: 1px solid #b1b2b3;
  border-radius: 13px;
  font-size: 16px;
  max-width: 400px;
  width:100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.card};

  &:focus {
    border-color: #66afe9;
    outline: none;
    box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);
  }
  @media (max-width:640px){
    max-width: 330px;
  }
`;

const Message = styled.input`
  padding: 11px 12px 75px 10px;
  margin: 10px 10px;
  border: 1px solid #b1b2b3;
  border-radius: 13px;
  font-size: 16px;
  max-width: 400px;
  width:100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.card};

  &:focus {
    border-color: #66afe9;
    outline: none;
    box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);
  }
  @media (max-width:640px){
    max-width: 330px;
  }
`;

const ResumeButton = styled.button`
  appearance: button;
  text-decoration: none;
  width: 37%;
  text-align: center;
  margin-top: 20px; /* Adjust margin top for spacing */
  padding: 8px 0px;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 10px 10px 60px #1F2634, -10px -10px 60px #1F2634;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634;
    filter: brightness(1);
  }

  @media screen and (min-width: 640px) {
    font-size: 18px;
    padding: 12px 0;
  }
`;

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zrtjoaf', 'template_qorcyb9', form.current, {
        publicKey: 'plNC_MUAdGbQ11mR-',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
    <Card>
      <Top>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <Contacts>
          <Email>Email Me <span><img
            src="https://imgs.search.brave.com/dbaCvVZyWK2ODkYvhDzmoiXZpaAX_ob1ax7pKhFoY9s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/Z29vZ2xlL25vdG8t/ZW1vamktdHJhdmVs/LXBsYWNlcy8xMjgv/NDI1OTgtcm9ja2V0/LWljb24ucG5n"
            alt="Email Icon"
            style={{ width: '30px', height: '30px' }}
          /></span></Email>
          
          <Data>
            <StyledInput type='text' placeholder='Your Email'  name="from_email"/>
            <StyledInput type='text' placeholder='Your Name'  name="from_name" />
            <StyledInput type='text' placeholder='Subject' name="from_subject"/>
            <Message type='text' placeholder='Message' name="message" />
            <ResumeButton type="submit" value="Send" >Send</ResumeButton>
          </Data>
          
        </Contacts>
      </Top>
    </Card>
    </form>
  )
}
