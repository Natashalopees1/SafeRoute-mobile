import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function TelaParticipantes({ navigation }) {
  const participantes = [
    {
      nome: "Natasha Lopes",
      rm: "RM554816",
      foto: require("../assets/natasha.png"),
    },
    {
      nome: "Bárbara Dias",
      rm: "RM556974",
      foto: require("../assets/barbara.png"),
    },
    {
      nome: "Juan Pablo",
      rm: "RM557727",
      foto: require("../assets/juan.png"),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>👩‍💻 Participantes do Projeto</Text>

      {participantes.map((participante, index) => (
        <View key={index} style={styles.card}>
          <Image source={participante.foto} style={styles.avatar} />
          <Text style={styles.name}>{participante.nome}</Text>
          <Text style={styles.rm}>RM: {participante.rm}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#F0F4F8",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#093E61",
    marginBottom: 25,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    maxWidth: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#4CAF50",
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: 6,
    textAlign: "center",
  },
  rm: {
    fontSize: 15,
    color: "#4CAF50",
    textAlign: "center",
  },
});
