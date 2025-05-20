import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

export default function TelaHome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../assets/Mottu-sense.png")}
          style={styles.logo}
        />

        <Text style={styles.subtitle}>
          Controle total da sua frota na palma da mão.
        </Text>

        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate("TelaLogin")}
        >
          <Text style={styles.buttonTextPrimary}>🔐 Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate("TelaCadastro")}
        >
          <Text style={styles.buttonTextPrimary}>📝 Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate("TelaPrincipal")}
        >
          <Text style={styles.buttonTextSecondary}>📖 Mais sobre nós</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate("TelaParticipantes")}
        >
          <Text style={styles.buttonTextSecondary}>👥 Participantes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate("TelaFormulario")}
        >
          <Text style={styles.buttonTextSecondary}>🧾 Formulário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
    paddingBottom: 40,
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: "#2C3E50",
    textAlign: "center",
    lineHeight: 26,
    maxWidth: 320,
    marginBottom: 24,
    fontWeight: "500",
  },
  buttonPrimary: {
    backgroundColor: "#093E61",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 14,
    width: "100%",
    alignItems: "center",
    elevation: 3,
  },
  buttonSecondary: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#093E61",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 14,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    elevation: 1,
  },
  buttonTextPrimary: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  buttonTextSecondary: {
    color: "#093E61",
    fontWeight: "600",
    fontSize: 16,
  },
});
