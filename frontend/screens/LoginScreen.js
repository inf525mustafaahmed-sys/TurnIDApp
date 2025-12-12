import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/login', { username, password });
      if (res.data.success) {
        navigation.navigate('Home', { user: username });
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert('Server error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder='Username' style={styles.input} value={username} onChangeText={setUsername} />
      <TextInput placeholder='Password' style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
      <Button title='Login' onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  title: { fontSize:24, marginBottom:20 },
  input: { width:'100%', borderWidth:1, padding:10, marginBottom:10, borderRadius:5 }
});
