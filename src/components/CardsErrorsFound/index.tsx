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

import firebase from "../../config/firebase";

export default function CardsErrorsFound() {
    const [items, setItems] = useState([]);
    const databse = firebase.firestore()
    
    useEffect(() => {
        databse.collection("Errors").onSnapshot((query) => {
        const list = [];
        query.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id });
        });
            setItems(list);
        });  
    }, []);

    return (
        <Container
            data={ items }
            renderItem={( { item } )=>{
                return(
                    <Card>
                    <ViewErrorCode>
                        <TitleErrorCode>
                            Código do Erro
                        </TitleErrorCode>
                        <ErrorCode>
                            {item.code}
                        </ErrorCode>
                    </ViewErrorCode>
                    <ViewBrand>
                        <TitleBrand>
                            Marca:
                        </TitleBrand>
                        <Brand>
                            {item.brand}
                        </Brand>
                    </ViewBrand>
                </Card>
                )
            }}>
        </Container>
    );
}