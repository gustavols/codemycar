import React, { useEffect, useState } from "react";

import { Container, 
         Input, 
         CadastrarErro, 
         CadastrarErroText, 
         ViewForm 
} from './styles';
import Header from '../../components/Header';

import firestore from '@react-native-firebase/firestore';
import { Alert } from "react-native";

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
        .then(() => Alert.alert("Erro", "Erro cadastrado com sucesso!"))
        .catch((error) => console.log(error))
    }

    return (
        <Container>
            <Header />
            <ViewForm>
                    <Input 
                        placeholder="DIGITE A MARCA DO CARRO"
                        type="text"
                        onChangeText={setBrand}
                    />
                    <Input 
                        placeholder="DIGITE O CÓDIGO DE ERRO"
                        type="number"
                        onChangeText={setCode}
                    /> 
                    <Input 
                        placeholder="DIGITE O ERRO ENCONTRADO"
                        type="text"
                        onChangeText={setFound}
                    />
                    <Input 
                        placeholder="DIGITE O MODELO DE CARRO"
                        type="text"
                        onChangeText={setModel}
                    />  
                    <Input 
                        placeholder="DIGITE A SOLUÇÃO DO PROBLEMA"
                        type="text"
                        onChangeText={setSolution}
                    />  
                    <CadastrarErro onPress={handleNewError} >
                        <CadastrarErroText  >
                            CADASTRAR ERRO
                        </CadastrarErroText>
                    </CadastrarErro>
                </ViewForm>
        </Container>
    );
}   