import React from 'react';
import { useState } from 'react'
import './Menu.css'
import Adivinanza from '../Adivinanza.jsx';
import swal from 'sweetalert';



function Menu() {

    const [adivi, setAdivi] = useState(false)
    
    const HandlerClick = () => {
        setAdivi(true);
    }

    const Cerrar = () => {
        swal({
          title: "Cerrar Sesión",
          text: "¿Deseas cerrar sesión?",
          icon: "warning",
          buttons: ["No","Sí"]
        }).then(respuesta=>{
          if(respuesta){
            swal({
              title: "¡Listo!",
              text: "Sesión cerrada con exito, ¡Hasta pronto!",
              timer: "3000"
            }) 
            setTimeout(function() {
              window.location.href = "/";
          }, 3000);}
        })

      
  }

    //  const [menu, setMenu] = useState(false);

    //  const HandlerClick = (e) => {
    //      e.preventDefault()
    //      setMenu = (true)

    //      {menu && (<>
    //         <Menu/> MenuItems
    //            </>)}
    //  }


  return (
    <div>
      <nav id="Menu" >
        <label id='Logo'>ICR Corp</label>
        <ul id='MenuItems' className='MenuItems'>
          <li><a id="Activo" onClick={() => window.location.href="/Menu"} >Inicio</a></li>
          <li><a onClick={HandlerClick}>Adivinanza</a></li>
          <li><a onClick={Cerrar}>Cerrar Sesión</a></li>
        </ul>
        <span id='BtnMenu' className='BtnMenu'>
         <button>☰</button>
        </span>
      </nav>

      { adivi &&
        <Adivinanza />
      }

    </div>
  )
}

export default Menu