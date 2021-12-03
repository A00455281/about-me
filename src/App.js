import './App.css';
import AboutMe from './components/AboutMe'
import Town from './components/MyTown';
import { useState } from 'react';

function App() {
  const [tabName, setTab] = useState('a');

  return (
    <>
      <header>
        <div className="d-flex justify-content-start m-4">
            <h3>
              <span className={`me-3 pointer-curser ${ (tabName === 'a') ? 'text-primary' : ''}`} onClick={() => {setTab('a')}}>
                About me
              </span>
              <span className={`me-3 pointer-curser ${ (tabName === 'a') ? '' : 'text-primary'}`} onClick={() => {setTab('t')}}>
                My Town
              </span>
            </h3>
          </div>
      </header>
      <main className="d-flex m-4">
      { tabName == 't' ? <Town/> : <AboutMe/>}
      </main>
    </>
  );
}

export default App;