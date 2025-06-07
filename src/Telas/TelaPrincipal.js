import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

export default function TelaAbrigos({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View contentContainerStyle={styles.flexitems}>

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Olá, cidadão!</Text>
          <Text style={styles.subTitle}>Confira os abrigos próximos em tempo real</Text>
        </View>

        <View style={styles.filterWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterContainer}
          >
            <TouchableOpacity style={styles.filterActive}>
              <Text style={styles.filterTextActive}>Meus Abrigos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filter}>
              <Text style={styles.filterText}>Abrigos Públicos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filter}>
              <Text style={styles.filterText}>Comunidade</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filter}>
              <Text style={styles.filterText}>Escolas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filter}>
              <Text style={styles.filterText}>Hospitais</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filter}>
              <Text style={styles.filterText}>Pontos de Apoio</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>


        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>🛖 Abrigo Z</Text>
            <Text style={styles.cardSub}>Escola Estadual Maria Luz</Text>
            <Text style={styles.cardInfo}>📍 2,5 km - Capacidade: 120 pessoas</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>🏥 Abrigo X</Text>
            <Text style={styles.cardSub}>Ginásio Municipal</Text>
            <Text style={styles.cardInfo}>📍 3,1 km - Capacidade: 180 pessoas</Text>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>Atualizações</Text>
          <View style={styles.progressCard}>
            <Text style={styles.progressTitle}>⚠️ Aviso de enchente</Text>
            <Text style={styles.progressInfo}>Atualizado há 2 horas</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("TelaPrincipal")}>
          <Text style={styles.navItem}>🏠</Text> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TelaParticipantes")}>
          <Text style={styles.navItem}>👥</Text> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TelaFormulario")}>
          <Text style={styles.navItem}>🚨</Text> 
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  filterWrapper: {
    marginBottom: 20,
  },

  filterContainer: {
    flexDirection: "row",
    gap: 12,
    paddingRight: 12,
  },

  container: {
    flexGrow: 1,
    backgroundColor: "#F4F6FA",
    paddingVertical: 32,
    paddingHorizontal: 24,
    flexDirection: 'column'
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1E1E2F",
  },
  subTitle: {
    fontSize: 16,
    color: "#888",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: "10px"
  },
  filter: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    backgroundColor: "#E0E0E0",
    borderRadius: 20,
  },
  filterActive: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    backgroundColor: "#E53935",
    borderRadius: 20,
  },
  filterText: {
    color: "#555",
    fontWeight: "500",
  },
  filterTextActive: {
    color: "#FFF",
    fontWeight: "600",
  },
  cardsContainer: {
    gap: 16,
  },
  card: {
    backgroundColor: "#E53935",
    borderRadius: 20,
    padding: 20,
  },
  cardTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  cardSub: {
    color: "#FFE",
    fontSize: 16,
    marginBottom: 8,
  },
  cardInfo: {
    color: "#FFDCDC",
    fontSize: 14,
  },
  progressContainer: {
    marginTop: 200,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E1E2F",
    marginBottom: 10,
  },
  progressCard: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#E53935",
  },
  progressInfo: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 32,
    paddingVertical: 16,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderColor: "#EEE",
    borderRadius: 20,
  },
  navItem: {
    fontSize: 24,
  },
});
