import React, { useState } from "react";
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

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // FUNÇÃO DE LOGIN DO USUÁRIO
    const handleLogin = () =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigation.navigate("Home");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }   

    return (
        <Container>
            <ViewFormLogin>
                <WomanSection>
                    <LogoContainer>
                        <Logo width="350" height="350" />
                    </LogoContainer>
                </WomanSection>
                <ViewForm>
                    <InputEmail 
                        placeholder="DIGITE O EMAIL"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <InputPassword 
                        placeholder="DIGITE A SENHA"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />    
                    <LoginMail>
                        <LoginMailText
                            onPress={handleLogin}
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