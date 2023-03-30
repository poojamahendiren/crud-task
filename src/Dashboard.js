import React, { useEffect, useState } from "react";                   //1
import './App.css';
import axios from "axios";                                          //4
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
//2 function
function Dashboard() {  

  let formValues={
   name : "",
   age : "",
   email : "",
   gender : "",
   courses : "",
  }        
  const [formData , setFormData] =useState(formValues);          //13 storing in stateVariable     
  const [addName, setAddName] = useState("");
  const [addAge, setAddAge] = useState("");
  const [addEmail, setAddEmail] = useState("");
  const [addGender, setAddGender] = useState("");
  const [addCourses, setAddCourses] = useState("");                    
  const [userData, setUserData] = useState([]);
  //const [formData, setFormData] = useState(formValues);

  useEffect(() => {                                                //5
    async function getData() {
      const response = await axios.get(
        "https://63244cd2bb2321cba9293a5a.mockapi.io/users"

      )
      setUserData(response.data);


    }
    getData();
  }, []);

  

  const handleSubmit = async (e) => {            //post method to store the change in state variable and create the data
    e.preventDefault();
    const response = await axios.post("https://63244cd2bb2321cba9293a5a.mockapi.io/users", {
      name : addName.name,
      age : addAge.age,
      email : addEmail.email,
      gender : addGender.gender,
      courses : addCourses.courses,
    })
    console.log(response);

    setUserData([...userData, response.data])

  }
  const handleDelete = async (id) => {
    const response = await axios.delete(
      `https://63244cd2bb2321cba9293a5a.mockapi.io/users/${id}`
    );
    console.log(response);
    const user = userData.filter((row) => row.id !== response.data.id);
    setUserData(user);
  };

  const onPopulateData = (id) => {
    const selectedData = userData.filter((row) => row.id === id)[0];
    setFormData({
      ...formData,
      ...selectedData,
    });
  };

  return (                         //3 return  /6 table,edit delete button  /7 form mui /8 textfield /9 Radio button /10 selectbox /11 submit //12 preventDefault submit //14 textfield, onChange, value
  
                                   
    <Box >
      
          <h3 style={{textAlign:"left"}}>User Form</h3>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            textAlign:"left",border:"2px solid black",borderRadius: "12px",width: "500px",paddingLeft:"20px"}}
            noValidate
            autoComplete="off"
            onSubmit={(e) => handleSubmit(e)}>

            <TextField 
            id="name" 
            label="Name" 
            variant="standard"
            value = {addName.name}
            onChange={(e) => setAddName({...addName, name:e.target.value})} /><br />

            <TextField 
            id="age" 
            label="Age" 
            variant="standard" 
            type="number" 
            value = {addAge.age}
            onChange={(e) => setAddAge({...addAge, age:e.target.value})}/><br />

            <TextField 
            id="email" 
            label="Email" 
            variant="standard" 
            value = {addEmail.email}
            onChange={(e) => setAddEmail({...addEmail, email:e.target.value})}/><br /><br />

            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="gender"
              value = {addGender.gender}
              onChange={(e) => setAddGender({...addGender, gender:e.target.value})}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female"  />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>


            <FormControl>
              <InputLabel id="Courses">Courses</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Courses"
                value = {addCourses.courses}
                onChange={(e) => setAddCourses({...addCourses , courses:e.target.value})}
              >
                <MenuItem value="React">React</MenuItem>
                <MenuItem value="Node">Node</MenuItem>
                <MenuItem value="JavaScript">JavaScript</MenuItem>
              </Select>
            </FormControl><br /><br />

            <Button variant="contained" type="submit" >Submit</Button>
          </Box><br/>
          <Box>
          <h3 style={{textAlign:"left"}}>User Data</h3>
          <TableContainer component={Paper}>
            <Table sx={{ width: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">Gender</TableCell>
                  <TableCell align="right">Courses</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((row) => (
                  <TableRow
                    key={row.id}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.gender}</TableCell>
                    <TableCell align="right">{row.courses}</TableCell>
                    <TableCell>
                      <Button variant="text" onClick={() => onPopulateData(row.id)}> Edit </Button>
                      <Button variant="text" onClick={() => handleDelete(row.id)}> Delete </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Box>
          </Box>
          



  );
}

export default Dashboard;