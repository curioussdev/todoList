import React, {useState,} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';

import Task from './components/Task';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask('');
  };

  return (
    <View style={styles.container}>

      { /** Today's Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Tarefas de Hoje</Text>

        <View style={styles.items}>
          {/** here is Where the tasks will go */}

          {
            taskItems.map((item) => (
              <Task text={item} />
            ))
          }
          
          <Task text={'Tarefa Manual'} />

        </View>
      </View>

      {/** write a task  */}
      <View style={{flex: 1, overflow: 'hidden'}}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input}  placeholder={'Escreva uma tarefa'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={ handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
      
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
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    paddingHorizontal: 15,
    width: 250,
    
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 1
  },
  addText: {
    fontSize: 30,
    color: '#55BCF6'
  },

});
