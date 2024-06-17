function Evento1(props){
    return(
        <div className="contEvento">
            <h2 className="titulo">{props.name}</h2>
            <p className="texto">{props.des}</p>
        </div>
    );
}
export default Evento1;