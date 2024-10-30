import React, { useEffect, useState } from 'react';

import EmotionIcon from '../../EmotionIcon/ui/EmotionIcon';
import { Emotions, getEmotionInfo } from '../../model/EmotionEnum';
import { StyledEmotionButton } from './EmotionButton.styled';

interface EmotionButtonProps {
    emotion: Emotions;
    initialClicked: boolean;
    onClick: () => void;
}

const EmotionButton = ({
    emotion,
    onClick,
    initialClicked = false
}: EmotionButtonProps) => {
    const [isClicked, setIsClicked] = useState(initialClicked);
    useEffect(() => {
        setIsClicked(initialClicked);
    }, [initialClicked]);

    const handleClick = () => {
        setIsClicked((prev) => !prev);
        onClick();
    };
    return (
        <StyledEmotionButton clicked={isClicked} onClick={handleClick}>
            <EmotionIcon emotion={emotion} width="20px" height="20px" />
            <p>{getEmotionInfo(emotion).description}</p>
        </StyledEmotionButton>
    );
};

export default EmotionButton;