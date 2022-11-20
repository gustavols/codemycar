import React, { useEffect, useState } from "react";

import { Container, 
         Input, 
         CadastrarErro, 
         CadastrarErroText, 
         ViewForm,
         AreaForm,
         Label,
         TitlePage
} from './styles';
import Header from '../../components/Header';

import firestore from '@react-native-firebase/firestore';
import { Alert } from "react-native";

import RNPickerSelect from 'react-native-picker-select';

export function CreateError({navigation}) {    
    const [brand, setBrand] = useState('');
    const [code, setCode] = useState('');
    const [found, setFound] = useState('');
    const [model, setModel] = useState('');
    const [solution, setSolution] = useState('');


    function handleNewError() {
        firestore()
        .collection('errors')
        .add({
            brand,
            code,
            found,
            model,
            solution
        })
        .then(() => Alert.alert("Erro", "Erro cadastrado com sucesso!", navigation.navigate("Home")))
        .catch((error) => console.log(error))
    }

    return (
            <Container>
                <Header navigation={undefined} />
                <TitlePage>
                    CADASTRE UM CÓDIGO
                </TitlePage>
                <ViewForm>
                    <AreaForm>
                            <Label>MARCA DO CARRO:</Label>
                            <RNPickerSelect
                                placeholder={{ label: "Escolha a marca do carro", value: null }}
                                onValueChange={setBrand}
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
                            />

                        
                            <Label>CÓDIGO DE ERRO:</Label>
                            <Input 
                                placeholder="Digite um código..."
                                type="number"
                                keyboardType="numeric"
                                onChangeText={setCode}
                            />

                            <Label>ERRO ENCONTRADO:</Label>
                            <Input 
                                placeholder="Digite o erro encontrado..."
                                type="text"
                                onChangeText={setFound}
                            />

                            <Label>MODELO DO CARRO:</Label>
                            <Input 
                                placeholder="Digite o modelo do veiculo..."
                                type="text"
                                onChangeText={setModel}
                            />  

                            <Label>SOLUÇÃO DO PROBLEMA:</Label>
                            <Input 
                                placeholder="Digite a solução do problema..."
                                type="text"
                                onChangeText={setSolution}
                            />  


                            <CadastrarErro onPress={handleNewError} >
                                <CadastrarErroText  >
                                    CADASTRAR ERRO
                                </CadastrarErroText>
                            </CadastrarErro>
                    </AreaForm>
                </ViewForm>
            </Container>
    );
}   