import { contacts } from "./data"
function App() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <select>
                        {contacts.map((c) => <option>{c}</option>)}
                    </select>
                </div>
                <textarea></textarea>
                <div>
                    <button>SEND</button>
                </div>
            </form>
        </div>
    )
}
export default App