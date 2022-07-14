import {Navigate, useNavigate} from 'react-router-dom';
import{useState,useEffect} from 'react';
import { ViewData } from './ViewData';


export function ViewEntry({student}){
    const navigate = useNavigate()
    const [studentdata,setStudentData] = useState([]);
    const getdata = () =>{
        fetch("https://623d5baf7efb5abea68d2003.mockapi.io/guvi/student")
         .then((data)=>data.json())
        .then((res)=>setStudentData(res))
    }
    useEffect(()=>{getdata()},[])
    console.log(studentdata);

    return(
        <div>
              <button onClick = {()=> navigate("/")}>back</button>
              <div className='container'>
        {studentdata.map((ele,index)=> <ViewData key={index} student={ele}/>)}
    </div>
        </div>
    )
}