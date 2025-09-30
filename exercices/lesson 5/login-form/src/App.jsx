import { useState } from 'react'
import './App.css'

function App() {
        const [showPass, setShowPass] = useState(false);
        function switchShowPass(){
          setShowPass(!showPass)
        }
        return(
        <div className='App'>
          <p className="title">Hello, welcome to my website</p>
          <div>
            <input
              placeHolder="Email"
              className="input"
            />
          </div>
          <div>
            <input
              placeHolder="Password"
              type={showPass ? "text" : "password"}
              className="input"
            />
            <button
              className="show-button"
              onClick={switchShowPass}
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
          <div >
            <button className="login-button">
              Login
            </button>
            <button className="login-button">
              Sign up
            </button>
          </div>

        </div>
        )
      }

export default App
