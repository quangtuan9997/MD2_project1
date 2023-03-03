
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Seed from './components/Seed';
import Drying from './components/ Drying';
import Fresh from './components/ Fresh';
import LogIn from './components/LogIn';
import Sign from './components/Sign';
import ListUsers from './components/ListUsers';
function App() {
  return (
<Routes>
 <Route path='/' element={<Home></Home>}/>
 <Route path='/seed' element={<Seed></Seed>}/>
 <Route path='/drying' element={<Drying/>}/>
 <Route path='/fresh' element={<Fresh/>}/>
 <Route path='/login' element={<LogIn/>}/>
 <Route path='/sign' element={<Sign/>}/>
 <Route path='/listUsers' element={<ListUsers/>}/>
</Routes>
  );
}

export default App;
