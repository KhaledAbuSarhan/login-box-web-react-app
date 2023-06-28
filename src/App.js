import React, { useState } from 'react'
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEnvelope, faLock, faXmark, faUser } from '@fortawesome/free-solid-svg-icons'
function App() {
  function showLoginBox(){
    document.querySelector(".wrapper").classList.remove("hide");
  }
  function hideLoginBox(){
    document.querySelector(".wrapper").classList.add("hide");
    document.querySelector(".wrapper .login").classList.remove("displacing-login-box");
    document.querySelector(".wrapper .register").classList.add("displacing-register-box");
  }
  function displacingLoginBox(event){
    event.preventDefault();
    document.querySelector(".wrapper .login").classList.add("displacing-login-box");
    document.querySelector(".wrapper .register").classList.remove("displacing-register-box");
  }
  function displacingRegisterBox(event){
    event.preventDefault();
    document.querySelector(".wrapper .login").classList.remove("displacing-login-box");
    document.querySelector(".wrapper .register").classList.add("displacing-register-box");
  }
  const [form, setForm] = useState({email: '', password: ''});
  const [newForm, setNewForm] = useState({userName:'', email: '', password: ''});
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setForm((previousForm) => ({
      ...previousForm,
      [name]: value
    }))
  }
  const handleInputChangeNew = (event) => {
    const {name, value} = event.target;
    setNewForm((previousForm) => ({
      ...previousForm,
      [name]: value
    }))
  }
  return (
    <div className="app">
    <header>
      <h2 className='logo'>Logo</h2>
      <nav className='navigation'>
        <button className='login-btn'
          onClick={showLoginBox}
        >Login</button>
      </nav>
    </header>
    <div className='wrapper login hide'>
      <span onClick={hideLoginBox} className='icon-close'>
        <FontAwesomeIcon icon={faXmark} />
      </span>
    <div className='form-box login'>
        <h2>Login</h2>
        <form>
          <div className='input-box'>
            <span className='icon'><FontAwesomeIcon icon={faEnvelope} /></span>
            <input 
            type='email'
            name='email'
            required 
            value={form.email} 
            onChange={handleInputChange}
            />
            <label>Email</label>
          </div>
          <div className='input-box'>
            <span className='icon'><FontAwesomeIcon icon={faLock} /></span>
            <input 
            type='password'
            required
            name='password'
            value={form.password}
            onChange={handleInputChange}
            />
            <label>Password</label>
          </div>
          <div className='remeber-forgot'>
            <label><input  type='checkbox'/> Remeber me</label>
            <a href='/'>Forgot Password</a>
          </div>
          <button type='submit' className='btn'>Login</button>
          <div className='login-register'>
            <p>Don't have an account ? <a href='/' onClick={displacingLoginBox} className='register-link' >Register</a></p>
          </div>
        </form>
      </div>
    <div className='form-box register displacing-register-box'>
        <h2>Registration</h2>
        <form>
          <div className='input-box'>
            <span className='icon'><FontAwesomeIcon icon={faUser} /></span>
            <input 
            type='text'
            name='userName'
            required 
            value={newForm.userName} 
            onChange={handleInputChangeNew}
            />
            <label>Username</label>
          </div>
          <div className='input-box'>
            <span className='icon'><FontAwesomeIcon icon={faEnvelope} /></span>
            <input 
            type='email'
            name='email'
            required 
            value={newForm.email} 
            onChange={handleInputChangeNew}
            />
            <label>Email</label>
          </div>
          <div className='input-box'>
            <span className='icon'><FontAwesomeIcon icon={faLock} /></span>
            <input 
            type='password'
            required
            name='password'
            value={newForm.password}
            onChange={handleInputChangeNew}
            />
            <label>Password</label>
          </div>
          <div className='remeber-forgot'>
            <label><input required  type='checkbox'/>I agree to the terms & conditions</label>
          </div>
          <button type='submit' className='btn'>Register</button>
          <div className='login-register'>
            <p>Already have an account ? <a href='/' onClick={displacingRegisterBox} className='register-link' >Login</a></p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default App;
