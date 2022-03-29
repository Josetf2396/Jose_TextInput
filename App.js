import React, {useState, useEffect} from 'react';
import {TextInput} from './components/textInput'
import type {Node} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App: () => Node = () => {

  const [values, setValues] = useState({email: '', password: ''});
  const Jose = 'Test';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textOutput}>
      Jose
      </Text>
      
      <TextInput
          style={styles.textInput}
          placeholder={'Input'}
          onChangeText={email =>
            setValues(prevState => ({
              ...prevState,
              email,
            }))
          }
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#daf4fe',
    justifyContent: 'space-around',
    flex: 1,
  },

  textOutput: {
    fontSize:50,
    color:'black',
  },

});

export default App;
