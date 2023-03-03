import React from 'react';
import { useState,} from 'react';
import { useDispatch } from 'react-redux';
import { act_create_user } from '../redux/action';
import {useNavigate} from 'react-router-dom'
let newUser ={
        email:'',
        userName:"",
        address:"",
        password:"",
        status:true,
        phone:"",
        permission:false
}
export default function Sign() {
  const navigate=useNavigate();
const dispatch=useDispatch();
const [newUserName,setNewUserName]=useState('')
const [newEmail,setNewEmail]=useState('')
const [newPassword,setNewPassword]=useState('')
const [rePassword,setRePassword]=useState('')
const handleCreateUser=()=>{
  newUser ={
    email:newEmail,
    userName:newUserName,
    address:"",
    password:newPassword,
    status:true,
    phone:"",
    permission:false
}
if (newPassword!=''&&newEmail!=''&&newUserName!=''&&rePassword!='') {
  dispatch(act_create_user(newUser))
navigate('/login')
}
}
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{ borderRadius: 25 }}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>
                  <form className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="inputUserName">
                          User Name
                        </label>
                        <input
                          type="text"
                          id="inputUserName"
                          className="form-control"
                          onChange={(e)=>setNewUserName(e.target.value)}
                        />
                        {/* <p className="text-danger" id="failUserName" /> */}
                       
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="inputEmail">
                          Email
                        </label>
                        <input
                          type="email"
                          onChange={(e)=>setNewEmail(e.target.value)}
                          id="inputEmail"
                          className="form-control"
                        />
                        <p className="text-danger" id="failEmail" />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="inputPassword">
                          Password
                        </label>
                        <input
                          type="password"
                          onChange={(e)=>setNewPassword(e.target.value)}
                          id="inputPassword"
                          className="form-control"
                        />
                        <p className="text-danger" id="failPassword" />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="inputRePassword">
                          Repeat your password
                        </label>
                        <input
                          type="password"
                          onChange={(e)=>setRePassword(e.target.value)}
                          id="inputRePassword"
                          className="form-control"
                        />
                        <p className="text-danger" id="failRePassword" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        onClick={handleCreateUser}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
