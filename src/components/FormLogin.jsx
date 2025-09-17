import { useState } from "react"
import { useNavigate } from "react-router-dom"

const FormLogin = () => {
  const [password, setPassword] = useState()
  const [message, setMessage] = useState()
  const [error, setError] = useState()
  const navigate = useNavigate()

  //hook -> anzuelo -> una funcionalidad que provee react
  // todos empiezan con la palabra use
  // eg: useState -> usando un estado (variable que cuando cambia se re-renderiza el componente)
  //siempre van debajo del nombre del componente
  // [estado, funcion que lo actualiza]

  const pass = "coquito3000"

  const validatePassword = () => {
    setMessage(null)
    setError(null)

    if (password === pass) {
      console.log("Contraseña valida")
      setMessage("Contraseña valida, seras redirigido.")
      setTimeout(() => {
        navigate("/chat")
      }, 3000) 
    } else {
      setError("Contraseña invalida, intentelo nuevamente")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validatePassword()
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Contraseña de acceso</label>
      <input type="password" name="" id="" onChange={(event) => setPassword(event.target.value)}/>
      <button>Acceder</button>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  )
}

export default FormLogin