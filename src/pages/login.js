import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchAuth } from '../redux/slices/auth';
import { useForm } from 'react-hook-form';
import { uiLink } from '../shared/Links';

export const LogIn = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    const onSubmit = (values) => {
        dispatch(fetchAuth(values));
        console.log(values);
    };

    return (
        <div className="LogIn">
            <MainLogIn>
                <Container>
                    <WindowLogIn>
                        <WrapperLogIn>
                            <LogInText>Вход</LogInText>
                            <LinkToReg to='/registration'>Регистрация</LinkToReg>
                        </WrapperLogIn>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <BlockInputs>
                                <InputLogin placeholder='login' {...register('email', { required: 'Укажите почту' })} type='email'></InputLogin>
                                <InputPassword placeholder='пароль' {...register('password', { required: 'Укажите пароль' })}></InputPassword>
                            </BlockInputs>
                            <LogInButton type='submit'>Войти</LogInButton>
                        </form>
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

const LinkToReg = styled(Link)`
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

