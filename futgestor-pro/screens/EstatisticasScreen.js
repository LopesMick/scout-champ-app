import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { jogadores } from "../data/jogadores";

export default function EstatisticasScreen({ navigation }) {
  const [stats, setStats] = useState(null);

  // useEffect calcula as estatísticas gerais ao montar a tela
  useEffect(() => {
    const totalGols = jogadores.reduce((acc, j) => acc + (j.gols ?? 0), 0);
    const totalAssist = jogadores.reduce(
      (acc, j) => acc + (j.assistencias ?? 0),
      0
    );
    const totalJogos = jogadores.reduce((acc, j) => acc + (j.jogos ?? 0), 0);
    const mediaNota =
      jogadores.reduce((acc, j) => acc + (j.notaTecnica ?? 0), 0) /
      jogadores.length;

    const artilheiro = [...jogadores].sort((a, b) => b.gols - a.gols)[0];
    const garcom = [...jogadores].sort(
      (a, b) => (b.assistencias ?? 0) - (a.assistencias ?? 0)
    )[0];
    const melhorNota = [...jogadores].sort(
      (a, b) => (b.notaTecnica ?? 0) - (a.notaTecnica ?? 0)
    )[0];

    setStats({
      totalGols,
      totalAssist,
      totalJogos,
      mediaNota,
      artilheiro,
      garcom,
      melhorNota,
      totalAtletas: jogadores.length,
    });

    console.log("Estatísticas gerais calculadas:", { totalGols, mediaNota });
  }, []);

  if (!stats) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.carregando}>Carregando estatísticas...</Text>
      </SafeAreaView>
    );
  }

  const mediaCor =
    stats.mediaNota >= 8.5
      ? "#16a34a"
      : stats.mediaNota >= 7.5
      ? "#ca8a04"
      : "#dc2626";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.heroCard}>
          <Text style={styles.heroTitulo}>Estatísticas do Time</Text>
          <Text style={styles.heroSub}>
            Visão consolidada do plantel — {stats.totalAtletas} atletas
            monitorados
          </Text>
        </View>

        {/* Totais */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Totais da Temporada</Text>
          <View style={styles.grid}>
            <View style={styles.box}>
              <Text style={styles.boxNum}>{stats.totalGols}</Text>
              <Text style={styles.boxLabel}>Gols</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxNum}>{stats.totalAssist}</Text>
              <Text style={styles.boxLabel}>Assistências</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxNum}>{stats.totalJogos}</Text>
              <Text style={styles.boxLabel}>Jogos</Text>
            </View>
          </View>
        </View>

        {/* Média de nota */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Média Técnica do Elenco</Text>
          <View style={styles.notaRow}>
            <View style={[styles.notaCirc, { borderColor: mediaCor }]}>
              <Text style={[styles.notaVal, { color: mediaCor }]}>
                {stats.mediaNota.toFixed(2)}
              </Text>
              <Text style={styles.notaMax}>/ 10</Text>
            </View>
            <Text style={styles.notaInfo}>
              Média ponderada das avaliações técnicas individuais registradas
              pelo scout em treinos e partidas oficiais.
            </Text>
          </View>
        </View>

        {/* Destaques */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Destaques do Plantel</Text>

          <DestaqueRow
            label="Artilheiro"
            valor={`${stats.artilheiro.nome} — ${stats.artilheiro.gols} gols`}
            cor="#16a34a"
            onPress={() =>
              navigation.navigate("Detalhes", { jogador: stats.artilheiro })
            }
          />
          <View style={styles.divider} />
          <DestaqueRow
            label="Líder de assistências"
            valor={`${stats.garcom.nome} — ${stats.garcom.assistencias}`}
            cor="#0ea5e9"
            onPress={() =>
              navigation.navigate("Detalhes", { jogador: stats.garcom })
            }
          />
          <View style={styles.divider} />
          <DestaqueRow
            label="Melhor nota técnica"
            valor={`${stats.melhorNota.nome} — ${stats.melhorNota.notaTecnica.toFixed(
              1
            )}`}
            cor="#ca8a04"
            onPress={() =>
              navigation.navigate("Detalhes", { jogador: stats.melhorNota })
            }
          />
        </View>

        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
          activeOpacity={0.85}
        >
          <Text style={styles.botaoVoltarTexto}>← Voltar para o Elenco</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function DestaqueRow({ label, valor, cor, onPress }) {
  return (
    <TouchableOpacity
      style={styles.destaqueRow}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.destaqueDot, { backgroundColor: cor }]} />
      <View style={{ flex: 1 }}>
        <Text style={styles.destaqueLabel}>{label}</Text>
        <Text style={styles.destaqueValor}>{valor}</Text>
      </View>
      <Text style={styles.destaqueSeta}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f1f5f9" },
  scroll: { padding: 16, paddingBottom: 32 },
  carregando: { padding: 24, color: "#475569" },
  heroCard: {
    backgroundColor: "#0b3d2e",
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
  },
  heroTitulo: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  heroSub: { fontSize: 13, color: "#bbf7d0", marginTop: 6 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0b3d2e",
    marginBottom: 12,
  },
  grid: { flexDirection: "row", justifyContent: "space-between" },
  box: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 4,
  },
  boxNum: { fontSize: 24, fontWeight: "bold", color: "#0b3d2e" },
  boxLabel: { fontSize: 12, color: "#64748b", marginTop: 2 },
  notaRow: { flexDirection: "row", alignItems: "center" },
  notaCirc: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  notaVal: { fontSize: 24, fontWeight: "bold" },
  notaMax: { fontSize: 11, color: "#64748b", marginTop: -2 },
  notaInfo: { flex: 1, color: "#475569", fontSize: 13, lineHeight: 18 },
  destaqueRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  destaqueDot: { width: 10, height: 10, borderRadius: 5, marginRight: 12 },
  destaqueLabel: { color: "#64748b", fontSize: 12 },
  destaqueValor: {
    color: "#0f172a",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 2,
  },
  destaqueSeta: { color: "#94a3b8", fontSize: 24, fontWeight: "bold" },
  divider: { height: 1, backgroundColor: "#e2e8f0" },
  botaoVoltar: {
    backgroundColor: "#0b3d2e",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoVoltarTexto: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
