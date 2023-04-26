import { width } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ComponentsHeader } from '../components/header';
import { LogIn } from './login';

export function Registration() {
const [FIO, setFIO] = useState(' ');

    return (
      <div className="Registration">
        <MainRegistration> 
          <Container>
            <WindowRegistration>
              <WrapperRegistration> 
                <RegistrationText>Регистрация</RegistrationText>
                <LinkToLogIn href='/login'>Вход</LinkToLogIn>
              </WrapperRegistration>
              <BlockRegistrationInputs>
                <InputFIO placeholder='ФИО'
                type={'text'} onChange={(event) => setFIO(event.target.value)}></InputFIO>
                <InputJobTitle placeholder='должность'></InputJobTitle>
                <InputLogin placeholder='login'></InputLogin>
                <InputPassword placeholder='пароль'></InputPassword>
                <InputRepeatPassword placeholder='пароль еще раз'></InputRepeatPassword>
              </BlockRegistrationInputs>
              <RegistrationButton>Регистрация</RegistrationButton>
            </WindowRegistration>
          </Container>
        </MainRegistration>
      </div>
    );
  };

const RegistrationText = styled.h1`
font: 400 16px / 100% Inter;
font-weight: 800;
font-size: 34px;
`;

const Container = styled.div`
margin-top: 71px;
width: 1920px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const MainRegistration = styled.div`
display: flex;
background: #FAFAFA;
width: 100%;
height: 100vh;
`;

const WindowRegistration = styled.div`
display: flex;
flex-direction: column;
width: 450px;
height: 692px;
background: #FFFFFF;
`;

const LinkToLogIn = styled.a`
text-decoration: none; 
hover {text-decoration: underline;};
font-size: 20px;
/* font: 400 20px / 100% Inter;  */
color: #7AAFFF;
`;

const WrapperRegistration = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 33px;
padding-right: 33px;
`;

const BlockRegistrationInputs = styled.div`
display: flex;
flex-direction: column;
padding-left: 33px;
padding-right: 33px;
`;

const InputFIO = styled.input`
height: 54px;
margin-bottom: 36px;
outline: none;
border-radius: 15px;
border: 2px solid;
border-color: #F5F5F5;
font-size: 16px;
font-weight: 500;
`;

const InputJobTitle = styled.input`
height: 54px;
margin-bottom: 36px;
outline: none;
border-radius: 15px;
border: 2px solid;
border-color: #F5F5F5;
font-size: 16px;
font-weight: 500;
`;

const InputLogin = styled.input`
height: 54px;
margin-bottom: 36px;
outline: none;
border-radius: 15px;
border: 2px solid;
border-color: #F5F5F5;
font-size: 16px;
font-weight: 500;
`; 

const InputPassword = styled.input`
height: 54px;
margin-bottom: 36px;
outline: none;
border-radius: 15px;
border: 2px solid;
border-color: #F5F5F5;
font-size: 16px;
font-weight: 500;
`;

const InputRepeatPassword = styled.input`
height: 54px;
margin-bottom: 45px;
outline: none;
border-radius: 15px;
border: 2px solid;
border-color: #F5F5F5;
font-size: 16px;
font-weight: 500;
`;

const RegistrationButton = styled.button`
background: #7BB0FF;
width: 384px;
height: 82pxs;
width: 386px;
height: 60px;
font-family: sans-serif;
font-size: 24px;
font-weight: 800;
color: white;
border: none;
border-radius: 15px;
margin-left: 33px;
`;