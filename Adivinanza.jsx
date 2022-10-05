import React from 'react'
import { useState } from 'react';
import swal from 'sweetalert';
import "./Adivinanza.css"

function Adivinanza() {

  
  const [n, setN] = useState()
  const [num, setNum] = useState(Math.round(Math.random()*10))
  const [intentos, setIntentos] = useState(0)

    const volverAjuegal = (e) => {
      e.preventDefault()
      setNum(Math.round(Math.random()*10))
      setIntentos(0)
      setN("")

      swal({
        icon: "success",
        text: "El juego comenzara de nuevo, suerte."
      })
      
    }

    const HandlerClick = (e) => {
      e.preventDefault()
      setIntentos(intentos+1)
      console.log(num)
      console.log(n)
      console.log("intentos=", intentos)      
      
              if (n == num) {
                swal({
                  title: "¡Felicidades!",
                  text: "Adivinaste en "+ (intentos+1)+ " intentos, el numero era: " +num ,
                  icon: "success",
                  button: "Aceptar"
                })
                  }

                  if (n == undefined || n == "") {
                    swal({
                      title: "¡Error!",
                      text: "Debes ingresar un numero.",
                      icon: "error",
                      button: "Aceptar"
                    })
                    setIntentos(0)
                    return
                      }
                
               

              if(n>num && n<=10) {
                swal({
                  icon: "warning",
                  text: "¡Te pasaste!"
                })
              } if (n<num && n<=10) {
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
    // <div id='Cont'>
      
    //   <p id='TAdivi'>Adivinanza</p>
    //   <p id='Tintentos'>Intentos: {`${intentos}`}</p>
    //   <p id='Indi'>Adivina el numero del 0 al 10: </p> <input id='num' type='number' placeholder='Ingresa un numero' onChangeCapture={e => setN  (e.target.value)} value={n}></input>
    //   <br></br><button id='Ad' onClick={HandlerClick} >¡Adivina!</button>
    //   <button id='Vj' onClick={volverAjuegal} >¡Volver a jugar!</button>


    // </div>

      <section class="container">
    <section class="one">
      <div class="logo">
        <img src="https://i.pinimg.com/originals/23/22/fc/2322fccb18cc5304d828167ae9125875.gif" />
      </div>
      <h2 class="heading">Adivinanza</h2>
      <p>Intentos: {`${intentos}`}</p>
      <form>
        <input type='number' placeholder="Adivina el numero del 0 al 10" onChangeCapture={e => setN  (e.target.value)} value={n} /><br/>
        <button class="btn" role="button" onClick={HandlerClick} >¡Adivina!</button><br/> <br/>
        <button class="btn" role="button" onClick={volverAjuegal} >¡Volver a jugar!</button>
      </form>
    </section>
  </section>

  )
}

export default Adivinanza