import React from "react";
import {
    Container,
    Cards,
    CardOptions,
    TitleCard,
    TitlePage
} from './styles';

import Header from '../../components/Header';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/sharp-solid-svg-icons/faSearch'
import { faAdd } from '@fortawesome/sharp-solid-svg-icons/faAdd'
import { faUser } from '@fortawesome/sharp-solid-svg-icons/faUser'

export function Home({navigation}) {
    return (
        <Container>
            <Header navigation={undefined} />
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

