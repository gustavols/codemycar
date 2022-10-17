import React from "react";
import {
    Container,
    WomanSection,
    LogoContainer,
    ViewTitleLogin,
    TitleLogin,
    ButtonLogin,
    ViewButtonLogin,
    TextButtonLogin,
    ViewTextLogin,
    ViewLoginGoogle

} from './styles';

import Logo from "../../assets/images/WomanPhoto.svg";
import LoginGoogle from "../../assets/images/LoginGoogle.svg";

export function Login() {
    return (
        <Container>
            <WomanSection>
                <LogoContainer>
                    <Logo width="350" height="350" />
                </LogoContainer>
            </WomanSection>

            <ViewTitleLogin>
                <TitleLogin>
                    Descubra o problema do seu carro
                </TitleLogin>
            </ViewTitleLogin>

            <ViewButtonLogin>
                <ButtonLogin>
                    <ViewLoginGoogle>
                        <LoginGoogle width="32" height="32.49" />
                    </ViewLoginGoogle>
                    <ViewTextLogin>
                        <TextButtonLogin>Entrar com Google</TextButtonLogin>
                    </ViewTextLogin>
                </ButtonLogin>
            </ViewButtonLogin>
        </Container>
        
    );
}