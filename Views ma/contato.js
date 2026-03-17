import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import App from '../App'
import { Button, TextInput } from 'react-native-web';


export default function Contato() {
  return (
    <View style={styles.container}>
        <Text style= {styles.perfil}>Contato</Text>
     <TextInput
     placeholder='nome: '
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          fontSize: 20
        }}></TextInput>

        <TextInput
     placeholder='Email: '
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          fontSize: 20
        }}></TextInput>

          <TextInput
     placeholder='Mensagem: '
        style={{
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          fontSize: 20
        }}></TextInput>
        
         
        <Button style={styles.botao}
        title='Enviar'
        onPress={() => showAlert('Enviado')}
        ></Button>
        

     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#146f99ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titulo1: {
    flex: 2,
    justifyContent: 'center',
    fontSize: 24,
    fontFamily: 'arial'
  },
 
  
});
