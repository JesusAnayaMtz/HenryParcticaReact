import "./App.css";
import Register from "./Register";
import Login from "./Login";
import CardList from "./CardList";
import { useState } from "react";
import CardProps from "./CardProps";

function App() {
  //ejemplo de uso del estado con un array de objetos
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: "Hary poter",
      house: "Gryffindor",
    },
    {
      id: 2,
      name: "Draco Malfoy",
      house: "Slytherin",
    },
  ]);

  //ahora agregamos la funcionalidad que permita agregar personajes
  const agregarPersonaje = () => {
    //usamos el spread operator para agregar un nuevo personaje al array
    //lo que hace es crear una copia del estado osea el array y luego agregar el nuevo personaje al array
  setCharacters([...characters, {id: 3, name: "Hermione Granger", house: "Gryffindor"}]);
  }

  //ahora vamos a crear una funcion que modifique el nombre de un personaje
  const modificarNombre = () => {
    characters[0].name = "Harry Potter"; //cambiamos el nombre del primer personaje de la posicion 0
    setCharacters([...characters]); //actualizamos el estado con la nueva lista
  }
  //renderizamos la app, agregando las páginas de registro y login y la lista de tarjetas
  //al rederizar un objeto con map react nos pide una key y un valor para cada elemento del array
  //la key es el id del personaje para evitar que React interprete cada elemento como un cambio y renderice todo de nuevo
  //por eso hay que ponerle una key unica y esta solo se coloca en contenedor de los elementos de la lista normalmente se usa el id del elemento
  return (
    <div className="App">
      <Register />
      <Login />
      <CardList />
      {characters.map((character) => {
        return <CardProps key={character.id} character={character}/>
      })}
      <button onClick={agregarPersonaje}>Agregar Personaje</button>
      <button onClick={modificarNombre}>Corregir Nombre</button>
    </div>
  );
}

export default App;
