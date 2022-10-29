import React, { useEffect, useState } from "react";
import {
    Container,
    Main,
    SectionSearchError,
    ViewSearchError,
    InputSearchError,
    ViewFilterSearch,
    FilterSearch,
    SectionErrorFound
} from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFilterList } from '@fortawesome/sharp-solid-svg-icons/faFilterList'



import Header from '../../components/Header';

import CardsErrorsFound from '../../components/CardsErrorsFound';



export function SearchError() {
    return (
        <Container>
            <Header />
            
            <Main>
                <SectionSearchError>
                    <ViewSearchError>
                        <InputSearchError
                            placeholder="DIGITE O CÓDIGO DE ERRO"
                        />
                    </ViewSearchError>
                    <ViewFilterSearch>
                        <FilterSearch>
                            <FontAwesomeIcon icon={ faFilterList } size={35} color={ '#585666' } />
                        </FilterSearch>
                    </ViewFilterSearch>
                </SectionSearchError>

                <SectionErrorFound>
                    <CardsErrorsFound />
                </SectionErrorFound>
            </Main>
          
        </Container>
    );
}   