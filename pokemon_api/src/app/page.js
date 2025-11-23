import * as pokemon from "./components/menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <pokemon.Menu/>
    </main>
  );
}
