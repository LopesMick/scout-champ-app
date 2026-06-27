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

        <View style={styles.infoCard}>
          <View style={styles.linha}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.valor}>{jogador.nome}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.linha}>
            <Text style={styles.label}>Posição:</Text>
            <Text style={styles.valor}>{jogador.posicao}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.linha}>
            <Text style={styles.label}>Gols na temporada:</Text>
            <Text style={styles.valorDestaque}>{jogador.gols}</Text>
          </View>
        </View>

        <View style={styles.historicoCard}>
          <Text style={styles.historicoTitulo}>Histórico</Text>
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
  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  label: { color: "#64748b", fontSize: 14 },
  valor: { color: "#0f172a", fontSize: 15, fontWeight: "600" },
  valorDestaque: {
    color: "#0b3d2e",
    fontSize: 20,
    fontWeight: "bold",
  },
  divider: { height: 1, backgroundColor: "#e2e8f0" },
  historicoCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  historicoTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0b3d2e",
    marginBottom: 8,
  },
  historicoTexto: { color: "#334155", fontSize: 14, lineHeight: 20 },
  botaoVoltar: {
    backgroundColor: "#0b3d2e",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoVoltarTexto: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
