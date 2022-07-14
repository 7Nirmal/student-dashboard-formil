import './App.css';
import{Routes,Route} from 'react-router-dom';
import { StudentCard } from './StudentCard';
import {NewEntry} from './NewEntry';
import {ViewEntry} from './ViewEntry';
import {EditEntry} from './EditEntry';
function App() {
  return (
    <div className="App">
  
    <Routes>
      <Route path = "/" element ={  <StudentCard/>}/>
      <Route path = "/home" element ={  <StudentCard/>}/>
      <Route path="/new-entry" element={<NewEntry/>} />
      <Route path="/View-entry" element={<ViewEntry/>} />
      <Route path="/edit-entry/:id" element={<EditEntry/>} />

    </Routes>
    </div>
  );
}

export default App;
