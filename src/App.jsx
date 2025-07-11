import "./App.css";
import Register from "./Register";
import Login from "./Login";
import CardList from "./CardList";

function App() {

  //const isRegistered = true;

  let counter = 0;

  return (
    <>
    <h1 className="title">Mi primer Contador</h1>
    <h2>Contador {counter}</h2>
    <button>Contador de clics</button>
    <CardList/>
    </>
  );
}

export default App;
