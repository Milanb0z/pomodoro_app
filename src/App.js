import fleck1 from "./assets/fleck1.svg";
import fleck2 from "./assets/fleck2.svg";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  return (
    <section className="content">
      <img src={fleck1} alt="" className="fleck1" />
      <img src={fleck2} alt="" className="fleck2" />
      <Main />
      <Sidebar />
    </section>
  );
};

export default App;
