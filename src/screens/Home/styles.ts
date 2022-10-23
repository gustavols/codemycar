import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
`;

export const SearchCode = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
`;
export const ButtonSearchCode = styled.TouchableOpacity`
    width: 90%;
    height: 54px;
    background: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    border-radius: 11px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
`;

export const ButtonSearchIcone = styled.View`
    flex-basis: 19%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const ButtonSearchText = styled.View`
    flex-basis: 81%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const SearchText = styled.Text`
    font-family: 'Lexend-SemiBold';
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const LatestSearchView = styled.View`
    display: flex;
    justify-content: flex-start;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
`;

export const LatestSearch = styled.Text`
    font-family: 'Lexend-SemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    margin-top: 20px;
    margin-left: 23px;
`;

export const ViewScroll = styled.SafeAreaView`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
`;

export const ScrollCards = styled.ScrollView`

`;






