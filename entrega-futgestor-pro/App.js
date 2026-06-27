import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ElencoScreen from "./screens/ElencoScreen";
import DetalhesJogadorScreen from "./screens/DetalhesJogadorScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Elenco"
        screenOptions={{
          headerStyle: { backgroundColor: "#0b3d2e" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Elenco"
          component={ElencoScreen}
          options={{ title: "FutGestor Pro - Elenco" }}
        />
        <Stack.Screen
          name="Detalhes"
          component={DetalhesJogadorScreen}
          options={{ title: "Detalhes do Jogador" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
