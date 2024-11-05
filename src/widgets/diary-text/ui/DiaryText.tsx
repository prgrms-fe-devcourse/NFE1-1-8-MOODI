import React from 'react';
import { DiaryVisibilityControls } from '@/widgets/diary-visibility-controls';
import { DiaryTextProps } from '../model/type';
import {
    StyledDiaryAuthor,
    StyledDiaryContent,
    StyledDiaryDate,
    StyledDiaryTextContainer,
    StyledDiaryTitle,
    StyledDiaryTitleContainer,
    StyledDiaryUpdateDate
} from './DiaryText.styled';
import { VisibilityButton } from '@/features/diary-write';

const DiaryText = ({
    titleDate,
    title,
    author,
    updateDate,
    diaryContent,
    isPublic,
    onVisibilityChange
}: DiaryTextProps) => {
    return (
        /** 일기 본문 정보를 담는 컴포넌트입니다. */
        <StyledDiaryTextContainer>
            <StyledDiaryDate>{titleDate}</StyledDiaryDate>
            <StyledDiaryTitleContainer>
                <StyledDiaryTitle>{title}</StyledDiaryTitle>
                <VisibilityButton
                    isPublic={isPublic}
                    isActive={false}
                    onClick={() => onVisibilityChange(!isPublic)} // isPublic 값을 반전시켜서 전달
                />
            </StyledDiaryTitleContainer>
            <StyledDiaryAuthor>{author}</StyledDiaryAuthor>
            <StyledDiaryUpdateDate>{updateDate}</StyledDiaryUpdateDate>
            <StyledDiaryContent>{diaryContent}</StyledDiaryContent>
        </StyledDiaryTextContainer>
    );
};

export default DiaryText;