import { Grid, TextField, Typography, FormControlLabel, Checkbox, Button, Box, Alert, InputLabel, MenuItem, Select, FormControl, FormLabel,
RadioGroup, Radio, FormGroup, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } 
from '@mui/material';
import { LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

function App() {

  // States
  const [name, setName] = useState() //Name
  const [email, setEmail] = useState() //EMail
  const [dob, setDob] = useState(null) //Date of Birth
  const [st, setSt] = useState('') //State
  const [gender, setGender] = useState() //Gender

  return (
    <>
      <Box display="flex" justifyContent="center" sx={{
       backgroundColor:"#B71C1C" , padding:2}}>
        <Typography variant="h4" component="div" sx={{ 
          fontWeight:"bold", color:"white"}}>Resume Uploader</Typography>
      </Box>
      <Grid container justifyContent="center">

        <Grid item xs={5}>
          <Box component="form" sx={{ p: 3 }} noValidate id="resume-form" >
            <TextField id="name" name="name" required fullWidth margin='normal' label='Name' onChange={(e) => setName(e.target.value)} />
            <TextField id="email" email="email" required fullWidth margin='normal' label='Email' onChange={(e) => setEmail(e.target.value)} />
            <Box mt={2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                label="Date of Birth"
                value={dob} 
                onChange={(newValue) => setDob(newValue)} 
                renderInput={(props) => <TextField {...props} />}
                />
              </LocalizationProvider>
            </Box>
            <FormControl fullWidth margin='normal'>
              <InputLabel id="state-select-label">State</InputLabel>
              <Select LabelId='state-select-label' id='state-select' value={st} Label='st' onChange={(e)=>{setSt(e.target.value)}}>
                <MenuItem value="AP">Andhra Pradesh</MenuItem>
                <MenuItem value="ARP">Arunachal Pradesh</MenuItem>
                <MenuItem value="ASM">Assam</MenuItem>
                <MenuItem value="BH">Bihar</MenuItem>
                <MenuItem value="CH">Chhattisgarh</MenuItem>
                <MenuItem value="G">Goa</MenuItem>
                <MenuItem value="GJ">Gujarat</MenuItem>
                <MenuItem value="JH">Jharkhand</MenuItem>
                <MenuItem value="KA">Karnataka</MenuItem>
                <MenuItem value="KL">Kerala</MenuItem>
                <MenuItem value="MP">Madhya Pradesh</MenuItem>
                <MenuItem value="MH">Maharashtra</MenuItem>
                <MenuItem value="MR">Manipur</MenuItem>
                <MenuItem value="MGH">Meghalaya</MenuItem>
                <MenuItem value="MZ">Mizoram</MenuItem>
                <MenuItem value="N">Nagaland</MenuItem>
                <MenuItem value="O">Odisha</MenuItem>
                <MenuItem value="P">Punjab</MenuItem>
                <MenuItem value="RJ">Rajasthan</MenuItem>
                <MenuItem value="S"> Sikkim</MenuItem>
                <MenuItem value="TN">Tamil Nadu</MenuItem>
                <MenuItem value="TL">Telangana</MenuItem>
                <MenuItem value="TR">Tripura</MenuItem>
                <MenuItem value="UK">Uttarakhand</MenuItem>
                <MenuItem value="UP">Uttar Pradesh</MenuItem>
                <MenuItem value="WB">West Bengal</MenuItem>
              </Select>
            </FormControl>
          
            <FormControl fullWidth margin='normal'>
              <FormLabel id="gender-radio">Gender</FormLabel>
              <RadioGroup row name="gender" aria-labelledby="gender-radio">
                <FormControlLabel value="male" control={<Radio />} label='Male' onChange={(e) => setGender(e.target.value)} />
                <FormControlLabel value="female" control={<Radio />} label='Female' onChange={(e) => setGender(e.target.value)} />
                <FormControlLabel value="other" control={<Radio />} label='Other' onChange={(e) => setGender(e.target.value)} />
              </RadioGroup>
            </FormControl>


          </Box>
        </Grid>

        <Grid item xs={7}>
          <Box display="flex" justifyContent="center" sx={{ backgroundColor: 'info.light', padding: 1 }}>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'white' }}> List of Candidates</Typography>
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">DOB</TableCell>
                  <TableCell align="center">State</TableCell>
                  <TableCell align="center">Gender</TableCell>
                  <TableCell align="center">Location</TableCell>
                  <TableCell align="center">Profile</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center">Prity</TableCell>
                  <TableCell align="center">prity@gmail.com</TableCell>
                  <TableCell align="center">12/08/1998</TableCell>
                  <TableCell align="center">Bihar</TableCell>
                  <TableCell align="center">Female</TableCell>
                  <TableCell align="center">Delhi Ranchi</TableCell>
                  <TableCell align="center"><Avatar src="#" /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

        </Grid>
      </Grid>
    </>
  );
}

export default App;
