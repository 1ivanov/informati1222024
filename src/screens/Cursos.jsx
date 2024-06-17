import Curso from '../componentes/Curso.jsx';
function Cursos1(){
    return(
        <div className='contCursos'>
            <Curso name="Guitarra" i="" desc="Explora la versatilidad de la guitarra en géneros que van desde el clásico hasta el contemporáneo. Desarrolla habilidades en acordes, melodías y técnicas de rasgueo." im="imgs/i5.png"></Curso>
            <Curso name="Ukelele" desc="Sumérgete en el mundo del ukelele con cursos que te llevarán desde los fundamentos hasta la ejecución de piezas complejas, todo en un ambiente divertido y relajado." im="imgs/i6.png"></Curso>
            <Curso name="Violin" desc="Aprende a tocar el violín con un enfoque en la técnica, la interpretación y la expresión musical, preparándote para actuar tanto en solitario como en conjunto." im="imgs/i4.png"></Curso>
            <Curso name="Piano" desc="Desde los principios básicos hasta interpretaciones avanzadas, nuestros cursos de piano están diseñados para fomentar la maestría del instrumento y la lectura musical." im="imgs/i2.png"></Curso>
            <Curso name="Acordeon" desc="Descubre la riqueza del acordeón a través de un repertorio variado que abarca música folclórica, clásica y moderna, enfatizando tanto la técnica como el estilo." im="imgs/i3.png"></Curso>
        </div>
    );
}
export default Cursos1;