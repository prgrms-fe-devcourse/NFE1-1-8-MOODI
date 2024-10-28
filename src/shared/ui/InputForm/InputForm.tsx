import React, { useState } from 'react';
import { InputFormProps } from './InputForm.types';
import {
    InputContainer,
    StyledLabel,
    StyledInput,
    LableContainer,
    StyledSelect,
    StyledTextarea,
    StyledImg,
    ErrorMessage,
    TogglePasswordButton
} from './InputForm.styled';

const InputForm = ({
    label,
    value,
    placeholder,
    width,
    height,
    hasError = false,
    errorMessage = '',
    isPassword = false,
    isDropdown = false,
    isTextarea = false,
    options = ['남성', '여성'],
    onChange
}: InputFormProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        onChange(e.target.value);
    };

    return (
        <InputContainer width={width}>
            <LableContainer>
                <StyledLabel>{label}</StyledLabel>
                {hasError ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
            </LableContainer>
            {/* 성별 선택 폼 */}
            {isDropdown && (
                <StyledSelect
                    height={height}
                    value={value}
                    onChange={handleInputChange}
                >
                    <option value="" disabled hidden>
                        {placeholder}
                    </option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </StyledSelect>
            )}
            {/* 본문 내용 작성 폼 */}
            {isTextarea && !isDropdown && (
                <StyledTextarea
                    value={value}
                    placeholder={placeholder}
                    height={height}
                    onChange={handleInputChange}
                />
            )}
            {/* 일반 및 비밀번호 작성 폼 */}
            {!isDropdown && !isTextarea && (
                <div style={{ position: 'relative' }}>
                    <StyledInput
                        type={
                            isPassword && !isPasswordVisible
                                ? 'password'
                                : 'text'
                        }
                        value={value}
                        placeholder={placeholder}
                        height={height}
                        onChange={handleInputChange}
                    />
                    {isPassword && (
                        <TogglePasswordButton
                            type="button"
                            onClick={handleTogglePasswordVisibility}
                            aria-label={
                                isPasswordVisible
                                    ? '비밀번호 숨기기'
                                    : '비밀번호 보이기'
                            }
                        >
                            <StyledImg
                                src={
                                    isPasswordVisible
                                        ? '/visibility_off.svg'
                                        : '/visibility.svg'
                                }
                                alt={
                                    isPasswordVisible
                                        ? '비밀번호 보이기'
                                        : '비밀번호 숨기기'
                                }
                            />
                        </TogglePasswordButton>
                    )}
                </div>
            )}
        </InputContainer>
    );
};

export default InputForm;