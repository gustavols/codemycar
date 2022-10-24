import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
`;

export const Card = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    background: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    margin-top: 21px;
    padding: 10px 25px;
`;

export const ViewErrorCode = styled.View`
    flex-basis: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TitleErrorCode = styled.Text`
    font-family: 'Lexend-SemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const ErrorCode = styled.Text`
    font-family: 'Lexend-Regular';
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const ViewBrand = styled.View`
    flex-basis: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TitleBrand = styled.Text`
    font-family: 'Lexend-SemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const Brand = styled.Text`
    font-family: 'Lexend-Regular';
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;




