import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function TelaSobreNos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/Mottu-sense.png")}
        style={styles.logo}
      />

      <Text style={styles.heading}>🚀 Bem-vindo à Mottu Sense</Text>

      <Text style={styles.highlight}>
        Controle inteligente. Gestão eficiente.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎯 Nossa missão</Text>
        <Text style={styles.cardText}>
          Oferecer uma solução tecnológica de ponta que permita o mapeamento
          preciso e automatizado de motos em pátios, promovendo organização,
          controle e eficiência operacional. Nossa missão é tornar o
          monitoramento visual de ativos um processo simples, confiável e
          escalável, atendendo com excelência filiais em todo o Brasil e
          México.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>👥 Quem somos</Text>
        <Text style={styles.cardText}>
          Somos uma equipe multidisciplinar de estudantes e profissionais
          apaixonados por inovação, mobilidade e inteligência operacional.
          Unimos tecnologia, design e estratégia para desenvolver sistemas que
          conectam o mundo físico ao digital, ajudando empresas a gerenciar
          seus ativos com clareza, agilidade e controle.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📦 O que entregamos</Text>
        <Text style={styles.cardText}>
          Nosso sistema transforma dados espaciais em informações acionáveis,
          elevando a gestão de pátios a um novo nível de inteligência.
        </Text>
      </View>

      <Text style={styles.footer}>
        🌐 Junte-se a nós nessa jornada por uma mobilidade mais inteligente!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F0F4F8",
    alignItems: "center",
    padding: 24,
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    marginTop: 30,
    marginBottom: 10,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E3A5F",
    textAlign: "center",
    marginBottom: 10,
  },
  highlight: {
    fontSize: 16,
    color: "#4CAF50",
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#093E61",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 15,
    color: "#4A4A4A",
    lineHeight: 22,
    textAlign: "justify",
  },
  footer: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 40,
    paddingHorizontal: 10,
  },
});
