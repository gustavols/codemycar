import React from "react";
import {
    Container,
    Cards,
    CardOptions,
    TitleCard,
    TitlePage,
    ContentHeader,
    TitleHeader,
    SubtitleHeader,
    HeaderSection,
    LogoutHeader,
    LogoutBackground
} from './styles';

import Header from '../../components/Header';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/sharp-solid-svg-icons/faArrowRightFromBracket'
import { faSearch } from '@fortawesome/sharp-solid-svg-icons/faSearch'
import { faAdd } from '@fortawesome/sharp-solid-svg-icons/faAdd'
import { faUser } from '@fortawesome/sharp-solid-svg-icons/faUser'


export function Home({navigation}) {
    return (
        <Container>
            <HeaderSection>
                <ContentHeader>
                    <TitleHeader>CodeMyCar</TitleHeader>
                    <SubtitleHeader>conta conosco, estamos aqui para ajudar</SubtitleHeader>
                </ContentHeader>
                <LogoutHeader>
                    <LogoutBackground onPress={() => navigation.navigate("Perfil")} >
                        <FontAwesomeIcon icon={ faArrowRightFromBracket } size={30} color={'white'} />
                    </LogoutBackground>
                </LogoutHeader>
            </HeaderSection>

            <TitlePage>
                Realize algumas ações:
            </TitlePage>
            <Cards>
                <CardOptions onPress={() => navigation.navigate("SearchError")} >
                    <TitleCard>
                        <FontAwesomeIcon icon={ faSearch } size={25} color={'white'}   />
                    </TitleCard>
                </CardOptions>

                <CardOptions onPress={() => navigation.navigate("CreateError")} >
                    <TitleCard>
                        <FontAwesomeIcon icon={ faAdd } size={25} color={'white'}   />
                    </TitleCard>
                </CardOptions>
                <CardOptions onPress={() => navigation.navigate("Perfil")} >
                    <TitleCard>
                        <FontAwesomeIcon icon={ faUser } size={25} color={'white'}   />
                    </TitleCard>
                </CardOptions>
            </Cards>
        </Container>
    );
}   

