import "./App.css";
import Register from "./Register";
import Login from "./Login";
import CardList from "./CardList";
import styles from "./App.module.css";
import { CustomButton } from "./CustomButton";

function App() {

  //const isRegistered = true;

  let counter = 0;

  return (
    <>
    <h1 className={styles.title}>Mi primer Contador</h1>
    <h2 className={styles.contador}>Contador {counter}</h2>
    <CustomButton>Contador de clics</CustomButton>
    <CardList/>
    </>
  );
}

export default App;
