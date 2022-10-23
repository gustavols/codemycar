import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_ORANGE};
    width: 100%;
    height: 100%;
`;

export const Header = styled.View`
    padding: 40px;
`;

export const TitlePerfil = styled.Text`
    font-family: 'Lexend-SemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const SubTitlePerfil = styled.Text`
    font-family: 'Lexend-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const Main = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_ORANGE};  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PhotoUser = styled.View`
    margin-top: 22px;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const Photo = styled.View`
    background: #000;
    width: 150px;
    height: 150px;
    border-radius: 1000px;
`;



export const NameUser = styled.Text`
    font-family: 'Lexend-SemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    margin-top: 20px;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const EmailUser = styled.Text`
    font-family: 'Lexend-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-top: 2px;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const Footer = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_ORANGE};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15%;
`;

export const ViewButtonDesconnect = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
`;

export const ButtonDesconnect = styled.TouchableOpacity`
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


export const ViewIconDesconnect = styled.View`
    flex-basis: 20%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.COLORS.BUTTON_BORDER};
`;

export const TextButtonDesconnect = styled.Text`
    font-family: Lexend-Medium;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;

export const ViewTextDesconnect = styled.View`
    flex-basis: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.COLORS.BUTTON_BORDER};
`;
