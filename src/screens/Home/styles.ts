import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const SearchCode = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const ButtonSearchCode = styled.TouchableOpacity`
  
    width: 336px;
    height: 54px;
    background: #585666;
    border-radius: 11px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
`;

export const ButtonSearchIcone = styled.View`
    flex-basis: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonSearchText = styled.View`
    flex-basis: 80%;
    margin: 0 auto;
`;

export const SearchText = styled.Text`
    font-family: 'Lexend-SemiBold';
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
`;

export const LatestSearchView = styled.View`
    display: flex;
    justify-content: flex-start;
`;

export const LatestSearch = styled.Text`
    font-family: 'Lexend-SemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    margin-top: 31px;
    margin-left: 23px;
`;





