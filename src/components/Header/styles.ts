import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_ORANGE};
`;

export const ContentHeader = styled.View`
    padding: 8% 0%;
    flex-basis: 75%;
    padding-left: 10%;
`;

export const TitleHeader = styled.Text`
    font-family: 'Lexend-Medium';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
`;

export const SubtitleHeader = styled.Text`
    font-family: 'Lexend-Medium';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${({ theme }) => theme.COLORS.BUTTON_BACKGROUND};
`;

export const ImageHeader = styled.View`
    flex-basis: 25%;
`;

export const ImageView = styled.View`
    flex-basis: 25%;
`;





