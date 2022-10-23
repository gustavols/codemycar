import React from "react";
import {
    Container,
    Header,
    TitlePerfil,
    SubTitlePerfil,
    Main,
    PhotoUser,
    NameUser,
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
import LoginGoogle from "../../assets/images/LoginGoogle.svg";

export function Perfil() {
    return (
        <Container>
            <Header>
                <TitlePerfil>
                    Perfil    
                </TitlePerfil>
                <SubTitlePerfil>
                    Dados da sua conta google.  
                </SubTitlePerfil>
            </Header>
            <Main>
                <PhotoUser>
                    <Photo></Photo>
                </PhotoUser>
                <NameUser>
                    Gustavo Santos
                </NameUser>
                <EmailUser>
                    gustavoleandro616@gmail.com
                </EmailUser>    
            </Main>
            <Footer>
                <ViewButtonDesconnect>
                    <ButtonDesconnect>
                        <ViewIconDesconnect>
                            <Desconnect width="32" height="32" />
                        </ViewIconDesconnect>
                        <ViewTextDesconnect>
                            <TextButtonDesconnect>DESCONECTAR</TextButtonDesconnect>
                        </ViewTextDesconnect>
                    </ButtonDesconnect>
                </ViewButtonDesconnect>
            </Footer>
        </Container>
    );
}   

