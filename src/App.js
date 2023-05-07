import { Grid, TextField, Typography, FormControlLabel, Checkbox, Button, Box, Alert, InputLabel, MenuItem, Select, FormControl, FormLabel,
RadioGroup, Radio, FormGroup, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } 
from '@mui/material';

function App() {
  return (
    <>
      <Box display="flex" justifyContent="center" sx={{
       backgroundColor:"error.light" , padding:2}}>
        <Typography variant="h4" component="div" sx={{ 
          fontweight:"bold", color:"white"}}>Resume Uploader</Typography>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={5}>
          <h1>Form</h1>
        </Grid>
        <Grid item xs={7}>
          <Box display="flex" justifyContent="center" sx={{
            backgroundColor: "info.light", padding: 1
          }}>
            <Typography variant="h5" component="div" sx={{
              fontWeight: "bold", color:"white" }}>
                List of Candidates
              </Typography>
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
                  <TableCell align="center">Avatar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center">Sonam</TableCell>
                  <TableCell align="center">sonam@gmail.com</TableCell>
                  <TableCell align="center">20/10/1995</TableCell>
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
