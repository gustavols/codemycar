import React from "react";
import {
    Container,
    ButtonSearchCode,
    ButtonSearchIcone,
    ButtonSearchText,
    SearchText,
    SearchCode,

} from './styles';

import Search from "../../assets/images/search.svg";

import Header from '../../components/Header';

export function Home({navigation}) {
    return (
        <Container>
            <Header />
            <SearchCode >
                <ButtonSearchCode
                    onPress={() => navigation.navigate("SearchError")}
                >
                    <ButtonSearchIcone>
                        <Search width="32" height="32"/>
                    </ButtonSearchIcone>
                    <ButtonSearchText>
                        <SearchText
                        >PROCURAR ERRO</SearchText>
                    </ButtonSearchText>
                </ButtonSearchCode>
            </SearchCode>
        </Container>
    );
}   

