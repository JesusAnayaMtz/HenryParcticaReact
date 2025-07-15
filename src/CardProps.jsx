
//ahora aqui recibiremos el objeto por medio de props osea la informacion que viene del otro componente
//cada prop que se pasa al componentes es una propiedad del objeto que se pasa al componente
//por lo cual la prop es un objeto y este mismo lo podemos destructurar en el componente como si fuese una variable
const CardProps = ({character: {name, house}}) => {

    console.log(name, house); //mostrara el nombre y la casa del objeto character que viene como props.character
    return (
        <div>
            <h2>{name}</h2>
            <h3>{house}</h3>
        </div>
    )
}

export default CardProps;