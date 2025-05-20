import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";

export default function TelaFormulario({ navigation }) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    numeroDeContato: "",
    placaDaMoto: "",
    modeloDaMoto: "",
    estado: "",
    cidade: "",
    seuCEP: "",
    seuEndereco: "",
    observação: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Dados enviados:", form);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📋 Cadastro de Informações</Text>
      <Text style={styles.subtitle}>Preencha os campos abaixo para continuarmos 🚀</Text>

      {Object.entries(form).map(([field, value]) => (
        <View key={field} style={styles.inputBlock}>
          <TextInput
            style={styles.input}
            placeholder={field
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase()) + ":"}
            placeholderTextColor="#999"
            value={value}
            onChangeText={(text) => handleChange(field, text)}
            multiline={field === "observação"}
            numberOfLines={field === "observação" ? 4 : 1}
          />
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>📨 Enviar Dados</Text>
      </TouchableOpacity>

      <View style={styles.previewCard}>
        <Text style={styles.previewTitle}>🧾 Dados Digitados:</Text>
        {Object.entries(form).map(([field, value]) => (
          <Text key={field} style={styles.previewText}>
            <Text style={styles.previewLabel}>
              {field
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
              :
            </Text>{" "}
            {value || "—"}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#F0F4F8",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2A2A2A",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 24,
  },
  inputBlock: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#FFF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#DDD",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: "#4E9F3D",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  previewCard: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 40,
  },
  previewTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  previewText: {
    fontSize: 15,
    color: "#444",
    marginBottom: 6,
  },
  previewLabel: {
    fontWeight: "bold",
    color: "#2A2A2A",
  },
});
