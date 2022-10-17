import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
    width: 100%;
    height: 100%;
`;

export const ViewSearchError = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px; 
`;

export const ListErrors = styled.View`
    
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
    font-size: 14px;
`;






