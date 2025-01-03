import React, { useState } from 'react';
import Title from '@/shared/ui/Title/Title';
import Info from '@/shared/ui/Info/Info';
import Margin from '@/shared/ui/Margin/Margin';
import InputForm from '@/shared/ui/InputForm/InputForm';
import Button from '@/shared/ui/Button/Button';
import { useToastStore } from '@/features/Toast/hooks/useToastStore';
import { ButtonStyled, LoginStyled, LoginFormStlyed } from './Login.styled';
import Span from '@/shared/ui/Span/Span';
import useLogin from '@/features/login/hooks/useLogin';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { addToast } = useToastStore();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { mutate, isError, isSuccess, data, error } = useLogin();
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate({ email, password });
    };

    return (
        <LoginStyled>
            <Margin top={120} />
            <Title isLoading={false}>로그인</Title>
            <Info isLoading={false}>무디와 일기쓰고 노래 추천 받기</Info>
            <Margin bottom={70} />
            <LoginFormStlyed onSubmit={handleSubmit}>
                <InputForm
                    label="이메일 입력"
                    value={email}
                    width="500px"
                    height="52px"
                    onChange={setEmail}
                    placeholder="이메일 입력"
                />
                <Margin bottom={25} />
                <InputForm
                    label="비밀번호"
                    isPassword
                    value={password}
                    width="500px"
                    height="52px"
                    onChange={setPassword}
                    placeholder="비밀번호 입력 (문자, 숫자, 특수문자 8~20자"
                />

                <Margin bottom={63} />
                <ButtonStyled>
                    <Button
                        height="44px"
                        hasBorder
                        width="240px"
                        fontSize="16px"
                        type="button"
                        onClick={() => {
                            navigate('/join');
                        }}
                    >
                        회원가입
                    </Button>
                    <Button
                        height="44px"
                        width="240px"
                        fontSize="16px"
                        type="submit"
                    >
                        로그인
                    </Button>
                </ButtonStyled>
            </LoginFormStlyed>
            <Margin bottom={28} />
            <Link to="/account">
                <Span isCenter>계정을 잃어버리셨나요?</Span>
            </Link>
        </LoginStyled>
    );
};

export default Login;
