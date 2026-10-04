import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function Auth() {
    const [mode , setMode] = useState("Signup");
    const [error , setError] = useState(null);
    const navigate = useNavigate();
    const {signUp , user , logout , login} = useContext(AuthContext);

    const {register, handleSubmit , formState: {errors}} = useForm();

    function onSubmit(data){
      setError(null);
      let result;
      if(mode === "Signup"){
        result = signUp(data.email,data.password);
      }
      else{
        result = login(data.email,data.password);
      }
      // alert(`User logged in ${data.email} ? ${result} == true : ${result}`)

      if(result.success){
        navigate("/")
      }
      else{
        setError(result.error)
      }
      console.log(result)
    }

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          
          <h1 className="page-title">{mode === "Signup" ? "Sign Up" : "Login"}</h1>

          {user && <p style={{color: "red"}}>User Logged in : {user.email}</p>}
          <button onClick={() => logout()}>Log Out</button>

          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">

            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-input" id="email" {...register('email' , {required: 'Email is Required'})}  />
              {errors.email && (<span className="form-error">{errors.email.message}</span>)}
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-input" id="password"
              {...register('password' , {required: 'Password is Required',
                minLength:{value: 6 , message: "Min Length is 6"},
                maxLength:{value: 15 , message: "Max Length is 15"}
              })}
              />
              {errors.password && (<span className="form-error">{errors.password.message}</span>)}
            </div>

            <button type="submit" className="btn btn-primary btn-large">
                {mode === "Signup" ? "Sign Up" : "Login"}
            </button>
          </form>

        <div className="auth-switch" style={{cursor: "pointer"}}>
            { mode === "Signup" ? (<p>Already have a account? <span className="auth-link" onClick={() => setMode("login")}>Login</span> </p>)
            : (<p>Don't have a account? <span className="auth-link" onClick={() => setMode("Signup")}>Sign Up</span> </p>)
            }
        </div>

        </div>
      </div>
    </div>
  );
}