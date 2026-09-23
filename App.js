import { StyleSheet, Text, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style = {styles.container}>
      <SafeAreaView>
          <Text style = {styles.titulo}> Administrador de citas {''}
            <Text style = {styles.tituloBold}> Veterinaria </Text>
          </Text>

          <Pressable style = {styles.btnNuevaCita}>
            <Text style = {styles.btnTextNuevaCita}> Nueva cita </Text>
          </Pressable>

      </SafeAreaView>
      <StatusBar style="auto"/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6d28d9'
  },
  btnNuevaCita: {
    backgroundColor: '#6d28d9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextNuevaCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,

  }
})