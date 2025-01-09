import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState("");
  const [limit, setLimits] = useState("");

  const calcLimits = () => {
    if (age <= 0 || isNaN(age)) {
      setLimits("Invalid age");
      return;
    }
    const lowerLimit = Math.round((220 - age) * 0.65);
    const upperLimit = Math.round((220 - age) * 0.85);
    setLimits(`${lowerLimit} - ${upperLimit}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Heart Rate Calculator</Text>
      <Text style={styles.label}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <Button onPress={calcLimits} title="Calculate" />
      <Text style={styles.result}>Limits: {limit}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});
