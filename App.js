import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaHome from "./src/Telas/TelaHome";
import TelaCadastro from "./src/Telas/TelaCadastro";
import TelaPrincipal from "./src/Telas/TelaPrincipal";
import TelaParticipantes from  "./src/Telas/TelaParticipantes";
import TelaFormulario from  "./src/Telas/TelaFormulario";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaHome">
        <Stack.Screen
          name="TelaHome"
          component={TelaHome}
          options={{ headerShown: false }} // Oculta o cabeçalho padrão
        />
        <Stack.Screen
          name="TelaCadastro"
          component={TelaCadastro}
          options={{ title: "Cadastro" }} // Define o título da tela
        />
         <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipal}
          options={{ title: "Home" }} // Define o título da tela
        />
         <Stack.Screen
          name="TelaParticipantes"
          component={TelaParticipantes}
          options={{ title: "Participantes" }} // Define o título da tela
        />
        <Stack.Screen
          name="TelaFormulario"
          component={TelaFormulario}
          options={{ title: "Formulario" }} // Define o título da tela
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}