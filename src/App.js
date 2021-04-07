import logo from './logo.svg';
import './App.css';

import Login from './Login';
import OnlineExam from './OnlineExam';
import Result from './Result';
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [dis, setDis]=useState({});
  const [m, setM]=useState(0);

  function ans(e)
  {
    if(e.target.value==="0")
    {
      setM((per)=>(per+1))
    }
  }

  if(m>=10)
  {
    setM((per)=>(per+0));
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login dis={dis} di={setDis} />
          </Route>
          <Route path="/OnlineExam">
            <OnlineExam dis={dis} ms={m} check={ans} />
          </Route> 
          <Route path="/Result">
            <Result dis={dis} ms={m} />
          </Route> 
        </Switch>
      </Router>

    </div>
  );
}

export default App;
