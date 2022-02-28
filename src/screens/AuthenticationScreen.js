import React, { useState, useEffect } from 'react'
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {loginAction} from '../actions/authActions'

export default function AuthenticationScreen() {
  
  const navigate = useNavigate();
  const [changeform, setchangeform] = useState('login');
  const [userToken, setuserToken] = useState('');
  const loginstatus = useSelector(state => state.auth);
  
  useEffect(() => {
    console.log('useEffect called.')
    if(userToken===''){
      console.log('if ran.');
    }
    else 
    {
      navigate("/users", { state: { name: "Bilal" } }) 
    } 
  }, [userToken])

  return (
    <div>
        <Container className='d-flex justify-content-center align-items-center vh-100 main-container'>
          <h4>{userToken.token}</h4>
            <div>
                {changeform === 'login'?<SignInForm changeform={setchangeform} setuserToken={setuserToken} /> : <SignUpForm changeform={setchangeform} setuserToken={setuserToken} />}
            </div>
        </Container>
    </div>
  )
}
