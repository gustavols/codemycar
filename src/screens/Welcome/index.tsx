import React from 'react';

import {
    Container,
    WomanSection,
    LogoContainer,
    TitleSection,
    SectionWelcome,
    Title,
    ButtonWelcome,
    TitleButton
} from './styles';

import Logo from "../../assets/images/WomanPhoto.svg";

export function Welcome({navigation}) {    
    return(
        <Container>
                <WomanSection>
                    <LogoContainer>
                        <Logo width="300" height="300" />
                    </LogoContainer>
                </WomanSection>




                <TitleSection>
                    <Title>
                        Descubra o problema do seu carro
                    </Title>
                </TitleSection>
                <SectionWelcome>
                    <ButtonWelcome onPress={() => navigation.navigate("Login")} >
                        <TitleButton>
                            COMEÇAR AGORA
                        </TitleButton>
                    </ButtonWelcome>
                </SectionWelcome>


        </Container>
        


    );
}