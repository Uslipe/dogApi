import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, onClickHandler, Image} from 'react-native';



export default function Pesquisar(){

    const [racaGatos, setRacaGatos] = useState('');
    const [gatos, setGatos] = useState([]);
    console.log(gatos)

    const getGatos = async () => {
     try {
      const response = await fetch(`https://dog.ceo/api/breed/${racaGatos}/images/random`)

      const json = await response.json();
      setGatos(json.gatos);
    } 
    
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getGatos();
  }, []);

    return(

        //Campo de Input + Botão
        <View style={styles.container}>

            <TextInput
                style={{borderColor:"gray", padding:20, borderRadius:16, borderWidth:1, margin:16}}
                placeholder="Digite aqui"
                onChangeText={text => setRacaGatos(text)}>
                
            </TextInput>

            <Button onPress={onClickHandler} title='Buscar'></Button>

            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    butao: {
    }
})