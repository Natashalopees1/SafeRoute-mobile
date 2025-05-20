import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TelaCadastro({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);

  const handleRegister = async () => {
    if (!name || !email || !password || !cep) {
      Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos!");
      return;
    }

    try {
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("senha", password);
      Alert.alert("Cadastro realizado", `Usuário ${email} cadastrado com sucesso!`);
      navigation.goBack();
    } catch (e) {
      Alert.alert("Erro", "Erro ao salvar dados localmente.");
    }
  };

  const fetchAddress = async () => {
    if (cep.length !== 8) {
      Alert.alert("Erro", "Por favor, insira um CEP válido com 8 dígitos.");
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        Alert.alert("Erro", "CEP não encontrado.");
      } else {
        setAddress(response.data);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar o endereço.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Cadastro</Text>
      <Text style={styles.subtitle}>Preencha seus dados para continuar</Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome completo"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Crie uma senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Seu CEP"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.buttonOutline} onPress={fetchAddress}>
        <Text style={styles.buttonTextOutline}>🔍 Buscar Endereço</Text>
      </TouchableOpacity>

      {address && (
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>📍 Endereço localizado:</Text>
          <Text style={styles.addressText}>Bairro: {address.bairro}</Text>
          <Text style={styles.addressText}>Cidade: {address.localidade}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.buttonFilled} onPress={handleRegister}>
        <Text style={styles.buttonTextFilled}>✅ Cadastrar</Text>
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
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#DDD",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonOutline: {
    borderWidth: 1.5,
    borderColor: "#093E61",
    paddingVertical: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },
  buttonTextOutline: {
    color: "#093E61",
    fontWeight: "600",
    fontSize: 16,
  },
  buttonFilled: {
    backgroundColor: "#093E61",
    paddingVertical: 16,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    elevation: 3,
    marginTop: 10,
  },
  buttonTextFilled: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  addressContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  addressTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
    color: "#093E61",
  },
  addressText: {
    fontSize: 15,
    color: "#444",
    marginBottom: 4,
  },
});
