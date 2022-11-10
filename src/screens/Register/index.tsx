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

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function Register({navigation})  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigation.navigate("Home");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
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