
import { useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import * as yup from "yup";

export function NewEntry(){
    const navigate = useNavigate();

    const addstudent = (student) => {
        fetch("https://623d5baf7efb5abea68d2003.mockapi.io/guvi/student",
        {method:"POST",body:JSON.stringify(student),
        headers:{"Content-Type": "application/json"},}).then(data => data.json()).then(()=>navigate("/View-entry"))
        // setMovieList([...movieList,newMovie]); 
        }
    const check = useFormik({
        initialValues:{
            name: "",
            avatar:"",
            batch:"",
            Department:"",
            University:"",
        },
        validationSchema: yup.object({
            name: yup.string().required("enter name"),
            avatar: yup.string().required(),
            batch: yup.number().required(),
            Department: yup.string().required(),
            University: yup.string().required(),
        }),
    
        onSubmit: (values) =>{
            console.log(values);
            addstudent(values);
        }

    });

    return(
        <div>
        <button onClick = {()=> navigate("/")}>back</button>
            <form onSubmit={check.handleSubmit} className="entry-form" >
            <TextField
            label="Name"
             variant="outlined"   
             name= "name" 
             value= {check.name}  
             onChange={check.handleChange} 
             onBlur={check.handleBlur}
             error = {check.touched.name && check.errors.name}
             helperText={check.touched.name && check.errors.name? check.errors.name :""}
             />
             
            <TextField 
             label="avatar"  
              variant="outlined" 
              name="avatar" 
              value={check.avatar}
              onChange={check.handleChange} 
              onBlur={check.handleBlur}
              error = {check.touched.avatar && check.errors.avatar}
              helperText={check.touched.avatar && check.errors.avatar? check.errors.avatar :""}/>
            <TextField label="batch" 
            variant="outlined"
             name="batch" 
             value={check.batch}  
             onChange={check.handleChange} 
             onBlur={check.handleBlur}
                error = {check.touched.batch && check.errors.batch}
             helperText={check.touched.batch && check.errors.batch? check.errors.batch :""}/>
            <TextField 
            label="Department"  
            variant="outlined" 
            name="Department"  
            value={check.Department}
            onChange={check.handleChange} 
            onBlur={check.handleBlur}
            error = {check.touched.Department && check.errors.Department}
            helperText={check.touched.Department && check.errors.Department? check.errors.Department :""}/>
            <TextField 
            label="University"  
            variant="outlined" 
            name="University" 
            value={check.University}
            onChange={check.handleChange} 
            onBlur={check.handleBlur} 
            error = {check.touched.University && check.errors.University}
            helperText={check.touched.University && check.errors.University? check.errors.University :""}/>
            <Button variant="outlined" type="submit" >ADD Entry</Button>
            </form>
            </div>
 
    )
}