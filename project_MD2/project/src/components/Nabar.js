import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function Nabar() {
  const navigate=useNavigate();
  
  let element='';
  let user= JSON.parse(localStorage.getItem('user'))
  const handleOut =()=>{
    localStorage.removeItem('user')
    navigate('/')
  }
  if(user!=null){
 element =  <ul id="user" className="navbar-nav">
          <li className="nav-item">
            < button className="btn btn-outline-success" >
              {user.userName}
            </button>
              < button onClick={handleOut} className="btn btn-outline-success" >
              log out
            </button>
          </li>
        </ul>
        // if(user.permission===true){
        //   adminVsUser= 
        // }
  }else{
element= <ul id="user" className="navbar-nav">
          <li className="nav-item">
            < NavLink to={'/login'} className="btn btn-outline-success" >
              Đang nhập
            </NavLink>
          </li>
        </ul>
  }

  return (
    <nav
    className="navbar navbar-expand-lg navbar-light "
    style={{ backgroundColor: "aqua" }}
  >
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="img/logo.jpeg" height={90} width={120} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to={'/'} className="nav-link active" aria-current="page" href="#">
              Trang chủ
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mặt Hàng
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <NavLink to={'/seed'} className="dropdown-item" href="#">
                   Combo
                </NavLink>
              </li>
              <li>
                <NavLink to={'/drying'} className="dropdown-item" href="#">
                  Hoa quả sấy
                </NavLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <NavLink to={'/Fresh'} className="dropdown-item" href="#">
                  Hoa quả tươi
                </NavLink>
              </li>
            </ul>
          </li>
          <li id="upProduct" className="nav-item"></li>
        </ul>
        <form className="d-flex">
          <input
          // style ={{position:'absolute', right:'300px',width:'300px'}}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> 
       
         
          {/* <button className="btn btn-outline-success" type="submit">
            Search
          </button> */}
        </form>
        {/* button */}
        {element}  
      </div>
    </div>
  </nav>
  )
}
