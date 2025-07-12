import styles from "./Card.module.css"

const Card = () => {
  return (
    <div className={styles.container}>
      <h1>Card</h1>
      <h3>Nombre: Jesus</h3>
      <p>Email: jesus@prueba.com</p>
    </div>
  );
};

export default Card;