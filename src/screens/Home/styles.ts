import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
    width: 100%;
    
`;

export const Cards = styled.View`
    width: 100%;
    height: 82%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
`;

export const CardOptions = styled.TouchableOpacity`
    background: ${({ theme }) => theme.COLORS.BUTTON_COLOR_TEXT};
    margin: 15px 0px;
    width: 18%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;

export const TitleCard = styled.Text`
    color: white;
    font-family: 'Lexend-SemiBold';
    font-size: 20px;
`;

export const TitlePage = styled.Text`
    margin-top: 10px;
    color: #585666;
    font-family: 'Lexend-Bold';
    font-size: 22px;
    padding-left: 10px;
`;





