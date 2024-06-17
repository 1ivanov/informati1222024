import Doc from '../componentes/Docente.jsx';
function Maestro(){
    return(
        <div className='contMaes'>
            <Doc rostro="imgs/r1.png" nombre="Jose" instru="Guitarra" edad="34" ci="242332lp"></Doc>
            <Doc rostro="imgs/r5.png" nombre="Lucia Montes" instru="Violin" edad="24" ci="344332lp"></Doc>
            <Doc rostro="imgs/r3.png" nombre="Felipe Salasar" instru="Ukelele" edad="24" ci="344332lp"></Doc>
            <Doc rostro="imgs/r4.png" nombre="Maria" instru="Piano" edad="24" ci="344332lp"></Doc>
            <Doc rostro="imgs/r2.png" nombre="Marcos" instru="Acordeon" edad="24" ci="344332lp"></Doc>
        </div>
    );
}
export default Maestro;