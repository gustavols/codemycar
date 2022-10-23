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
    ViewScroll,
    ScrollCards,
} from './styles';

import Search from "../../assets/images/search.svg";

import Header from '../../components/Header';
import Cards from '../../components/Cards'

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
                        <SearchText
                        
                        
                        
                        >PROCURAR ERRO</SearchText>
                    </ButtonSearchText>
                </ButtonSearchCode>
            </SearchCode>
            
            <LatestSearchView>
                <LatestSearch>Últimas Buscas</LatestSearch>
            </LatestSearchView>
            <ViewScroll>
                <ScrollCards>
                    <Cards />
                </ScrollCards>
            </ViewScroll>    
        </Container>
    );
}   

function navigate(arg0: string) {
    throw new Error("Function not implemented.");
}
