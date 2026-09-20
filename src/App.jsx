import Header from "./components/Header";
import Challenges from "./components/Challenges";

function App() {
  return (
    <main className="mx-auto bg-dark-green-8/80 max-w-md md:max-w-5xl rounded-2xl shadow-2xl p-6 md:p-8">
      <section>
        <Header />
      </section>
      <section className="mt-6 md:mt-12">
        <Challenges />
      </section>
    </main>
  );
}

export default App;
