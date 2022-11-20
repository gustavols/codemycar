import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

import {
    Container,
    Input,
    CadastrarErro,
    CadastrarErroText,
    ViewForm,
    AreaForm,
    Label,
    TitlePage,
    InputNone
} from './styles';
import Header from '../../components/Header';

import firestore from '@react-native-firebase/firestore';
import { Alert } from "react-native";

import RNPickerSelect from 'react-native-picker-select';

export function EditError({ navigation, route}) {

    const idError = route.params.id   
    const [codeEdit, setcodeEdit] = useState(route.params.code)
    const [brandEdit, setbrandEdit] = useState(route.params.brand)
    const [foundEdit, setfoundEdit] = useState(route.params.found)
    const [modelEdit, setmodelEdit] = useState(route.params.model)
    const [solutionEdit, setsolutionEdit] = useState(route.params.solution)

    function handleEditError(code, brand, found, model, solution ) {
        firestore()
            .collection('errors')
            .doc(idError)
            .update({
                brand: brand,
                code: code,
                found: found,
                model: model,
                solution: solution
            })
            .then(() => Alert.alert("Erro", "Erro atualizado com sucesso!", navigation.navigate("SearchError")))
            .catch((error) => console.log(error))
    }

    return (
        <Container>
            <Header navigation={undefined} />
            <TitlePage>
                ATUALIZE OS DADOS
            </TitlePage>
            <ViewForm>
                <AreaForm>
                    <Label>MARCA DO CARRO:</Label>
                    <RNPickerSelect
                        placeholder={{ label: "Escolha a marca do carro" }}
                        items={[
                            { label: 'Bmw', value: 'Bmw' },
                            { label: 'GM - Chevrolet', value: 'Chevrolet' },
                            { label: 'Fiat', value: 'Fiat' },
                            { label: 'Audi', value: 'Audi' },
                            { label: 'Honda', value: 'Honda' },
                            { label: 'Land Rover', value: 'Landrover' },
                            { label: 'Lexus', value: 'Lexus' },
                            { label: 'Nissan', value: 'Nissan' },
                            { label: 'Subaru', value: 'Subaru' },
                            { label: 'Toyota', value: 'Toyota' },
                            { label: 'Volkswagen', value: 'Volkswagen' },
                        ]}
                        value={brandEdit}
                        onValueChange={setbrandEdit}
                    />

                    <Label>CÓDIGO DE ERRO:</Label>
                    <Input
                        type="number"
                        keyboardType="numeric"
                        value={codeEdit}
                        onChangeText={setcodeEdit}
                    />

                    <Label>ERRO ENCONTRADO:</Label>
                    <Input
                        type="text"
                        value={foundEdit}
                        onChangeText={setfoundEdit}
                    />

                    <Label>MODELO DO CARRO:</Label>
                    <Input
                        type="text"
                        value={modelEdit}
                        onChangeText={setmodelEdit}
                    />

                    <Label>SOLUÇÃO DO PROBLEMA:</Label>
                    <Input
                        type="text"
                        value={solutionEdit}
                        onChangeText={setsolutionEdit}
                    />

                    <CadastrarErro
                    
                    onPress={()=>{
                        handleEditError(codeEdit, brandEdit, foundEdit, modelEdit, solutionEdit )
                      }}
                    >
                        <CadastrarErroText  >
                            ATUALIZAR ERRO
                        </CadastrarErroText>
                    </CadastrarErro>
                </AreaForm>
            </ViewForm>
        </Container>
    );
}   