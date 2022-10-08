import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
    height: 100%;
    width: 100%;
`;

export const WomanSection = styled.View`
    height: 35%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_ORANGE};
`;

export const LogoContainer = styled.View`
    margin-top: 50%;
`;

export const ViewTitleLogin = styled.View`
    display: flex;
    margin: 0 auto;
    max-width: 250px;
    text-align: center;
    margin-top: 35%;
   
`;

export const TitleLogin = styled.Text`
    font-family: 'Lexend-SemiBold';
    font-style: normal;
    font-size: 32px;
    line-height: 40px;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    text-align: center;
    margin-top: 15%;
`;

export const ViewButtonLogin = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
`;

export const ButtonLogin = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 60px;
    background: ${({ theme }) => theme.COLORS.BUTTON_BACKGROUND};
    border: 1px solid ${({ theme }) => theme.COLORS.BUTTON_BORDER};
    border-radius: 5px;
`;


export const ViewLoginGoogle = styled.View`
    flex-basis: 20%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.COLORS.BUTTON_BORDER};
`;

export const ViewTextLogin = styled.View`
    flex-basis: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.COLORS.BUTTON_BORDER};
`;

export const TextButtonLogin = styled.Text`
    font-family: Lexend-Medium;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    color: ${({ theme }) => theme.COLORS.BUTTON_COLOR_TEXT};
`;


