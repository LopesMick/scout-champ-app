# FutGestor Pro

Protótipo funcional de aplicativo mobile de **scout técnico de futebol**, desenvolvido em **React Native com Expo**.

## Como executar

```bash
npm install
npx expo start
```

Abra no Expo Go (Android/iOS) ou em um emulador.

## Estrutura

```
futgestor-pro/
├── App.js
├── package.json
└── screens/
    ├── ElencoScreen.js
    └── DetalhesJogadorScreen.js
```

## Recursos demonstrados

- Componentes funcionais
- `useState` (controle do status `emPartida`)
- `useEffect` (sincronização inicial + monitoramento de estado)
- Navegação com `react-navigation` (`NavigationContainer` + Stack)
- Passagem de parâmetros via `navigation.navigate("Detalhes", { jogador })`
- Recuperação via `route.params`
- Estilização condicional (treino vs partida oficial)
