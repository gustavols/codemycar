import { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

import {
    Container,
    WomanSection,
    LogoContainer,
    ViewFormLogin,
    InputEmail,
    InputPassword,
    LoginMail,
    LoginMailText,
    CadastrarArea,
    CadastrarText,
    CadastrarTextSpan,
    ViewForm
} from './styles';

import Logo from "../../assets/images/WomanPhoto.svg";
import React from 'react';



export function Login({navigation}) {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn() {
        if (!email || !password) {
          return Alert.alert('Entrar', 'Informe e-mail e senha.');
        }
    
        setIsLoading(true);
    
        auth()
          .signInWithEmailAndPassword(email, password)
          .catch((error) => {
            console.log(error);
            setIsLoading(false);
    
            if (error.code === 'auth/invalid-email') {
              return Alert.alert('Entrar', 'E-mail inválido.');
            }
    
            if (error.code === 'auth/wrong-password') {
              return Alert.alert('Entrar', 'E-mail ou senha inválida.');
            }
    
            if (error.code === 'auth/user-not-found') {
              return Alert.alert('Entrar', 'E-mail ou senha inválida.');
            }
    
            return Alert.alert('Entrar', 'Não foi possível acessar');
          });
      }
   

    return(
        <Container>
            <ViewFormLogin>
                <WomanSection>
                    <LogoContainer>
                        <Logo width="350" height="350" />
                    </LogoContainer>
                </WomanSection>
                <ViewForm>
                    <InputEmail 
                        placeholder="E-mail"
                        onChangeText={setEmail}
                    />
                    <InputPassword 
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />    
                    <LoginMail>
                        <LoginMailText
                           onPress={handleSignIn}
                        >
                            ENTRAR
                        </LoginMailText>
                    </LoginMail>

                    <CadastrarArea>
                        <CadastrarText>
                            ainda não tem uma conta? 
                        </CadastrarText>
                        <CadastrarTextSpan
                            onPress={() => navigation.navigate("Register")}
                        >
                            cadastra-se
                        </CadastrarTextSpan>
                    </CadastrarArea>
                </ViewForm>
            </ViewFormLogin>
        </Container>
        


    );
}