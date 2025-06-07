import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SafeRoute from "../../src/assets/safeRoute.png";

export default function TelaHome({ navigation }) {
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
        navigation.navigate("TelaPrincipal");
      } else {
        alert("Credenciais inválidas. Verifique seu e-mail e senha.");
      }
    } catch (error) {
      alert("Erro ao acessar o armazenamento local.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={SafeRoute} style={styles.logo} />
        <Text style={styles.title}>Bem-vindo ao Safe Route</Text>

        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#fff"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#fff"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Função em desenvolvimento!")}>
          <Text style={styles.linkText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate("TelaCadastro")}
        >
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f6ff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#455A64",
    width: "100%",
    height: "100%",
    paddingVertical: 40,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowColor: "#000",
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 24,
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    paddingHorizontal: 16,
    color: "#fff",
    marginBottom: 16,
  },
  buttonPrimary: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 12,
  },
  buttonSecondary: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 14,
  },
  buttonText: {
    color: "#E53935",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 12,
    textDecorationLine: "underline",
  },
  smallText: {
    color: "#fff",
    fontSize: 13,
    marginTop: 8,
  },
});
