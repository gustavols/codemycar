import React from 'react';
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


export function Login({navigation}) {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn(){
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            navigation.navigate("Home")
        })
        .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Esse endereço de email já esta em uso!');
        }

        if (error.code === 'auth/invalid-email') {
            Alert.alert('Esse endereço de e-mail é inválido!');
        }

        if (error.code === 'auth/wrong-password') {
            Alert.alert('Email ou Senha estão incorretos');
        }

        
        console.error(error);
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
                        placeholder="DIGITE SEU EMAIL"
                        onChangeText={setEmail}
                    />
                    <InputPassword 
                        placeholder="DIGITE SUA SENHA"
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