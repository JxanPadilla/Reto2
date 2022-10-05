import { useState } from 'react'
import App from './App'
import './App.css'

function Confirm({ user, pass }) {

    const [ans, setAnswer] = useState(0);
    const [n1, setNume1] = useState(parseInt(pass.slice(7)));
    const [n2, setNume2] = useState(parseInt(user.slice(7)));
    const suma1 = (eval(n1+n2).toString());



    const HandlerClick = (e) => {
        
        e.preventDefault()
        console.log(suma1);
        console.log(ans);

        if (Number(ans) == Number(suma1)) {
            swal({
                icon: "success",
                text: "¡Sesion Iniciada!"
              })
              setTimeout(function() {
                window.location.href = "/Menu";
            }, 3000);
         }
        
        if (ans == "" ) {
            swal({
                icon: "warning",
                text: "¡No puedes dejar este campo vacio!"
              })
            return
        } 
        if (Number(ans) != Number(suma1)){
            swal({
                title: "¡Incorrecto!",
                icon: "error",
                text: " Bro... ¿No sabes sumar? 🤨"
              })
            return
        }

        

    }


    return (
        <form id="Container">
            <p id="Tconfirm">Confirmación 🔎</p>
            <p id="TextCon">Ingrese la solucion al siguiente problema: </p>
            <p id="Operacion">{`${user.slice(7)}`} + {`${pass.slice(7)}`} = </p> <input id="Respuesta" type="number" placeholder='respuesta...' onChangeCapture={e => setAnswer(e.target.value)} value={ans}></input>

            <br></br><button id="Ver"  onClick={HandlerClick}>Verificar</button>
            
        </form>
    )
}

export default Confirm