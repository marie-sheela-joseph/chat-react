import { useState } from "react"
import { contacts } from "./data"
import './App.css'
function App() {
    const [current, setcurrent] = useState(contacts[0])
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setTimeout(() => alert(`'${message}'sent to ${current} at ${new Date()}}`), 4000)
    }
    return (
        <div className="app">
            <div>
                <h1>CHAT TIME</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label htmlFor="contact">To</label>
                        <br></br>
                        <select
                            id="contact"
                            value={current}
                            onChange={(e) => setcurrent(e.target.value)}
                        >
                            {contacts.map((c) => <option
                                key={c}
                                value={c}
                            >{c}</option>)}
                        </select>
                    </div>
                    <label htmlFor="message">Message</label>
                    <br></br>
                    <textarea
                        id="message"
                        onChange={(e) => setMessage(e.target.value)}
                    >{message}</textarea>
                    <div className="app__send">
                        <button>SEND</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default App
