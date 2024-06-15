import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [values, setvalues] = useState({
    email: 'admin@gmail.com',
    password: '12345',
  })

  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost:/adminlogin', values)
      .then((result) => {
        if (result.data.loginStatus) {
          navigate('/dashboard')
        } else {
          setError(result.data.Error)
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginpage'>
      <div className='p-3 rounded w-25 border loginForm'>
        <div className='text-danger'>{error && error}</div>
        <h2>Login page</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email:</strong>
            </label>
            <input
              type='email'
              name='email'
              autoComplete='off'
              placeholder='Enter Email'
              onChange={(e) => setvalues({ ...values, email: e.target.value })}
              className='form-control rounded-0'
            ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>password:</strong>
            </label>
            <input
              type='password'
              name='password'
              placeholder='Enter Password'
              onChange={(e) =>
                setvalues({ ...values, password: e.target.value })
              }
              className='form-control rounded-0'
            ></input>
          </div>
          <button className='btn btn-success w-100 rounded-0 mb-2'>
            Log in
          </button>
          <div className='mb-1'>
            <input type='checkbox' name='tick' id='tick' className='me-2' />
            <label htmlFor='password'>
              You are agree with terms & conditions
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
