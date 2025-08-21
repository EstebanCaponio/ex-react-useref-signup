import { useState } from "react"

function App() {

  const [completeName, setCompleteName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [spec, setSpec] = useState('');
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!completeName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !spec.trim() ||
      !experience.trim() ||
      experience <= 0 ||
      !description.trim()) {
      alert('err: compila tutto correttamente');
      return;
    }
    console.log(
      'operazione eseguita', {
      completeName,
      username,
      password,
      spec,
      experience,
      description
    })
  }

  return (
    <>
      <div className="app-container">
        <div className="form-container">
          <form className="registration-form" onSubmit={submit}>
            <h2>Registrazione Sviluppatore</h2>
            <div className="form-group">
              <label>
                Nome completo
              </label>
              <input
                type="text"
                className="form-input"
                value={completeName}
                placeholder="Inserisci il nome completo"
                onChange={e => setCompleteName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>
                Username
              </label>
              <input
                type="text"
                className="form-input"
                value={username}
                placeholder="Inserisci l'username"
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>
                Password
              </label>
              <input
                type="password"
                className="form-input"
                value={password}
                placeholder="Inserisci la password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>
                Specializzazione
              </label>
              <select
                className="form-select"
                name="specializzazione"
                value={spec}
                onChange={e => { setSpec(e.target.value) }}
              >
                <option value="" disabled>Seleziona una specializzazione</option>
                <option value="fullstack">Full Stack</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                Anni d'esperienza
              </label>
              <input
                type="number"
                className="form-input"
                value={experience}
                onChange={e => { setExperience(e.target.value) }}
                placeholder="Anni d'esperienza"
              />
            </div>
            <div className="form-group">
              <label>
                Breve descrizione
              </label>
              <textarea
                name="descrizione"
                rows="5"
                className="form-textarea"
                value={description}
                onChange={e => { setDescription(e.target.value) }}
                placeholder="Inserisci la tua descrizione qui..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Invia</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
