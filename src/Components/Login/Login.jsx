import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import './Login.css'
import { loginReducer } from "../../features/Login/LoginSlice";
export default function Login() {
  const initialState = {
    name: "",
    password: "",
    image: ""
  };
  const [values, setValues] = useState(initialState);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const imageRef = useRef(null);

  const onchange = (e) => {
    e.preventDefault()
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const image = imageRef.current.value;
    setValues({ name, password, image });
  };

  const dispatch = useDispatch()
  return (
    <div className="cont-form">
       
     <div className="main-form">
     <form className="login">
      <h1 className="fs-1 text-center text-light">Login</h1>
        <div className=" cont-inp">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Your name
          </label>
          <input
            type="name"
            className="inp"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            ref={nameRef}
            defaultValue={values.name}
            onChange={onchange}
          />
          
          <div id="emailHelp" className="form-text text-secondary">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="cont-inp">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="inp "
            id="exampleInputPassword1"
            name="password"
            ref={passwordRef}
            defaultValue={values.password}
            onChange={onchange}
          />
        </div>
        <div className="mb-3 cont-inp">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="inp"
            id="exampleInputPassword1"
            name="image"
            ref={imageRef}
            defaultValue={values.image}
            onChange={onchange}
          />
        </div>
        <div className="mb-3 form-check w-100 ">
          <input
            type="checkbox"
            className="form-check-input  "
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="cont-btn">
        <button type="submit" className="btn btn-light " onClick={(e) =>{
          e.preventDefault()
          dispatch(loginReducer(values))
        } }>
          Submit
        </button>
        </div>
      </form>
     </div>
      
    </div>
  );
}
