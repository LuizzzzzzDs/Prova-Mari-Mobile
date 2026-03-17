import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import App from '../App'
import { TextInput } from 'react-native-web';


export default function Profile() {
  return (
    <View style={styles.container}>

        <Text style= {styles.perfil}>Perfil</Text>

{/*Criação dos textInputts*/}


     <TextInput
     placeholder='nome: '
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          fontSize: 20
        }}></TextInput>

        <TextInput
     placeholder='Idade: '
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          fontSize: 20
        }}></TextInput>

          <TextInput
     placeholder='Curso ou profissão: '
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          fontSize: 20
        }}></TextInput>
        
          <TextInput
     placeholder='Breve Descrição pessoal'
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          fontSize: 20
        }}></TextInput>
     
      
    </View>
  );
}

{/*estilização*/}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#146f99ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titulo1: {
    justifyContent: 'center',
    fontSize: 24,
    fontFamily: 'arial'
  },
  perfil: {
    flex: 0.3,
    fontSize: 45,
  }
});
