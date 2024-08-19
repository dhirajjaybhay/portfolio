import "./App.css";
import Home from "./components/home/Home";
import Skill from "./components/skill/Skill";

function App() {
  return (
    <div className="container">
      <section className="Home">
        <Home />
      </section>
      <section className="Skills">
        <Skill />
      </section>
    </div>
  );
}

export default App;
