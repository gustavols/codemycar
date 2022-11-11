import React from "react";
import {
    Container,
    ContentHeader,
    TitleHeader,
    SubtitleHeader
} from './styles';

export default function Header() {
    return (
        <Container>
            <ContentHeader>
                <TitleHeader>Olá</TitleHeader>
                <SubtitleHeader>Bem vindo ao MyCodeCar</SubtitleHeader>
            </ContentHeader>
        </Container>
    );
}