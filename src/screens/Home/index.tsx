import React from "react";
import {
    Container,
    ButtonSearchCode,
    ButtonSearchIcone,
    ButtonSearchText,
    SearchText,
    LatestSearch,
    LatestSearchView,
    SearchCode,
} from './styles';

import Search from "../../assets/images/search.svg";

import Header from '../../components/Header';
import CardLatestSearch from '../../components/CardLatestSearch'

export function Home() {
    return (
        <Container>
            <Header />
            <SearchCode>
                <ButtonSearchCode>
                    <ButtonSearchIcone>
                        <Search width="32" height="32"/>
                    </ButtonSearchIcone>
                    <ButtonSearchText>
                        <SearchText>PROCURE PELO CÓDIGO</SearchText>
                    </ButtonSearchText>
                </ButtonSearchCode>
            </SearchCode>
            <LatestSearchView>
                <LatestSearch>Últimas Buscas</LatestSearch>
            </LatestSearchView> 
            <CardLatestSearch />
        </Container>
    );
}