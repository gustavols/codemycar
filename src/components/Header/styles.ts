import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
`;

export const HeaderSection = styled.View`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
`;

export const LogoutHeader = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 20%;

`;

export const LogoutBackground = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 68%;
    height: 62%;
    background: #FFAC4A;
    border-radius: 5px;
`;



export const ContentHeader = styled.View`
    padding-left: 25px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-basis: 80%;
`;

export const TitleHeader = styled.Text`
    font-family: 'Lexend-Bold';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 25px;
    color: #FFAC4A;
`;

export const SubtitleHeader = styled.Text`
    font-family: 'Lexend-Medium';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #FFAC4A;
`;


    


