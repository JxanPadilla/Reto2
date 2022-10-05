import { useState } from 'react'
import './App.css'
import Confirm from './Confirm.jsx';


function App() {
  const Usuario = 12345677;
  const Contraseña = 77654321;
  
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [login, setLogin] = useState(false)

  const HandlerClick = (e) => {
    e.preventDefault()
    
    if ([user, pass].includes("")){
      swal({
        icon: "warning",
        text: "¡No puedes dejar ningun campo vacio!"
      })
      return
    }

    if (user!=Usuario || pass!=Contraseña){
      swal({
        icon: "error",
        text: "¡Los datos no coinciden!"
      })
      return
    }

    if (user==Usuario && pass==Contraseña){
      swal({
        icon: "success",
        text: "¡Bienvenido!"
      })
      setLogin(true);
      
    }
     console.log(user.slice(2))
     console.log(pass)
    
  }

  return (


     <form>
       <div id="nota">
         <div>Nota</div>
         <div>Usuario: 12345677</div>
         <div>Contraseña: 77654321</div>
       </div>

       <form id="Contenedor">
      
         <div id="Saludo"> ¡Bienvenido al sistema de ubicacion para zonas públicas WIFI! 🖐</div>

         <p id="Tlogin">Login 👤</p>

         <p id="U">Usuario:</p> <input id="Usu" type="number" placeholder='Ingrese su número de usuario.' onChange={e => setUser(e.target.value)} value={user}></input>
         <p id="C">Contraseña:</p> <input id="Contra" type="password" placeholder='Ingrese su contraseña.' onChange={e => setPass(e.target.value)} value={pass}></input>
         <br></br><button id="In" onClick={HandlerClick}>Ingresar</button> 
        
        
    

         { login &&

             <Confirm
               user={user}
               pass={pass}
             />

         }

       </form>




    // </form>

    // <form> diseño de formulario con detallezzz

    //         <div class="page">
    //           <div id="Saludo"> ¡Bienvenido al sistema de ubicacion para zonas públicas WIFI! 🖐</div>
    //           <div class="container">
    //             <div class="left">
    //               <div class="login">Login</div>
    //               <div class="eula">Nota <br/> Usuario: 12345677 <br/> Contraseña: 77654321</div></div>
    //             <div class="right">
    //                     <div class="form">
    //             <label for="email">Usuario</label>
    //             <input type="email" id="email" onChange={e => setUser(e.target.value)} value={user} />
    //             <label for="password">Contraseña</label>
    //             <input type="password" id="password" onChange={e => setPass(e.target.value)} value={pass} />
    //             <button  id="submit" onClick={HandlerClick} >Ingresar</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div id='cd'>
    //     { login &&
    //       <Confirm
    //         user={user}
    //         pass={pass}
    //       />
    //       }

    //     </div>
    // </form>






  )
}

export default App
