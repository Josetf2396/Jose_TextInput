import React, {useState} from 'react';
import {TextInput} from 'react-native';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [text , setText] = useState('');
  return (
    <SafeAreaView style = {styles.container}>
      <View >
        <Text style = {styles.textOutput}>
          {text}
        </Text>
        <TextInput style= {styles.TextInput}
          placeholder="Input"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#daf4fe',
    justifyContent: 'space-around',
    flex: 1,
  },

  textOutput: {
    marginHorizontal: 40,
    marginVertical: 30,
    fontSize:50,
    color:'black',
  },

  TextInput: {
    backgroundColor: 'white',
    borderColor: 'black',
    marginLeft: 20,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
  },

});

export default App;
