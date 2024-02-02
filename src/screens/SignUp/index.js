import React, { useCallback, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Api } from '../../utils/Api'
import './signup.css'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'

function Index() {
  const { replace, push } = useHistory()
  const [loading, setLoading] = useState(false)

  const _handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const fullName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (fullName.length > 2 && email.length > 2 && password.length > 2) {
      setLoading(true)
      const { statusCode, data } = await Api.postRequest('/api/user/signup', {
        email,
        fullName,
        password,
      })
      if (statusCode === 400 || statusCode === 500 || statusCode === 403) {
        setLoading(false)
        toast.error(data)
        return
      }
      toast.success(data)
      replace('/signin')
    }
  }, [replace])
  if (loading) return <h1>Loading...</h1>
  return (
    <>
      <div className="signin">
        <h1>Create Account</h1>
        <Form onSubmit={ _handleSubmit }>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" name='name' placeholder="Enter Name" />
          </Form.Group>

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
              Sing up
            </Button>
            <Link to="/signin" className="link">
              <Button variant="primary" type="button" size='lg'>
                Login
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Index
