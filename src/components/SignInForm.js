import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import User from './User';
import {useDispatch} from 'react-redux';
import { loginAction, getUserToken } from '../actions/authActions';

export default function SignInForm({changeform, setuserToken}) {

  const dispach = useDispatch();
  const [useremail, setuseremail] = useState('');
  const [userpassword, setuserpassword] = useState('');  

  const user = new User();
  const login = async () => {
      console.log('credentials got:',useremail, userpassword);
      const response = await user.loginUser(useremail, userpassword, setuserToken);
      if (response) {
        dispach(loginAction());
        dispach(getUserToken(useremail));
      }
  }

  return (
    <div>
    
        <Form className='p-5 form-box'>
            <h3 className='m-1 mb-4'>Login Existing Account</h3>
            <Form.Group className="mb-3 m-5 mt-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" onChange={e => setuseremail(e.target.value)} value={useremail} />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3 m-5 mt-1" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Password" onChange={e => setuserpassword(e.target.value)} value={userpassword}/>
            </Form.Group>
            <Form.Group className="mb-3 m-5 mt-1" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember password" />
            </Form.Group>
            <Form.Group className='mb-3 m5 mt-4 form-buttons'>
              <Button className='m-2 mb-0 mt-0' variant="success" onClick={() => login()} >
                Login
              </Button>
              <Button className='m-2 mb-0 mt-0' variant="light" onClick={() => changeform('signup')}>
                Create New Account
              </Button>
              
            </Form.Group>
          </Form>
    </div>
  )
}
