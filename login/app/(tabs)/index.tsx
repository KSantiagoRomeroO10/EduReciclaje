import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, useColorScheme } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const colorScheme = useColorScheme(); // Detecta el esquema de color del dispositivo (claro u oscuro)

  const handleLogin = () => {
    if(username === '' || password === ''){
      Alert.alert('Error', 'Usuario o contraseña vacios.');
    }
    else{
      if (username === 'Santiago' && password === '123456') {
        Alert.alert('Inicio de sesión exitoso', `Bienvenido, ${username}!`);
      } else {
        Alert.alert('Error', 'Usuario o contraseña incorrectos.');
      }
    }
  };

  const isDarkMode = colorScheme === 'dark';

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#1A1C2C' : '#ffffff' }, // Cambia el fondo según el modo
      ]}
    >
      <Text style={[styles.titulo, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
        Iniciar Sesión
      </Text>
      <TextInput
        style={[
          styles.input,
          { backgroundColor: isDarkMode ? '#1A1C2C' : '#f2f2f2', color: isDarkMode ? '#ffffff' : '#000000' },
        ]}
        placeholder="Usuario"
        placeholderTextColor={isDarkMode ? '#bbbbbb' : '#666666'}
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[
          styles.input,
          { backgroundColor: isDarkMode ? '#1A1C2C' : '#f2f2f2', color: isDarkMode ? '#ffffff' : '#000000' },
        ]}
        placeholder="Contraseña"
        placeholderTextColor={isDarkMode ? '#bbbbbb' : '#666666'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Iniciar Sesión"
          onPress={handleLogin}
          color={isDarkMode ? '#A81212' : '#6200ee'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 10,
  },
});
