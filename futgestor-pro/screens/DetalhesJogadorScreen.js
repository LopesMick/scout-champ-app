import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function DetalhesJogadorScreen({ route, navigation }) {
  const { jogador } = route.params;

  const nota = Number(jogador.notaTecnica ?? 0);
  const notaCor =
    nota >= 8.5 ? "#16a34a" : nota >= 7.5 ? "#ca8a04" : "#dc2626";
  const notaLabel =
    nota >= 8.5 ? "Excelente" : nota >= 7.5 ? "Bom" : "Regular";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.heroCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {jogador.nome.charAt(0).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.nome}>{jogador.nome}</Text>
          <Text style={styles.posicaoBadge}>{jogador.posicao}</Text>
        </View>

        {/* Dados pessoais */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Dados Pessoais</Text>

          <View style={styles.linha}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.valor}>{jogador.nome}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.linha}>
            <Text style={styles.label}>Idade:</Text>
            <Text style={styles.valor}>{jogador.idade ?? "—"} anos</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.linha}>
            <Text style={styles.label}>Altura:</Text>
            <Text style={styles.valor}>{jogador.altura ?? "—"}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.linha}>
            <Text style={styles.label}>Pé preferido:</Text>
            <Text style={styles.valor}>{jogador.pePreferido ?? "—"}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.linha}>
            <Text style={styles.label}>Posição:</Text>
            <Text style={styles.valor}>{jogador.posicao}</Text>
          </View>
        </View>

        {/* Estatísticas da temporada */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Estatísticas da Temporada</Text>

          <View style={styles.statsGrid}>
            <View style={styles.statBox}>
              <Text style={styles.statNum}>{jogador.jogos ?? 0}</Text>
              <Text style={styles.statLabel}>Jogos</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNum}>{jogador.gols}</Text>
              <Text style={styles.statLabel}>Gols</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNum}>{jogador.assistencias ?? 0}</Text>
              <Text style={styles.statLabel}>Assistências</Text>
            </View>
          </View>
        </View>

        {/* Avaliação técnica */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Avaliação Técnica</Text>

          <View style={styles.notaWrapper}>
            <View style={[styles.notaCirculo, { borderColor: notaCor }]}>
              <Text style={[styles.notaValor, { color: notaCor }]}>
                {nota.toFixed(1)}
              </Text>
              <Text style={styles.notaMax}>/ 10</Text>
            </View>
            <View style={{ flex: 1, marginLeft: 16 }}>
              <Text style={[styles.notaStatus, { color: notaCor }]}>
                {notaLabel}
              </Text>
              <Text style={styles.notaInfo}>
                Nota consolidada do scout técnico com base em desempenho em
                treinos e partidas oficiais.
              </Text>
            </View>
          </View>
        </View>

        {/* Histórico */}
        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Histórico</Text>
          <View style={styles.linha}>
            <Text style={styles.label}>Clube anterior:</Text>
            <Text style={styles.valor}>{jogador.clubeAnterior ?? "—"}</Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.historicoTexto}>
            Atleta monitorado pelo módulo de scout técnico do FutGestor Pro.
            Desempenho avaliado em treinos e partidas oficiais, com métricas
            sincronizadas em tempo real ao servidor central da comissão técnica.
          </Text>
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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f1f5f9" },
  scroll: { padding: 16, paddingBottom: 32 },
  heroCard: {
    backgroundColor: "#0b3d2e",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#16a34a",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    borderWidth: 3,
    borderColor: "#fff",
  },
  avatarText: { color: "#fff", fontSize: 36, fontWeight: "bold" },
  nome: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  posicaoBadge: {
    marginTop: 6,
    color: "#0b3d2e",
    backgroundColor: "#bbf7d0",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 13,
    fontWeight: "600",
    overflow: "hidden",
  },
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
    marginBottom: 10,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  label: { color: "#64748b", fontSize: 14 },
  valor: { color: "#0f172a", fontSize: 15, fontWeight: "600" },
  divider: { height: 1, backgroundColor: "#e2e8f0" },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  statBox: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 4,
  },
  statNum: { fontSize: 22, fontWeight: "bold", color: "#0b3d2e" },
  statLabel: { fontSize: 12, color: "#64748b", marginTop: 2 },
  notaWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  notaCirculo: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  notaValor: { fontSize: 24, fontWeight: "bold" },
  notaMax: { fontSize: 11, color: "#64748b", marginTop: -2 },
  notaStatus: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  notaInfo: { fontSize: 13, color: "#475569", lineHeight: 18 },
  historicoTexto: {
    color: "#334155",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
  },
  botaoVoltar: {
    backgroundColor: "#0b3d2e",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoVoltarTexto: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
