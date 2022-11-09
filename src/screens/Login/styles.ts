import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.COLORS.BACKGROUND_WHITE};
`;

export const ViewFormLogin = styled.View`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const WomanSection = styled.View`
    height: 40%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_ORANGE};
`;

export const LogoContainer = styled.View`
    margin-top: 40%;
`;

export const ViewForm = styled.View`
    padding-top: 20%;
    height: 60%;
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
    margin-top: 2%;
    width: 70%;
    height: 40px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_ORANGE};
    border-radius: 2px;
`;

export const LoginMailText = styled.Text`
    text-align: center;
    color: white;
    font-family: 'Lexend-SemiBold';
    font-size: 16px;
    line-height: 40px;
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


