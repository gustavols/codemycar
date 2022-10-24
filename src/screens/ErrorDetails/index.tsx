import React from "react";
import {
    Container,
    Main,
    Information,
    Details,
    CardDetails
} from './styles';

import Header from '../../components/Header';

export function ErrorDetails() {
    return (
        <Container>
            <Header />
            <Main>
                <Information>
                    INFORMAÇÕES
                </Information>
                <Details>
                    <CardDetails>
                    
                    </CardDetails>    
                </Details>
            </Main>
        </Container>
    );
}   

