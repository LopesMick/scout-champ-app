import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  SafeAreaView,
  StatusBar,
} from "react-native";

const jogadores = [
  {
    id: "1",
    nome: "Lucas Andrade",
    posicao: "Atacante",
    gols: 12,
    idade: 24,
    assistencias: 5,
    notaTecnica: 8.7,
    jogos: 22,
    altura: "1.82m",
    pePreferido: "Direito",
    clubeAnterior: "Atlético Nacional FC",
  },
  {
    id: "2",
    nome: "Rafael Lima",
    posicao: "Meio-campo",
    gols: 7,
    idade: 27,
    assistencias: 11,
    notaTecnica: 8.3,
    jogos: 25,
    altura: "1.78m",
    pePreferido: "Esquerdo",
    clubeAnterior: "União Esportiva",
  },
  {
    id: "3",
    nome: "Bruno Santos",
    posicao: "Zagueiro",
    gols: 2,
    idade: 29,
    assistencias: 1,
    notaTecnica: 7.9,
    jogos: 24,
    altura: "1.89m",
    pePreferido: "Direito",
    clubeAnterior: "Sport Recife B",
  },
  {
    id: "4",
    nome: "Matheus Rocha",
    posicao: "Goleiro",
    gols: 0,
    idade: 31,
    assistencias: 0,
    notaTecnica: 8.5,
    jogos: 26,
    altura: "1.91m",
    pePreferido: "Direito",
    clubeAnterior: "Vitória SC",
  },
  {
    id: "5",
    nome: "Diego Martins",
    posicao: "Lateral",
    gols: 4,
    idade: 22,
    assistencias: 8,
    notaTecnica: 8.1,
    jogos: 23,
    altura: "1.75m",
    pePreferido: "Esquerdo",
    clubeAnterior: "Juventude Sub-23",
  },
];

export default function ElencoScreen({ navigation }) {
  const [emPartida, setEmPartida] = useState(false);

  // useEffect obrigatório - executado uma vez na montagem
  useEffect(() => {
    Alert.alert(
      "Sincronização",
      "Dados do plantel sincronizados com o servidor!"
    );
  }, []);

  // useEffect que monitora mudanças em emPartida
  useEffect(() => {
    if (emPartida) {
      console.log("O status do elenco mudou para: Em Partida");
    } else {
      console.log("O status do elenco mudou para: Em Treinamento");
    }
  }, [emPartida]);

  const renderJogador = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Detalhes", { jogador: item })}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {item.nome.charAt(0).toUpperCase()}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.cardNome}>{item.nome}</Text>
        <Text style={styles.cardPosicao}>{item.posicao}</Text>
      </View>
      <View style={styles.golsBadge}>
        <Text style={styles.golsBadgeNum}>{item.gols}</Text>
        <Text style={styles.golsBadgeLabel}>gols</Text>
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
        <Text style={styles.subtitulo}>Módulo de Scout Técnico</Text>

        <View
          style={[
            styles.statusBox,
            emPartida ? styles.statusBoxPartida : styles.statusBoxTreino,
          ]}
        >
          <Text style={styles.statusLabel}>Status do elenco:</Text>
          <Text style={styles.statusValor}>
            {emPartida ? "Em Partida Oficial" : "Em Treinamento"}
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.botao,
            emPartida ? styles.botaoTreino : styles.botaoPartida,
          ]}
          onPress={() => setEmPartida(!emPartida)}
          activeOpacity={0.85}
        >
          <Text style={styles.botaoTexto}>
            {emPartida ? "Encerrar Partida" : "Iniciar Partida Oficial"}
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
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 16 },
  containerTreino: { backgroundColor: "#1e293b" },
  containerPartida: { backgroundColor: "#15803d" },
  header: { marginBottom: 16 },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 0.5,
  },
  subtitulo: {
    fontSize: 14,
    color: "#cbd5e1",
    marginBottom: 16,
  },
  statusBox: {
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  statusBoxTreino: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderColor: "rgba(255,255,255,0.15)",
  },
  statusBoxPartida: {
    backgroundColor: "rgba(0,0,0,0.25)",
    borderColor: "rgba(255,255,255,0.3)",
  },
  statusLabel: { color: "#e2e8f0", fontSize: 13 },
  statusValor: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
  },
  botao: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoPartida: { backgroundColor: "#16a34a" },
  botaoTreino: { backgroundColor: "#dc2626" },
  botaoTexto: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  secaoTitulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 4,
  },
  lista: { paddingBottom: 24 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#0b3d2e",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  cardNome: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  cardPosicao: { fontSize: 13, color: "#64748b", marginTop: 2 },
  golsBadge: {
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  golsBadgeNum: { fontSize: 18, fontWeight: "bold", color: "#0b3d2e" },
  golsBadgeLabel: { fontSize: 10, color: "#64748b" },
});
