import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
`;

export const Main = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;


export const ScrollViewDetails = styled.ScrollView`
    
`;

export const Information = styled.Text`
    padding: 20px 0px 0px 24px;
    font-family: 'Lexend-SemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #585666;
`;

export const Details = styled.View`
    width: 87%;
`;

export const CardDetails = styled.View`
    margin-top: 20px;
`;

export const TitleCard = styled.Text`
    font-family: 'Lexend-SemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #585666;
`;

export const CardInfo = styled.View`
    margin-top: 9px;
    background: #585666;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AnswerError = styled.Text`
    padding: 16px 0px;
    font-family: 'Lexend-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #FFFFFF;
`;









