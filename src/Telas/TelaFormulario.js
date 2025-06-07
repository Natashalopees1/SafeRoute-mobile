import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

export default function TelaFormulario() {
  const [form, setForm] = useState({
    tipoDesastre: "Enchente",
    nome: "",
    celular: "",
    data: "",
    hora: "",
    pessoas: "",
    descricao: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      console.log("Formulário enviado:", form);
  
      const sendForm = {
        nome: form.nome,
        telefone: form.celular,
        descricao: form.descricao,
        hora: form.hora,
        data: form.data,
        quantidadePessoas: parseInt(form.pessoas),
        tipoEvento: form.tipoDesastre.toUpperCase() // ex: "ENCHENTE", "DESLIZAMENTO"
      };
  
      const response = await axios.post("http://localhost:8080/alertas", sendForm);
  
      console.log("Resposta da API:", response.data);
      alert("Alerta enviado com sucesso!");
  
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao enviar alerta. Verifique sua conexão.");
    }
  };
  

  const handleCancel = () => {
    setForm({
      tipoDesastre: "Enchente",
      nome: "",
      celular: "",
      data: "",
      hora: "",
      pessoas: "",
      descricao: "",
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📋 Cadastro de ocorrência</Text>

      <Text style={styles.subtitle}>
        Registre rapidamente um desastre natural para ajudar autoridades e equipes de resgate.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>INFORMAÇÕES DO DESASTRE</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Tipo de Desastre</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={form.tipoDesastre}
            onValueChange={(value) => handleChange("tipoDesastre", value)}
            style={styles.picker}
          >
            <Picker.Item label="Enchente" value="Enchente" />
            <Picker.Item label="Deslizamento" value="Deslizamento" />
            <Picker.Item label="Incêndio" value="Incendio" />
            <Picker.Item label="Terremoto" value="Terremoto" />
            <Picker.Item label="Outro" value="Outro" />
          </Picker>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>INFORMAÇÕES PESSOAIS</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        placeholderTextColor="#999"
        value={form.nome}
        onChangeText={(text) => handleChange("nome", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone celular"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        value={form.celular}
        onChangeText={(text) => handleChange("celular", text)}
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.rowItem]}
          placeholder="Data (DD/MM/AAAA)"
          placeholderTextColor="#999"
          value={form.data}
          onChangeText={(text) => handleChange("data", text)}
        />
        <TextInput
          style={[styles.input, styles.rowItem]}
          placeholder="Hora (HH:MM)"
          placeholderTextColor="#999"
          value={form.hora}
          onChangeText={(text) => handleChange("hora", text)}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Quantidade de pessoas"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={form.pessoas}
        onChangeText={(text) => handleChange("pessoas", text)}
      />

      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Descrição da situação"
        placeholderTextColor="#999"
        value={form.descricao}
        onChangeText={(text) => handleChange("descricao", text)}
        multiline
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#D32F2F",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 15,
    color: "#555",
    marginBottom: 24,
  },
  section: {
    backgroundColor: "#FDE0DC",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    color: "#C62828",
    fontWeight: "bold",
    fontSize: 14,
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    color: "#37474F",
    marginBottom: 6,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    backgroundColor: "#FAFAFA",
  },
  picker: {
    height: 48,
    paddingHorizontal: 8,
  },
  input: {
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  textarea: {
    height: 100,
    textAlignVertical: "top",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  rowItem: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#B0BEC5",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButton: {
    flex: 1,
    backgroundColor: "#D32F2F",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
