import React from 'react'
import { useState } from 'react';
import swal from 'sweetalert';
import "./Adivinanza.css"

function Adivinanza() {

  
  const [n, setN] = useState(0)
  const [num, setNum] = useState(Math.round(Math.random()*10))
 const [intentos, setIntentos] = useState(1)
 const [adivi, setAdivi] = useState(false)
  // var intentos=0

    const volverAjuegal = (e) => {
      swal({
        icon: "success",
        text: "El juego comenzara de nuevo, suerte."
      })
     setAdivi(true);
    // window.location.reload()

    }

    const HandlerClick = (e) => {
      e.preventDefault()
      setIntentos(intentos+1)
      // intentos=intentos + 1
      console.log(num)
      console.log(n)
      console.log("intentos=", intentos)      
      
              if (n == num) {
                swal({
                  title: "Felicidades!",
                  text: "Adivinaste en "+ intentos+ " intentos, el numero era: " +num ,
                  icon: "success",
                  button: "Aceptar"
                })
                  }
                
               

              if(n>num && n<=10) {
                swal({
                  icon: "warning",
                  text: "¡Te pasaste!"
                })
              } if (n<num && n>=0) {
                swal({
                  icon: "warning",
                  text: "¡Estas por debajo!"
                })
              } if (n<0 || n>10) {
                swal({
                  icon: "error",
                  text: "¡Estas fuera del intervalo!"
                })
              }

    }

  return (
    <div id='Cont'>
      
      <p id='TAdivi'>Adivinanza</p>
      <p id='Indi'>Adivina el numero del 0 al 10: </p> <input id='num' type='number' placeholder='Ingresa un numero' onChangeCapture={e => setN  (e.target.value)} value={n}></input>
      <button id='Ad' onClick={HandlerClick} >¡Adivina!</button>
      <button id='Vj' onClick={volverAjuegal} >¡Volver a jugar!</button>

       { adivi &&
        <Adivinanza />
      } 

    </div>
  )
}

export default Adivinanza