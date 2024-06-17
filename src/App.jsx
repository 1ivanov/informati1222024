import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Punter1 from './NavBar/Punter.jsx';
import Home1 from './screens/Home.jsx';
import Cursos1 from './screens/Cursos.jsx';
import Maestro from './screens/Maestros.jsx';
import Registro1 from './screens/Registro.jsx';
function App() {
  return (
    <div className='navegador'>
      <h1 className='titulo'>Fundacion TE-ARTE</h1>
      <Router>
        <Punter1></Punter1>
        <div className='contenedor'>
        <Routes>
          <Route path="/home" element={<Home1/>}/>
          <Route path="/cursos" element={<Cursos1/>}/>
          <Route path="/maestros" element={<Maestro/>}/>
          <Route path="/registro" element={<Registro1/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
