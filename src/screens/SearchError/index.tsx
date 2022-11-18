import React, { Children, useEffect, useState } from "react";
import { Alert } from "react-native";

import firestore from '@react-native-firebase/firestore'

import {
    Container,
    Main,
    SectionSearchError,
    ViewSearchError,
    InputSearchError,
    ViewFilterSearch,
    FilterSearch,
    SectionErrorFound,
    Card,
    HeaderCard,
    Code,
    Brand,
    ContentCard,
    Model,
    Found,
    Solution,
    TitleCode,
    DataCode,
    TitleModel,
    DataModel,
    TitleFound,
    DataFound,
    TitleSolution,
    DataSolution,
    CardList,
    Hr,
    Delete
} from './styles';
import Header from '../../components/Header';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFilterList } from '@fortawesome/sharp-solid-svg-icons/faFilterList'
import { faTrash } from '@fortawesome/sharp-solid-svg-icons/faTrash'
import { QuerySnapshot } from "firebase/firestore";

import { OrderProps } from '../../components/Controllers/Order/index'


import Bmw from '../../assets/images/bmw.svg'
import Chevrolet from '../../assets/images/chevrolet.svg'
import Audi from '../../assets/images/audi.svg'
import Fiat from '../../assets/images/fiat.svg'
import Honda from '../../assets/images/honda.svg'
import Landrover from '../../assets/images/landrover.svg'
import Lexus from '../../assets/images/lexus.svg'
import Nissan from '../../assets/images/nissan.svg'
import Subaru from '../../assets/images/subaru.svg'
import Toyota from '../../assets/images/toyota.svg'
import Volkswagen from '../../assets/images/volkswagen.svg'
import { IdUser } from "../Perfil/styles";


export function SearchError() {
    const [isLoading, setIsLoading] = useState(false);
    const [orders, setOrders] = useState<OrderProps[]>([]);


    useEffect(() => {

        setIsLoading(true);

        const subscribe = firestore()
            .collection('errors')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as OrderProps[];
                setOrders(data);
                setIsLoading(false);

            });
        return () => subscribe();
    }, []);

    
    function deleteError(){
        firestore()
        .collection('errors')
        .doc('id do documento')
        .delete()
        .then(() => {
            Alert.alert('Erro excluido com sucesso!');
        });
    } 

    return (
        <Container>
            <Header navigation={undefined} />
            <Main>
                <SectionSearchError>
                                <ViewSearchError>
                                    <InputSearchError
                                        placeholder="PROCURE PELO MODELO"
                                    />
                                </ViewSearchError>
                                <ViewFilterSearch>
                                    <FilterSearch>
                                        <FontAwesomeIcon icon={ faFilterList } size={35} color={ '#585666' } />
                                    </FilterSearch>
                                </ViewFilterSearch>
                </SectionSearchError> 
                <CardList>
                    {orders.map((data: any) => (
                        <Card key={data.id} >
                            <HeaderCard>
                                <Code>
                                    <TitleCode>
                                        Código de Erro:
                                    </TitleCode>
                                    <DataCode>
                                        {data.code}
                                    </DataCode>
                                </Code>
                                <Brand>
                                    {data.brand == 'Bmw' &&
                                        <Bmw width={60} />
                                    }

                                    {data.brand == 'Chevrolet' &&
                                        <Chevrolet  width={60} />
                                    }

                                    {data.brand == 'Fiat' &&
                                        <Fiat width={60} />
                                    }

                                    {data.brand == 'Audi' &&
                                        <Audi width={60} />
                                    }

                                    {data.brand == 'Honda' &&
                                        <Honda width={60} />
                                    }

                                    {data.brand == 'Landrover' &&
                                        <Landrover width={60} />
                                    }

                                    {data.brand == 'Lexus' &&
                                        <Lexus width={60} />
                                    }

                                    {data.brand == 'Nissan' &&
                                        <Nissan width={60} />
                                    }

                                    {data.brand == 'Subaru' &&
                                        <Subaru width={60} />
                                    }

                                    {data.brand == 'Toyota' &&
                                        <Toyota width={60} />
                                    }

                                    {data.brand == 'Volkswagen' &&
                                        <Volkswagen width={60} />
                                    }

                                </Brand>
                            </HeaderCard>
                            <ContentCard>
                                <Model>
                                    <TitleModel>
                                        Modelo:
                                    </TitleModel>
                                    <DataModel>
                                        {data.model}
                                    </DataModel>
                                </Model>
                                <Hr/>
                                <Found>
                                    <TitleFound>
                                        ERRO ENCONTRADO:
                                    </TitleFound>
                                    <DataFound>
                                        {data.found}
                                    </DataFound>
                                </Found>
                                <Hr/>
                                <Solution>
                                    <TitleSolution>
                                        SOLUÇÃO DO PROBLEMA:
                                    </TitleSolution>
                                    <DataSolution>
                                        {data.solution}
                                    </DataSolution>
                                </Solution>
                                <Delete onPress={deleteError} >
                                    <FontAwesomeIcon icon={ faTrash } size={25} color={ '#ffffff' } />
                                </Delete>
                            </ContentCard>
                        </Card>
                    ))}
                </CardList>
            </Main>
        </Container>
    );
}   