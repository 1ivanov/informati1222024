function Casa1(props){
    return(
        <div className=" contCasa">
            <img className="foto3" src={props.im}></img>
            <h2 className="titulo">{props.name}</h2>
            <p className="texto">{props.desc}</p>
            <div className="boton">Quiere Saber Mas?</div>
        </div>
    );
}
export default Casa1;