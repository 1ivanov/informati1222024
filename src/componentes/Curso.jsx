function Curso(props){
    return(
        <div className="curso">
            <div className="cursoCont">
            <h2 className="titulo" uu>{props.name}</h2>
            <p className="texto uu">{props.desc}</p>
            <img className="foto uu" src={props.im}></img>
            </div>
            <button>VER</button>
        </div>
    );
}
export default Curso;