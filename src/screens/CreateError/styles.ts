import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
    height: 100%;
    width: 100%;
`;

export const ViewForm = styled.View`
    margin-top: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "rgba(255, 255, 255, 1)"
  })`
    margin: 10px 0px;
    width: 70%;
    height: 40px;
    text-align: center;
    background: #585666;
    border-radius: 2px;
    color: white;
    font-family: 'Lexend-SemiBold';
`;

export const CadastrarErro = styled.TouchableOpacity`
    margin-top: 2%;
    width: 70%;
    height: 40px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_ORANGE};
    border-radius: 2px;
`;

export const CadastrarErroText = styled.Text`
    text-align: center;
    color: white;
    font-family: 'Lexend-SemiBold';
    font-size: 16px;
    line-height: 40px;
`;

