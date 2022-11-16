import React from "react";
import auth, { firebase } from '@react-native-firebase/auth';

import {
    Container,
    ContentHeader,
    TitleHeader,
    SubtitleHeader,
    HeaderSection,
    LogoutHeader,
    LogoutBackground
} from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/sharp-solid-svg-icons/faArrowRightFromBracket'

export default function Header({navigation}) {     
    const user = firebase.auth().currentUser;
    return (
        <Container>
            <HeaderSection>
                <ContentHeader>
                    <TitleHeader>CodeMyCar</TitleHeader>
                    <SubtitleHeader>conta conosco, estamos aqui para ajudar</SubtitleHeader>
                </ContentHeader>
                <LogoutHeader>
                    <LogoutBackground>
                        <FontAwesomeIcon icon={ faArrowRightFromBracket } size={30} color={'white'} />
                    </LogoutBackground>
                    
                </LogoutHeader>
            </HeaderSection>
           
        </Container>
    );
}