import IconButton from "@mui/material/IconButton";
import {useNavigate} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export function ViewData ({student,getdata}){
const deleteStudent = (id) => {
  fetch(`https://623d5baf7efb5abea68d2003.mockapi.io/guvi/student/${id}`,{method:"DELETE"})
  .then((data)=>data.json()).then(()=>getdata());

}

const navigate = useNavigate();
return (
  <div className="student-container">
    <img className="student-image" src={student.avatar} alt={student.name}/>
    <div className="student-content">
            <p><b>NAME:</b>&nbsp;{student.name}</p>
            <p><b>BATCH:</b>&nbsp;{student.batch}</p>
            <p><b>DEPARTMENT:</b>&nbsp;{student.Department}</p>
            <p><b>UNIVERSITY:</b>&nbsp;{student.University}</p>
            <IconButton aria-label="delete" onClick={()=>deleteStudent(student.id)}>
        <DeleteIcon  />
      </IconButton>
      <IconButton aria-label="delete" onClick={()=>navigate(`/edit-entry/${student.id}`)}>
        <EditIcon/>
      </IconButton>


          
        
            </div>
  
  </div>
)
}