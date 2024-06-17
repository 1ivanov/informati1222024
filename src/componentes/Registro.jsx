function Registro1(){
    return(
        <div class="registro1">
             <form action="/submit-your-form" method="post">
    <label for="username">Nombre de usuario:</label>
    <input type="text" id="username" name="username" required/>
    <br/>
    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" required/>
        <br/>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required/>
    <br/>
    <label for="password-confirm">Confirmar contraseña:</label>
    <input type="password" id="password-confirm" name="password-confirm" required/>
    <br/>
    <button className="boton1" type="submit">Crear cuenta</button>
  </form>
        </div>
    );
}
export default Registro1;