import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import App from '../App'


export default function Titulo() {
  return (
    <View style={styles.container}>
     <Text style = {styles.Titulo}>Luiz Apps</Text> {/*criação do titulo*/}
      
    </View>
  );
}
{/*estilização*/}
const styles = StyleSheet.create({
  container: {      
    flex: 0.2,
    backgroundColor: '#146f99ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titulo: {
    fontSize: 35,
    fontFamily: 'arial'
  },
});
