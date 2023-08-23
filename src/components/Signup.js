import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../App.css'

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/')
    }
    // eslint-disable-next-line
  }, [])
  const onChange = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
      props.showAlert('Password and Confirm Password doesnot match', 'danger')
    } else {
      const response = await fetch(
        // `http://localhost:1000/api/auth/createUser`
        `https://inotebook-backend-hdoh.onrender.com/api/auth/createUser`
        ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
          }),
        }
      );
      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.authToken);
        navigate("/");
        props.showAlert('Account created Successfully', 'success')
      } else {
        props.showAlert(json.error, 'danger')
      }
    }
  };
  return (
    <div className="container my-3 logSign">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
            autoComplete="off"
            value={credentials.name}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            autoComplete="off"
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            minLength={5}
            autoComplete="off"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            required
            minLength={5}
            autoComplete="off"
            value={credentials.cpassword}
            onChange={onChange}
          />
        </div>
        {/* <button type="submit" className="btn btn-primary">
          Submit
        </button> */}
        <div className='buttonContainer' >
        <button type="submit" className="btn btn-success login my-2" >Sign In</button>
        <Link to='/login' role='button' className= "btn btn-primary signup my-2">Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
