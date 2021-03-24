import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import  Dashboard  from './components/dashboard/Dashboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
