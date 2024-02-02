import React, { useCallback, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Api } from '../../utils/Api'
import { setToken } from '../../utils/localstorage'
import './signIn.css'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
function Index() {
  const { replace, push } = useHistory()
  const [loading, setLoading] = useState(false)

  const _handleSubmit = useCallback(async (e) => {
    // callback
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email.length > 2 && password.length > 2) {
      setLoading(true)
      const { statusCode, data } = await Api.postRequest('/api/user/signin', {
        email,
        password,
      })
      setLoading(false)
      if (statusCode === 400 || statusCode === 500 || statusCode === 403) {
        setLoading(false)
        toast.error(data)
        return
      }
      const { token } = JSON.parse(data)
      setToken(token)
      replace('/')
    }
  }, [replace])

  if (loading) return <h1>Loading.....</h1>
  return (
    <>
      <div className="signin">
        <h1>Login</h1>
        <Form onSubmit={ _handleSubmit }>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" name='email' placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" name='password' placeholder="Password" />
          </Form.Group>
          <div className='d-flex justify-content-between'>
            <Button variant="primary" type="submit" size='lg'>
              Login
            </Button>
            <Link to="/signup" className="link">
              <Button variant="primary" type="button" size='lg'>
                Sing up
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Index
