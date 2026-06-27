import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DetalhesJogadorScreen({ route, navigation }) {
  const {
    nome,
    posicao,
    gols,
    idade,
    jogos,
    assistencias,
    altura,
    pePreferido,
    clubeAnterior,
    historico,
  } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.hero}>
          <View style={styles.avatar}>
            <Text style={styles.avatarTexto}>{nome.charAt(0)}</Text>
          </View>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.posicao}>{posicao}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Informacoes do Atleta</Text>

          <Linha label="Nome" valor={nome} />
          <Linha label="Posicao" valor={posicao} />
          <Linha label="Idade" valor={`${idade ?? "-"} anos`} />
          <Linha label="Altura" valor={altura ?? "-"} />
          <Linha label="Pe preferido" valor={pePreferido ?? "-"} />
          <Linha label="Clube anterior" valor={clubeAnterior ?? "-"} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Resumo da Temporada</Text>

          <View style={styles.statsGrid}>
            <View style={styles.statBox}>
              <Text style={styles.statNumero}>{jogos ?? 0}</Text>
              <Text style={styles.statLabel}>Jogos</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumero}>{gols}</Text>
              <Text style={styles.statLabel}>Gols</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumero}>{assistencias ?? 0}</Text>
              <Text style={styles.statLabel}>Assist.</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Historico</Text>
          <Text style={styles.historicoTexto}>
            {historico ??
              "Atleta acompanhado pelo modulo de scout tecnico do FutGestor Pro."}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.botaoVoltar}
          activeOpacity={0.86}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.botaoVoltarTexto}>Voltar para o Elenco</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function Linha({ label, valor }) {
  return (
    <View style={styles.linha}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f5f9",
    flex: 1,
  },
  scroll: {
    padding: 16,
    paddingBottom: 32,
  },
  hero: {
    alignItems: "center",
    backgroundColor: "#0b3d2e",
    borderRadius: 12,
    marginBottom: 16,
    padding: 24,
  },
  avatar: {
    alignItems: "center",
    backgroundColor: "#16a34a",
    borderColor: "#ffffff",
    borderRadius: 42,
    borderWidth: 3,
    height: 84,
    justifyContent: "center",
    marginBottom: 12,
    width: 84,
  },
  avatarTexto: {
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "bold",
  },
  nome: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  posicao: {
    backgroundColor: "#bbf7d0",
    borderRadius: 999,
    color: "#0b3d2e",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 8,
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 2,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  cardTitulo: {
    color: "#0b3d2e",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  linha: {
    alignItems: "center",
    borderBottomColor: "#e2e8f0",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  label: {
    color: "#64748b",
    fontSize: 14,
  },
  valor: {
    color: "#0f172a",
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 16,
    textAlign: "right",
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statBox: {
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 14,
  },
  statNumero: {
    color: "#0b3d2e",
    fontSize: 22,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#64748b",
    fontSize: 12,
    marginTop: 2,
  },
  historicoTexto: {
    color: "#334155",
    fontSize: 14,
    lineHeight: 20,
  },
  botaoVoltar: {
    alignItems: "center",
    backgroundColor: "#0b3d2e",
    borderRadius: 10,
    paddingVertical: 14,
  },
  botaoVoltarTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
