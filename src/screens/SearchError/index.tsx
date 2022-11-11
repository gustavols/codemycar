import React, { useEffect, useState } from "react";
import {
    Container,
    Main,
    SectionSearchError,
    ViewSearchError,
    InputSearchError,
    ViewFilterSearch,
    FilterSearch,
    SectionErrorFound,
    Card,
    ViewErrorCode,
    TitleErrorCode,
    ErrorCode,
    ViewBrand,
    TitleBrand,
    Brand,
} from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFilterList } from '@fortawesome/sharp-solid-svg-icons/faFilterList'

import Header from '../../components/Header';

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
                            <Card>
                                <ViewErrorCode>
                                    <TitleErrorCode>
                                        Código do Erro
                                    </TitleErrorCode>
                                    <ErrorCode >
                                        Opa
                                    </ErrorCode>
                                </ViewErrorCode>
                                <ViewBrand>
                                    <TitleBrand>
                                        Marca:
                                    </TitleBrand>
                                    <Brand>
                                        Opa
                                    </Brand>
                                </ViewBrand>
                            </Card>
                    </SectionErrorFound>
            </Main>     
        </Container>
    );
}   