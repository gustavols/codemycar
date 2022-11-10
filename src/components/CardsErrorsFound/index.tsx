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

import { collection, getDocs } from "firebase/firestore"; 
import db from "../../config/firebase";

export default async function CardsErrorsFound() { 
    const querySnapshot = await getDocs(collection(db, "car"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    
    return (
        <Container>
                    <Card>
                        <ViewErrorCode>
                            <TitleErrorCode>
                                Código do Erro
                            </TitleErrorCode>
                            <ErrorCode>
                                001
                            </ErrorCode>
                        </ViewErrorCode>
                        <ViewBrand>
                            <TitleBrand>
                                Marca:
                            </TitleBrand>
                            <Brand>
                                GM
                            </Brand>
                        </ViewBrand>
                    </Card>
        </Container>
    );
}