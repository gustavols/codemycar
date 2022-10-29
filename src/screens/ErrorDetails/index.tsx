import React from "react";

import {
    Container,
    Main,
    Information,
    Details,
    CardDetails,
    TitleCard,
    CardInfo,
    AnswerError,
    ScrollViewDetails
} from './styles';

import Header from '../../components/Header';

export function ErrorDetails() {
    return (
        <Container>
            <Header />
            <Information>
                    INFORMAÇÕES
            </Information>
                <ScrollViewDetails>
                <Main>
                    <Details>
                        <CardDetails>
                            <TitleCard>Código de Erro</TitleCard>
                            <CardInfo>
                                <AnswerError>
                                    010
                                </AnswerError>
                            </CardInfo>    
                        </CardDetails>

                        <CardDetails>
                            <TitleCard>Marca</TitleCard>
                            <CardInfo>
                                <AnswerError>
                                    GM - Chevrolet
                                </AnswerError>
                            </CardInfo>    
                        </CardDetails> 

                        <CardDetails>
                            <TitleCard>Modelo do Carro</TitleCard>
                            <CardInfo>
                                <AnswerError>
                                    Onix LTZ
                                </AnswerError>
                            </CardInfo>    
                        </CardDetails>

                        <CardDetails>
                            <TitleCard>Erro Encontrado</TitleCard>
                            <CardInfo>
                                <AnswerError>
                                    Luz de Freio
                                </AnswerError>
                            </CardInfo>    
                        </CardDetails> 

                        <CardDetails>
                            <TitleCard>Solução</TitleCard>
                            <CardInfo>
                                <AnswerError>
                                    Compra um carro de verdade
                                </AnswerError>
                            </CardInfo>    
                        </CardDetails>
                    </Details>
                </Main>
            </ScrollViewDetails>
        </Container>
    );
}   
