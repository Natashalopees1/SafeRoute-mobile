import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function TelaParticipantes() {
  const participantes = [
    {
      nome: "Natasha Lopes",
      rm: "RM554816",
      foto: require("../assets/natasha.png"),
      funcao: "Desenvolvedora full stack",
    },
    {
      nome: "Bárbara Dias",
      rm: "RM556974",
      foto: require("../assets/barbara.png"),
      funcao: "Desenvolvedora full stack",
    },
    {
      nome: "Juan Pablo",
      rm: "RM557727",
      foto: require("../assets/juan.png"),
      funcao: "Desenvolvedor full stack",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nossa Equipe</Text>
      <Text style={styles.subtitle}>Conheça os responsáveis pelo projeto</Text>

      <View style={styles.cardContainer}>
        {participantes.map((p, index) => (
          <View key={index} style={styles.card}>
            <Image source={p.foto} style={styles.avatar} />
            <Text style={styles.name}>{p.nome}</Text>
            <Text style={styles.rm}>{p.rm}</Text>
            <Text style={styles.funcao}>{p.funcao}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#E53935", // vermelho principal
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    alignItems: "center",
    paddingVertical: 22,
    paddingHorizontal: 18,
    marginBottom: 20,
    width: 170,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#E53935",
    marginBottom: 12,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1E1E1E",
    textAlign: "center",
  },
  rm: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
    marginBottom: 4,
  },
  funcao: {
    fontSize: 13,
    fontWeight: "600",
    color: "#E53935",
    textAlign: "center",
    marginTop: 4,
  },
});
