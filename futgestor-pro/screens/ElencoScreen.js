import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { jogadores } from "../data/jogadores";

export default function ElencoScreen({ navigation }) {
  const [emPartida, setEmPartida] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      Alert.alert(
        "Sincronizacao",
        "Dados do plantel sincronizados com o servidor!"
      );
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log(
      `O status do elenco mudou para: ${
        emPartida ? "Em Partida" : "Em Treinamento"
      }`
    );
  }, [emPartida]);

  function abrirDetalhes(jogador) {
    navigation.navigate("Detalhes", {
      nome: jogador.nome,
      posicao: jogador.posicao,
      gols: jogador.gols,
      idade: jogador.idade,
      jogos: jogador.jogos,
      assistencias: jogador.assistencias,
      altura: jogador.altura,
      pePreferido: jogador.pePreferido,
      clubeAnterior: jogador.clubeAnterior,
      historico: jogador.historico,
    });
  }

  const renderJogador = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.82}
      onPress={() => abrirDetalhes(item)}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarTexto}>{item.nome.charAt(0)}</Text>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardNome}>{item.nome}</Text>
        <Text style={styles.cardPosicao}>{item.posicao}</Text>
      </View>

      <View style={styles.golsBox}>
        <Text style={styles.golsNumero}>{item.gols}</Text>
        <Text style={styles.golsLabel}>gols</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        emPartida ? styles.containerPartida : styles.containerTreino,
      ]}
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.titulo}>FutGestor Pro</Text>
        <Text style={styles.subtitulo}>Modulo de scout tecnico do clube</Text>

        <View
          style={[
            styles.statusBox,
            emPartida ? styles.statusBoxPartida : styles.statusBoxTreino,
          ]}
        >
          <Text style={styles.statusRotulo}>Status atual do time</Text>
          <Text style={styles.statusTexto}>
            {emPartida ? "Em Partida Oficial" : "Em Treinamento"}
          </Text>
          <Text style={styles.statusBooleano}>
            emPartida: {emPartida ? "Sim" : "Nao"}
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.botaoToggle,
            emPartida ? styles.botaoTreinamento : styles.botaoPartida,
          ]}
          activeOpacity={0.86}
          onPress={() => setEmPartida((valorAtual) => !valorAtual)}
        >
          <Text style={styles.botaoTexto}>
            {emPartida
              ? "Voltar para Treinamento"
              : "Iniciar Partida Oficial"}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.secaoTitulo}>Plantel ({jogadores.length})</Text>

      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.id}
        renderItem={renderJogador}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  containerTreino: {
    backgroundColor: "#1e293b",
  },
  containerPartida: {
    backgroundColor: "#15803d",
  },
  header: {
    marginBottom: 16,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#dbeafe",
    fontSize: 14,
    marginBottom: 16,
    marginTop: 2,
  },
  statusBox: {
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 12,
    padding: 14,
  },
  statusBoxTreino: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(255, 255, 255, 0.18)",
  },
  statusBoxPartida: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.28)",
  },
  statusRotulo: {
    color: "#dbeafe",
    fontSize: 13,
  },
  statusTexto: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
  },
  statusBooleano: {
    color: "#e2e8f0",
    fontSize: 13,
    marginTop: 4,
  },
  botaoToggle: {
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 14,
  },
  botaoPartida: {
    backgroundColor: "#16a34a",
  },
  botaoTreinamento: {
    backgroundColor: "#dc2626",
  },
  botaoTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  secaoTitulo: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  lista: {
    paddingBottom: 24,
  },
  card: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 3,
    flexDirection: "row",
    marginBottom: 10,
    padding: 14,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  avatar: {
    alignItems: "center",
    backgroundColor: "#0b3d2e",
    borderRadius: 24,
    height: 48,
    justifyContent: "center",
    marginRight: 12,
    width: 48,
  },
  avatarTexto: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  cardInfo: {
    flex: 1,
  },
  cardNome: {
    color: "#0f172a",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardPosicao: {
    color: "#64748b",
    fontSize: 13,
    marginTop: 2,
  },
  golsBox: {
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  golsNumero: {
    color: "#0b3d2e",
    fontSize: 18,
    fontWeight: "bold",
  },
  golsLabel: {
    color: "#64748b",
    fontSize: 10,
  },
});
