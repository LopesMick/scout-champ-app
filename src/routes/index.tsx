import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FutGestor Pro" },
      { name: "description", content: "Aplicativo de scout tecnico de futebol." },
      { property: "og:title", content: "FutGestor Pro" },
      { property: "og:description", content: "Aplicativo de scout tecnico de futebol." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <main className="mx-auto flex max-w-5xl flex-col gap-8">
        <section className="rounded-lg border border-emerald-400/30 bg-slate-900 p-6 shadow-xl shadow-emerald-950/20">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Scout tecnico
          </p>
          <h1 className="mt-3 text-4xl font-bold">FutGestor Pro</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
            Prototipo funcional para acompanhar elenco, status de partida e detalhes dos atletas.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-5 text-slate-950">
            <p className="text-sm text-slate-500">Tela principal</p>
            <h2 className="mt-2 text-xl font-semibold">Elenco</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Lista jogadores e controla o status do time entre treinamento e partida.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5 text-slate-950">
            <p className="text-sm text-slate-500">Navegacao</p>
            <h2 className="mt-2 text-xl font-semibold">Detalhes</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Abre o historico do atleta selecionado com nome, posicao e gols.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5 text-slate-950">
            <p className="text-sm text-slate-500">Entrega</p>
            <h2 className="mt-2 text-xl font-semibold">React Native</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A pasta de entrega contem o app Expo pronto para instalacao e execucao.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
