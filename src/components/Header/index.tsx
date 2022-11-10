import React from "react";
import {
    Container,
    ContentHeader,
    TitleHeader,
    SubtitleHeader
} from './styles';

import UserPhoto from "../../assets/images/LoginGoogle.svg";


import firebase from "../../config/firebase";

export default function Header() {


    return (
        <Container>
            <ContentHeader  >
                <TitleHeader>Olá</TitleHeader>
                <SubtitleHeader>Bem vindo ao MyCodeCar</SubtitleHeader>
            </ContentHeader>
        </Container>
    );
}