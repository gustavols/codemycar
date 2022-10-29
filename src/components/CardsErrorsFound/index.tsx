import React, { useEffect, useState } from "react";

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

import api from '../../services/api' 
import { URI } from '../../services/uri';

export default function CardsErrorsFound() {
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        async function loadErrors() {
            const response = await api.get(URI.ERROR);
            setErrors(response.data);
        } 
        loadErrors();            
    }, []);
    
    return (
        <Container>
            {errors.map((error: any) => (
                <Card>
                    <ViewErrorCode>
                        <TitleErrorCode>
                            Código do Erro
                        </TitleErrorCode>
                        <ErrorCode>
                            {error.code_error}
                        </ErrorCode>
                    </ViewErrorCode>
                    <ViewBrand>
                        <TitleBrand>
                            Marca:
                        </TitleBrand>
                        <Brand>
                            {error.brand_car}
                        </Brand>
                    </ViewBrand>
                </Card> 
            ))}    
        </Container>
    );
}