import React from 'react';
import {Link} from 'react-router-dom';
const links=[
  {
    name:"Home",
    href:"/home",
  },
  {
    name:"Cursos",
    href:"/cursos",
  },
  {
    name:"Maestros",
    href:"/maestros",
  },
  {
    name:"Nuestas Casas",
    href:"/casas",
  },
  {
    name:"Nuestos Eventos",
    href:"/eventos",
  },
  {
    name:"Registro",
    href:"/registro",
  },
];
const Punter1=()=>{
  return(
    <div className='link'>
      {links.map( x=> (
        <Link to={x.href}>{x.name}</Link>
      ))}
    </div>
  );
};
export default Punter1;