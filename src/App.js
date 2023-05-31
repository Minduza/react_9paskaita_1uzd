import "./App.css";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="App">
      <Hero
        title="Journey Beyond Boundaries: Unleash Your Wanderlust"
        description="Unlock the World's Hidden Treasures and Create Lifetime Memories"
      />
      <Main />
    </div>
  );
};

export default App;
