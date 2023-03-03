import React from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function LogIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  let element = '';
  const handleLogin = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3009/user?userName=${user}&password=${password}`)
      .then((res) => {
        console.log(res.data.length);
        // if(res.data.length===0){
        //   element = <p style={{ color: "red" }} > tai khoan mat khau khong chinh xac</p>

        // }else if(res.data[0].status===false){
        //  return  element = <p style={{ color: "red" }} > tai khoan cua ban da bi khoa</p>
        // } 
        if(res.data[0].status===true) {
          localStorage.setItem('user', JSON.stringify(res.data[0]))
          navigate('/')
        }
      })
      .catch(() => {
        element = <p style={{ color: "red" }} > tai khoan mat khau khong chinh xac</p>
      })
  }

  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: 185 }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">welcome to JV11 </h4>
                    </div>
                    <form>
                      {element}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="name">
                          Username
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Phone number or email address"
                          onChange={(e) => setUser(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick={handleLogin}
                        >
                          Log in
                        </button>
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button type="button" className="btn btn-outline-danger">
                          <NavLink to={'/sign'}>Create new</NavLink>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
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
