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
    placeholderTextColor: "#ffffff"
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












