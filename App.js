import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      { /** Today's Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Tarefas de Hoje</Text>

        <View style={styles.items}>
          {/** here is Where the tasks will go */}

          <Task text={'task 1'} />
          <Task text={'task 1'}/>
          

        </View>
      </View>

      {/** write a task  */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input}  placeholder={'Escreva um atarefa'} />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  items: {
    marginTop: 30,
  },

});
