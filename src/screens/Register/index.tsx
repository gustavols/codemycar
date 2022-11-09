import React, { useState } from "react";
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

import firebase from '../../config/firebase'

export function Register({navigation})  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorRegister, setErrorRegister] = useState("");

    const handleRegister = () =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {

        let user = userCredential.user;
        navigation.navigate("Home" , { idUser: user.uid });
        
    
        })
        .catch((error) => {
        setErrorRegister(true)
        let errorCode = error.code;
        let errorMessage = error.message;
        });
    };

    return (
        <Container>
            <TitleCadastrar>
                REALIZE SEU CADASTRO
            </TitleCadastrar>
            <ViewFormLogin>
                <InputEmail 
                    placeholder="DIGITE O EMAIL"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <InputPassword 
                    placeholder="DIGITE A SENHA"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />    
                <LoginMail>
                    <LoginMailText
                        onPress={handleRegister}
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