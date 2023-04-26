import React from 'react';
import styled from 'styled-components';

export function LogIn() {
    return (
    <div className="LogIn">
    <MainLogIn>
            <Container> 
                <WindowLogIn>
                    <WrapperLogIn>
                        <LogInText>Вход</LogInText>
                        <LinkToReg href='/registration'>Регистрация</LinkToReg>
                    </WrapperLogIn>
                    <BlockInputs>
                        <InputLogin placeholder='login'></InputLogin>
                        <InputPassword placeholder='пароль'></InputPassword>
                    </BlockInputs>
                    <LogInButton>Войти</LogInButton>
                </WindowLogIn>
            </Container>
        </MainLogIn>
    </div>
    );
}

const LogInText = styled.h1`
font: 400 16px / 100% Inter;
font-weight: 800;
font-size: 34px;
`;

const MainLogIn = styled.div`
display: flex;
width: 100%;
height: 100vh;
background: #FAFAFA;
box-shadow: 0px 4px 4px black;
`;

const Container = styled.div`
width: 1920px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const WindowLogIn = styled.div`
display: flex;
flex-direction: column;
width: 434px;
height: 400px;
background: #FFFFFF;
border: 1px solid #F5F5F5;
border-radius: 15px;
/* drop-shadow: 16px 16px 10px; */
`;

const WrapperLogIn = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 24px;
padding-right: 21px;
`;

const LinkToReg = styled.a`
font-size: 20px;
/* font: 400 16px / 100% Inter; */
color: #7AAFFF;
`;

const BlockInputs = styled.div`
display: flex;
flex-direction: column;

padding-left: 24px;
padding-right: 24px;
`;

const InputLogin = styled.input`
height: 54px;
margin-bottom: 40px;
outline: none;
border-radius: 15px;
border: 2px solid;
border-color: #F5F5F5;
font-size: 16px;
font-weight: 500;
`;

const InputPassword = styled.input`
height: 54px;
outline: none;
border-radius: 15px;
border: 2px solid;
border-color: #F5F5F5;
font-size: 16px;
font-weight: 500;
`;

const LogInButton = styled.button`
width: 386px;
height: 60px;
background: #7BB0FF;
font-family: sans-serif;
font-size: 24px;
font-weight: 800;
color: white;
border: none;
margin-top: 45px;
border-radius: 15px;
margin-left: 24px;
`;

