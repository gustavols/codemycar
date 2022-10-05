import React from "react";

import { ScrollView } from 'react-native';

import {
    Container,
    Card,
    ViewErrorCode,
    TitleErrorCode,
    ErrorCode,
    ViewBrand,
    TitleBrand,
    Brand,
} from './styles';

export default function CardLatestSearch() {
    return (
        <Container>
            <Card>
                <ViewErrorCode>
                    <TitleErrorCode>Código do Erro</TitleErrorCode>
                    <ErrorCode>001</ErrorCode>
                </ViewErrorCode>
                <ViewBrand>
                    <TitleBrand>
                        Marca:
                    </TitleBrand>
                    <Brand>
                        Toyota
                    </Brand>
                </ViewBrand>
            </Card>

            <Card>
                <ViewErrorCode>
                    <TitleErrorCode>Código do Erro</TitleErrorCode>
                    <ErrorCode>001</ErrorCode>
                </ViewErrorCode>
                <ViewBrand>
                    <TitleBrand>
                        Marca:
                    </TitleBrand>
                    <Brand>
                        Toyota
                    </Brand>
                </ViewBrand>
            </Card>

            <Card>
                <ViewErrorCode>
                    <TitleErrorCode>Código do Erro</TitleErrorCode>
                    <ErrorCode>001</ErrorCode>
                </ViewErrorCode>
                <ViewBrand>
                    <TitleBrand>
                        Marca:
                    </TitleBrand>
                    <Brand>
                        Toyota
                    </Brand>
                </ViewBrand>
            </Card>

            <Card>
                <ViewErrorCode>
                    <TitleErrorCode>Código do Erro</TitleErrorCode>
                    <ErrorCode>001</ErrorCode>
                </ViewErrorCode>
                <ViewBrand>
                    <TitleBrand>
                        Marca:
                    </TitleBrand>
                    <Brand>
                        Toyota
                    </Brand>
                </ViewBrand>
            </Card>
        </Container>
    );
}