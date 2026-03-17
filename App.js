import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './componentes/titulo';
import Profile from './Views ma/profile'
import Contato from './Views ma/contato'

export default function App() {
  return (
    <View style={styles.container}>
     <Titulo></Titulo> {/*Importação do titulo*/}
     {/* <Profile></Profile> Importação do profile */}
     { <Contato></Contato> } {/*Importação do contato*/}

      
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
  
});
