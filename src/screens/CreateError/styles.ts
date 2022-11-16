import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
    height: 100%;
    width: 100%;
`;

export const TitlePage = styled.Text`
    text-align: center;
    color: #585666;
    font-family: 'Lexend-Bold';
    font-size: 28px;
    cursor: pointer;
`;

export const ViewForm = styled.View`
    margin-top: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const AreaForm = styled.View`
    width: 85%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "rgba(182, 180, 180, 0.9)"
  })`
    margin: 10px 0px;
    width: 100%;
    height: 40px;
    text-align: justify;
    background: #ffffff;
    border-radius: 2px;
    color: #585666;
    font-family: 'Lexend-Regular';
    border-bottom: 2px solid red;
`;

export const CadastrarErro = styled.TouchableOpacity`
    margin-top: 2%;
    width: 100%;
    height: 40px;
    background: #FFAC4A;
    border-radius: 2px;
`;

export const CadastrarErroText = styled.Text`
    text-align: center;
    color: white;
    font-family: 'Lexend-SemiBold';
    font-size: 16px;
    line-height: 40px;
`;

export const Label = styled.Text`
     color: #FFAC4A;
     font-family: 'Lexend-SemiBold';
`;




