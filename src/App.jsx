import Header from './components/Header'
import { useState } from 'react'

function App() {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ btnText, setBtnText ] = useState('Login')
  const [ userNameRequired, setUsernameRequired] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();

    if(!(username && password)) {
      window.alert('username and password is required')
      return
    }

    setBtnText('Submitted')
  }

  return (
    <div>
    <Header />
      <form className="form w-full grid grid-cols-6 gap-0 mt-10" onSubmit={onSubmit}>
            <div className="task-inputs-grid">
                <label className="task-label">Username</label>
                <input className="task-input" aria-label='username-input' type="text" value={username}
                    onChange={(e) => setUsername(e.target.value)} placeholder="Add Task"
                />
                <p>{ userNameRequired ? 'username is required' : '' }</p>
            </div>
            <div className="task-inputs-grid">
                <label className="task-label mt-3">Password</label>
                <input className="task-input" aria-label='password-input' type="text" value={password}
                    onChange={(e) => setPassword(e.target.value)} placeholder="Add Day & time" />
            </div>
            
            <div className="col-span-5 col-start-2 my-2">
               <button role="button" type='submit' >{btnText}</button>
            </div>
        </form>
    </div>
  )
}

export default App
