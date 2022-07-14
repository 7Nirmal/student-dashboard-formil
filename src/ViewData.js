
export function ViewData ({student}){

return (
  <div className="student-container">
    <img className="student-image" src={student.avatar} alt={student.name}/>
    <div className="student-content">
            <p><b>NAME:</b>&nbsp;{student.name}</p>
            <p><b>BATCH:</b>&nbsp;{student.batch}</p>
            <p><b>DEPARTMENT:</b>&nbsp;{student.Department}</p>
            <p><b>UNIVERSITY:</b>&nbsp;{student.University}</p>
        
            </div>
  
  </div>
)
}