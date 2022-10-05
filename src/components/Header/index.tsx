import React from "react";
import {
    Container,
    ContentHeader,
    TitleHeader,
    ImageHeader,
    ImageView,
    SubtitleHeader
} from './styles';

import UserPhoto from "../../assets/images/LoginGoogle.svg";

export default function Header() {
    return (
        <Container>
            <ContentHeader>
                <TitleHeader>Olá, Gustavo</TitleHeader>
                <SubtitleHeader>Bem vindo ao MyCodeCar</SubtitleHeader>
            </ContentHeader>
            <UserPhoto width="50" height="50" />
        </Container>
    );
}