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
    Photo,
    HeaderInfo,
    HeaderButtonComeBack,
    ButtonComeBack
} from './styles';

import Desconnect from "../../assets/images/Desconnect.svg";

import firebase from "../../config/firebase";
import { getAuth, signOut } from "firebase/auth";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/sharp-solid-svg-icons/faArrowLeft'

export function Perfil({navigation}) {

    // TRAZER DADOS DO USUÁRIO
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
    const email = user.email;
    const uid = user.uid;
    }

    // DESLOGAR DA CONTA
    function logout(){
        const auth = getAuth();
        signOut(auth).then(() => {
            navigation.navigate("Login");
        }).catch((error) => {
        
        });
    }
     
    
    return (
        <Container>
            <Header>
                <HeaderInfo>
                    <TitlePerfil>
                        Perfil    
                    </TitlePerfil>
                    <SubTitlePerfil>
                        Dados da sua conta.  
                    </SubTitlePerfil>
                </HeaderInfo>
                <HeaderButtonComeBack > 
                    <ButtonComeBack onPress={() => navigation.navigate("Home")}>
                        <FontAwesomeIcon icon={ faArrowLeft } size={30} color={'white'}   />
                    </ButtonComeBack>
                </HeaderButtonComeBack>
            </Header>
            <Main>
                <PhotoUser>
                    <Photo></Photo>
                </PhotoUser>
                <EmailUser>
                    {user.email}
                </EmailUser>  
                <IdUser>
                    ID: {user.uid}
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


