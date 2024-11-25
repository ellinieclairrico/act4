// components/Login.js
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Alert, ScrollView, KeyboardAvoidingView, Platform, Image, TouchableOpacity } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please fill in both fields');
    } else {
      Alert.alert('Success', `Logged in as ${username}`);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            mode="outlined"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            mode="outlined"
          />

          <PaperButton mode="contained" onPress={handleLogin} style={styles.button}>
            Login
          </PaperButton>

          {/* Register Here Button */}
          <PaperButton
            mode="contained"
            onPress={() => navigation.navigate('Registration')}
            style={[styles.button, styles.registerButton]}
          >
            Register Here
          </PaperButton>

          <View style={styles.linkContainer}>
            <Text onPress={() => navigation.navigate('PasswordRecovery')} style={styles.link}>Forgot Password?</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 32,
    position: 'relative', 
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    color: '#800000',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#800000',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
  },
  registerButton: {
    marginTop: 8, // Adds space between the buttons
  },
  linkContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  link: {
    color: '#800000',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginTop: 8,
  },
});

export default Login;
