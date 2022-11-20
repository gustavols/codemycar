import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
    height: 100%;
    width: 100%;
`;

export const WomanSection = styled.View`
    height: 35%;
    width: 100%;
    background: #FFAC4A;
`;

export const LogoContainer = styled.View`
    margin-top: 10%;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;


export const TitleSection = styled.View`
    
    height: 45%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;



export const Title = styled.Text`
    margin-top: 20%;
    text-align: center;
    max-width: 300px;
    font-family: 'Lexend-Bold';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #585666;
`;

export const SectionWelcome = styled.View`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const ButtonWelcome = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 85%;
    background: #FFAC4A;
    border-radius: 5px;
    
`;

export const TitleButton = styled.Text`
    font-family: 'Lexend-SemiBold';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #ffffff;
`;





