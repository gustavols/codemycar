import React from 'react';
import { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

import {
    Container,
    ViewFormLogin,
    InputEmail,
    InputPassword,
    LoginMail,
    LoginMailText,
    CadastrarArea,
    CadastrarText,
    CadastrarTextSpan,
    TitleCadastrar
} from './styles';

export function Register({navigation})  {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleNewAccount() {
        setIsLoading(true)


        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => Alert.alert("Conta", "Cadastrada com sucesso!"), navigation.navigate("Home"))
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
        })
        .finally(() => setIsLoading(false));

    }

    return (
        <Container>
            <TitleCadastrar>
                REALIZE SEU CADASTRO
            </TitleCadastrar>
            <ViewFormLogin>
                <InputEmail 
                    placeholder="DIGITE O EMAIL"
                    onChangeText={setEmail}
                />
                <InputPassword 
                    placeholder="DIGITE A SENHA"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />    
                <LoginMail>
                    <LoginMailText
                        onPress={handleNewAccount}
                    >
                        CADASTRAR-ME
                    </LoginMailText>
                </LoginMail>
                <CadastrarArea>
                    <CadastrarText>
                        já tenho uma conta!
                    </CadastrarText>
                    <CadastrarTextSpan
                        onPress={() => navigation.navigate("Login")}
                    >
                        VOLTAR
                    </CadastrarTextSpan>
                </CadastrarArea>
            </ViewFormLogin>
        </Container>  
    );
}
