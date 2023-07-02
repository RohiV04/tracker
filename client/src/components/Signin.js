import React from 'react'
import './signin.css'
function Signin() {
  return (
    <div>
      <div className="container">
      <div className="glass-form">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signin
