
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './component/home/home';
import About from './component/about';
import Feedbackform from './component/Feedbackform';
import Thanks from './component/Thanks';
import Register from './component/Register';
import Login from './component/Login';
import { useState } from 'react';
import Client from './component/Client';
import Qrcode from './component/Qrcode';
function App() {
	
	
  const myStorage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(JSON.parse(myStorage.getItem("user")));
  

  
  return (


    <div className="App container">

      <Routes>
        <Route exact path='/' element={< Home myStorage={myStorage} currentUser={currentUser} setCurrentUser={setCurrentUser} />}></Route>

        <Route exact path='/thanks' element={< Thanks />}></Route>
        <Route exact path='/give-feedback/:hotelName' element={<Feedbackform />}></Route>

        <Route exact path='/register' element={< Register />}></Route>
        <Route exact path='/login' element={< Login myStorage={myStorage} setCurrentUser={setCurrentUser} currentUser={currentUser}/>}></Route>
        <Route exact path='/about' element={< About />}></Route>
        
        <Route exact path='/client' element={< Client myStorage={myStorage} setCurrentUser={setCurrentUser} currentUser={currentUser}/>}>
        </Route>  
        <Route exact path='/qr-code' element={< Qrcode  myStorage={myStorage} currentUser={currentUser} setCurrentUser={setCurrentUser}/>}>

        </Route>
       
      </Routes>


    </div>

  );
}

export default App;
