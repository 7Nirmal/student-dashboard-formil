import {useNavigate} from 'react-router-dom';

export function StudentCard(){
    const navigate = useNavigate();
    return(
        <div className="card-container">
            <img className="image" src="https://www.clipartmax.com/png/middle/159-1599036_student-euclidean-vector-high-school-student-cartoon.png" alt="Student"/>
            <h1>Student Dashboard</h1>
          
            <button className="button" onClick= {()=> navigate('/new-entry')}>New Entry</button>
            <button className="button" onClick= {()=> navigate('/view-entry')}>View Entries</button>
          
        
        </div>
    )
}