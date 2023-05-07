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
        </Grid>
      </Grid>
    </>
  );
}

export default App;
