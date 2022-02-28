import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectBooks, selectStudents } from '../actions/authActions';
import ListingComponent from '../components/ListingComponent';

export default function HomeScreen() {

  const navigate = useNavigate();
  const login = useSelector(state => state.auth);
  const name = useSelector(state => state.user.username);
  const selectedListType = useSelector(state => state.listtype);
  const dispach = useDispatch();
  // let location = useLocation();
  // console.log('Inside Homescreen login status', props);

  // const name = location.state.name;

  useEffect(() => {
    if(login === 'loggedout') 
      navigate(-1);

    ChangeTypeStudent();
  },[])

  const ChangeTypeStudent = () => {
    dispach(selectStudents());
    document.getElementById('student').classList.add('tab-bar-border');
    document.getElementById('book').classList.remove('tab-bar-border');
  }

  const ChangeTypeBook = () => {
    dispach(selectBooks());
    document.getElementById('book').classList.add('tab-bar-border');
    document.getElementById('student').classList.remove('tab-bar-border');
  }


  return (
    <div className='d-flex justify-content-center align-items-center vh-100 main-container'>
      <div className='container grid-box'>
        <div className='row tab-bar '>
          <div id='student' className='d-flex m-2 col justify-content-center' onClick={() => ChangeTypeStudent()} >
            <p className='p-1'>
            <b>Students</b>
            </p>
          </div>
          <div id='book' className='d-flex m-2 col justify-content-center ' onClick={() => ChangeTypeBook()}>
            <p className='p-1'>
              <b>Books</b>
            </p>
          </div>
        </div>
        <div className='vh-10 grid-head '>
          <div className='row'>
            <h1 className='col m-2 '>
              {selectedListType}
            </h1>
            <div className='d-flex col justify-content-end'>
              <button className='btn btn-success m-2'> Add Item</button>
            </div>
          </div>
        </div>
          <ListingComponent  />
      </div>
    </div>
  )
}
