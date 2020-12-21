import './App.css';
import React, {useState} from 'react'
import Intro from "../Intro/Intro";
import Main from "../Main/Main";
import Toolbar from "../toolbar/Toolbar";

function App() {
    const [status,introSwitch] = useState(1)

    setTimeout(()=> {
        introSwitch(0)
    },2000)

  return (
      <div className="App">
          <Intro/>
          {status ?null
              :
              <div>
                  <Toolbar/>
                  <Main/>
              </div>
          }
     </div>
  );
}

export default App;
