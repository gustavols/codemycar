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

import firebase from "../../config/firebase";
import { faSquareTerminal } from "@fortawesome/sharp-solid-svg-icons";

export function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const handleLoginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            let user = userCredential.user;
            navigation.navigate("Home" , { idUser: user.uid });
          })
          .catch((error) => {
            setErrorLogin(true)
            let errorCode = error.code;
            let errorMessage = error.message;
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
                            onPress={handleLoginFirebase}
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