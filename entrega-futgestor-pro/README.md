# FutGestor Pro

Prototipo funcional de aplicativo mobile para scout tecnico de futebol,
desenvolvido com React Native, Expo e react-navigation.

## Como executar

```bash
npm install
npm start
```

Depois, abra o projeto no Expo Go ou em um emulador Android/iOS.

## Estrutura principal

```text
futgestor-pro/
|-- App.js
|-- package.json
|-- data/
|   `-- jogadores.js
`-- screens/
    |-- ElencoScreen.js
    `-- DetalhesJogadorScreen.js
```

## Requisitos atendidos

- Componentes funcionais em todas as telas.
- `NavigationContainer` com Stack Navigator.
- Navegacao entre `Elenco` e `Detalhes`.
- Passagem de parametros com `navigation.navigate("Detalhes", params)`.
- Recuperacao dos dados com `route.params`.
- `useState` para controlar o booleano `emPartida`.
- Botao `TouchableOpacity` funcionando como toggle.
- Estilizacao condicional para "Em Treinamento" e "Em Partida Oficial".
- `useEffect` inicial exibindo o alerta de sincronizacao.
- `useEffect` monitorando `emPartida` e registrando alteracoes com `console.log`.

## Observacao de entrega

Nao enviar as pastas `node_modules` ou `.expo` no repositorio.
