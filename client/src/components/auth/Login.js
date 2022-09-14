// * Hooks
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

// * React Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { ToastContainer, toast } from 'react-toastify';

// * Axios & API
import axios from "axios"
import { API_URL } from "../../config.js"

// * Helpers
import { setToken } from '../helpers/auth'
import { getText } from '../helpers/auth'


const Login = () => {

  const navigate = useNavigate()

  // State
  const [loginData, setLoginData] = useState({
    username:'', 
    password:''
  })

  const [error, setError] = useState()
  
  // Execution
  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value })
    console.log('logindata', loginData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const { data } = await axios.post(`${API_URL}/users/login/`, loginData)

      getText(data.message)
      console.log('message-->', data.message)

      setError(null)

      // Token & navigation
      const { token } = data
      setToken(token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`

      navigate('/')

      // Notification
      toast.success(data.message, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <Container className="form-wrapper min-vh-100">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="justify-content-between">
        <h3 className="text-center">Login</h3>

        {/* UserName */}
        <Row>
          <label htmlFor="username">Username</label>
          <input
            onInput={handleChange}
            type="text"
            name="username"
            placeholder="Username"
            required
          />
        </Row>
        {/* Password */}
        <Row>
          <label htmlFor="password">Password</label>
          <input
            onInput={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Row>
        {/* Submit */}
        <input type="submit" value="Login" className="btn dark" />
        <p className="text-center mb-0 mt-3">Not yet registered?</p>
        <p className="text-center mb-0">
          <Link to="/register">Register</Link>
        </p>
      </form>
    </Container>
  )
}

export default Login