import React from "react";
import {
    Container,
    ViewSearchError,
    ListErrors,
    InputSearchError
    
} from './styles';

import Header from '../../components/Header';

export function SearchError() {
    return (
        <Container>
            <Header />

            <ViewSearchError>
                <InputSearchError
                    placeholder="DIGITE O CÓDIGO DE ERRO"
                >
                   
                </InputSearchError>
            </ViewSearchError>

            <ListErrors>

            </ListErrors>
    
        </Container>
    );
}   