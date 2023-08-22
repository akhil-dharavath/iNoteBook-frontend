import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const navigate = useNavigate();
  const onChange = (e) => {
    e.preventDefault()
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/')
    }
    // eslint-disable-next-line
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:1000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
    const json = await response.json()
    if (json.success) {
      localStorage.setItem('token', json.authToken)
      navigate('/')
      props.showAlert('Loggedin Successfully', 'success')
    }
    else {
      props.showAlert('Invalid Credentials', 'danger')
    }
  }
  return (
    <div className='container my-3 logSign'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" name='email' autoComplete="off" value={credentials.email} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' autoComplete="new-password" value={credentials.password} onChange={onChange} />
        </div>
        <div className='buttonContainer' >
        <button type="submit" className="btn btn-success login my-2" >Log In</button>
        <Link to='/signup' role='button' className= "btn btn-primary signup my-2">Sign In</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
