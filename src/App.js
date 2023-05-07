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
          <Box></Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
