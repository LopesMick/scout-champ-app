# FutGestor Pro

FutGestor Pro e um prototipo mobile de scout tecnico para futebol. O app foi
desenvolvido em React Native com Expo e usa navegacao por Stack para alternar
entre a tela de elenco e a tela de detalhes do jogador selecionado.

## Telas do aplicativo

### Elenco em treinamento

![Tela de elenco em treinamento](docs/screenshots/elenco-treinamento.svg)

### Elenco em partida oficial

![Tela de elenco em partida oficial](docs/screenshots/elenco-partida.svg)

### Detalhes do jogador

![Tela de detalhes do jogador](docs/screenshots/detalhes-jogador.svg)

## Funcionalidades

- Visualizacao do elenco principal do clube.
- Controle de status do time entre `Em Treinamento` e `Em Partida Oficial`.
- Alteracao visual da tela conforme o estado atual do elenco.
- Lista de jogadores com posicao, gols e resumo de desempenho.
- Tela de detalhes com dados completos do atleta selecionado.
- Registro no console sempre que o status do elenco muda.
- Alerta inicial simulando a sincronizacao dos dados do plantel.

## Tecnologias utilizadas

- React Native
- Expo
- React Navigation
- JavaScript

## Requisitos atendidos

- Componentes funcionais nas telas do aplicativo.
- Hook `useState` para controlar o booleano `emPartida`.
- Hook `useEffect` com array vazio para o carregamento inicial.
- Hook `useEffect` monitorando alteracoes em `emPartida`.
- `NavigationContainer` configurado no arquivo `App.js`.
- Navegacao Stack entre `Elenco` e `Detalhes`.
- Passagem de parametros com `navigation.navigate()`.
- Leitura dos dados do jogador com `route.params`.
- Uso de `TouchableOpacity` como botao de alternancia.
- Estilizacao condicional para os estados de treino e partida.

## Estrutura do projeto

```text
entrega-futgestor-pro/
|-- App.js
|-- app.json
|-- package.json
|-- data/
|   `-- jogadores.js
|-- docs/
|   `-- screenshots/
|       |-- elenco-treinamento.svg
|       |-- elenco-partida.svg
|       `-- detalhes-jogador.svg
`-- screens/
    |-- ElencoScreen.js
    `-- DetalhesJogadorScreen.js
```

## Como executar

Instale as dependencias:

```bash
npm install
```

Inicie o Expo:

```bash
npx expo start --clear
```

Depois, use uma das opcoes exibidas no terminal:

- pressione `a` para abrir no emulador Android;
- escaneie o QR Code com o Expo Go no celular;
- pressione `w` para abrir no navegador, quando disponivel.

Caso o Expo Go informe que a versao do projeto e mais recente que a instalada,
atualize o aplicativo Expo Go no dispositivo ou emulador e execute novamente.

## Observacao de entrega

Para enviar o projeto no GitHub, mantenha o codigo fonte e nao inclua as pastas
`node_modules` e `.expo`.
