import { useState } from "react";

export default function Auth() {
    const [mode , setMode] = useState("Signup")
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">{mode === "Signup" ? "Sign Up" : "Login"}</h1>
          <form action="" className="auth-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-input" id="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-input" id="password"/>
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