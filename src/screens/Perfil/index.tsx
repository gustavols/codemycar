import React from "react";
import auth, { firebase } from '@react-native-firebase/auth';

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


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/sharp-solid-svg-icons/faArrowLeft'
import { faUserAstronaut } from '@fortawesome/sharp-solid-svg-icons/faUserAstronaut'
import { faRightFromBracket } from '@fortawesome/sharp-solid-svg-icons/faRightFromBracket'

export function Perfil({navigation}) {
    const user = firebase.auth().currentUser;
    
    // DESLOGAR DA CONTA
    function logout(){
        auth()
        .signOut()
        .then(() => navigation.navigate("Login"));
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
                    <FontAwesomeIcon icon={ faUserAstronaut } size={100} color={'white'}   />
                </PhotoUser>
                <EmailUser>
                    {user.email}
                </EmailUser>  
                <IdUser>
                    {user.uid}
                </IdUser>    
            </Main>
            <Footer>
                <ViewButtonDesconnect>
                    <ButtonDesconnect onPress={() => {logout()}} >
                        <ViewIconDesconnect>
                        <FontAwesomeIcon icon={ faRightFromBracket } size={32} color={'#FFAC4A'}   />
                        </ViewIconDesconnect>
                        <ViewTextDesconnect>
                            <TextButtonDesconnect>
                                DESCONECTAR
                            </TextButtonDesconnect>
                        </ViewTextDesconnect>
                    </ButtonDesconnect>
                </ViewButtonDesconnect>
            </Footer>
        </Container>
    );
}   


