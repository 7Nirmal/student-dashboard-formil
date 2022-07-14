import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';


export function EditEntry(){
const {id} = useParams();
//console.log(id);

const navigate = useNavigate();

const[entry,setEntry] = useState(null) ;
 const resultdata  = () => {fetch(`https://623d5baf7efb5abea68d2003.mockapi.io/guvi/student/${id}`)
.then((data)=> data.json())
.then(result=> setEntry(result));}
useEffect(() =>resultdata(), [])
   return  entry ?  <EditEntryForm data = {entry}/> : "Loading...";
}





function EditEntryForm({data}){

    const editstudent = (entry) =>{
        const newentry = {name:name , avatar:avatar, batch:batch, Department:department,University:university}
        fetch(`https://623d5baf7efb5abea68d2003.mockapi.io/guvi/student/${data.id}`,
        {method:"PUT",body:JSON.stringify(newentry),
        headers:{"Content-Type": "application/json"},}).then(data => data.json()).then(()=>navigate("/View-entry"))}



const navigate = useNavigate();
    const [name,setName] = useState(data.name);
    const [avatar,setAvatar] = useState(data.avatar);
    const [batch,setBatch] = useState(data.batch);
    const [department,setDepartment] = useState(data.Department);
    const [university,setUniversity] = useState(data.University);

  




    return (
        <div>
            <form className="entry-form" >
<TextField  value={name}   label="Name" variant="outlined"  onChange={(event)=>{setName(event.target.value)}}/>
 <TextField value={avatar}  label= "avatar" variant="outlined" onChange={(event)=>{setAvatar(event.target.value)}} />
<TextField value={batch} onChange={(event)=>{setBatch(event.target.value)}} label="batch" variant="outlined"   />
<TextField value={department}   onChange={(event)=>{setDepartment(event.target.value)}} label="department" variant="outlined"  />
<TextField  value={university}  onChange={(event)=>{setUniversity(event.target.value)}} label="university" variant="outlined"  />
<Button variant="outlined" onClick={editstudent} color="success">SAVE</Button>
</form>
        </div>
    )
    }