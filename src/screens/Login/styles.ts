import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const TitleCadastrar = styled.Text`
    max-width: 300px;
    text-align: center;
    color: #585666;
    font-family: 'Lexend-Bold';
    margin-top: 15px;
    font-size: 36px;
    cursor: pointer;
`;


export const ViewFormLogin = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const ViewForm = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InputEmail = styled.TextInput.attrs({
    placeholderTextColor: "rgba(255, 255, 255, 1)"
  })`
    width: 70%;
    height: 40px;
    text-align: center;
    background: #585666;
    border-radius: 2px;
    color: white;
    font-family: 'Lexend-SemiBold';
`;

export const InputPassword = styled.TextInput.attrs({
    placeholderTextColor: "rgba(255, 255, 255, 1)"
  })`
    margin-top: 2%;
    width: 70%;
    height: 40px;
    text-align: center;
    background: #585666;
    border-radius: 2px;
    color: white;
    font-family: 'Lexend-SemiBold';
`;

export const LoginMail = styled.TouchableOpacity`
    width: 100%;
    margin-top: 2%;
    height: 42px;
    background: #FFAC4A;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginMailText = styled.Text`
    text-align: center;
    color: white;
    font-family: 'Lexend-SemiBold';
    font-size: 16px;
`;

export const CadastrarArea = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;


export const CadastrarText = styled.Text`
    text-align: center;
    color: #585666;
    font-family: 'Lexend-Regular';
    margin-top: 15px;
    font-size: 16px;
`;

export const CadastrarTextSpan = styled.Text`
    text-align: center;
    color: #585666;
    font-family: 'Lexend-Bold';
    margin-top: 15px;
    font-size: 16px;
`;

export const SectionButtonLogin = styled.View`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;

