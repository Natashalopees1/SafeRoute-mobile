import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const emailSalvo = await AsyncStorage.getItem("email");
      const senhaSalva = await AsyncStorage.getItem("senha");

      if (email === emailSalvo && password === senhaSalva) {
        alert(`Bem-vindo, ${emailSalvo}!`);
        navigation.goBack();
      } else {
        alert("Credenciais inválidas. Verifique seu e-mail e senha.");
      }
    } catch (error) {
      alert("Erro ao acessar o armazenamento local.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 Login</Text>

      <Text style={styles.subtitle}>Acesse sua conta para continuar</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#093E61",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: "#093E61",
    paddingVertical: 16,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    elevation: 3,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
