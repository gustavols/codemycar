import React from "react";
import {
    Container,
    Header,
    TitlePerfil,
    SubTitlePerfil,
    Main,
    PhotoUser,
    IdUser,
    EmailUser,
    Footer,
    ViewButtonDesconnect,
    ButtonDesconnect,
    ViewIconDesconnect,
    ViewTextDesconnect,
    TextButtonDesconnect,
    Photo
} from './styles';

import Desconnect from "../../assets/images/Desconnect.svg";

import firebase from "../../config/firebase";

export function Perfil({navigation}) {

    const userData = firebase.auth().currentUser;
    if (userData !== null) {
    }

    function logout(){
        firebase.auth().signOut().then(()=>{
          navigation.navigate("Login")
        }).catch((error)=>{
          
        });
    }
        
    return (
        <Container>
            <Header>
                <TitlePerfil>
                    Perfil    
                </TitlePerfil>
                <SubTitlePerfil>
                    Dados da sua conta.  
                </SubTitlePerfil>
            </Header>
            <Main>
                <PhotoUser>
                    <Photo></Photo>
                </PhotoUser>
                <EmailUser>
                    {userData.email}
                </EmailUser>  
                <IdUser>
                    {userData.uid}
                </IdUser>    
            </Main>
            <Footer>
                <ViewButtonDesconnect>
                    <ButtonDesconnect>
                        <ViewIconDesconnect>
                            <Desconnect width="32" height="32" />
                        </ViewIconDesconnect>
                        <ViewTextDesconnect>
                            <TextButtonDesconnect
                                onPress={() => {logout()}}
                            >DESCONECTAR</TextButtonDesconnect>
                        </ViewTextDesconnect>
                    </ButtonDesconnect>
                </ViewButtonDesconnect>
            </Footer>
        </Container>
    );
}   


function getAuth() {
    throw new Error("Function not implemented.");
}

