import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
    width: 100%;
    height: 100%;
`;

export const Main = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SectionSearchError = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
`;

export const ViewSearchError = styled.View`
    flex-basis: 90%;
`;

export const InputSearchError = styled.TextInput.attrs({
    placeholderTextColor: "rgba(255, 255, 255, 0.5)"
  })`
    width: 90%;
    height: 50px;
    background: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    font-family: "Lexend-SemiBold";
    border-radius: 5px;
    text-align: center;
    color: #ffffff;
    font-size: 17px;
`;


export const ViewFilterSearch = styled.View`
    flex-basis: 10%;
`;

export const FilterSearch = styled.TouchableOpacity`
    
`;

export const SectionErrorFound = styled.View`
    width: 92%;
`;

// CARD STYLES

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










