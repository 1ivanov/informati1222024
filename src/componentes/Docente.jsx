function Doc(props){
    return(
        <div className="maes">
            <img className="foto2" src={props.rostro}/>
            <div className="da">
                <p className="texto2">Nombre : {props.nombre}</p>
                <p className="texto2">Maestro en : {props.instru}</p>
                <p className="texto2">Edad : {props.edad}</p>
                <p className="texto2">Ci : {props.ci}</p>
            </div>
        </div>
    );
}
export default Doc;
