import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductmanupulationFilter from './ProductmanupulationFilter';
import AdminNavbar from '../Admin/AdminNavbar';
import { useState } from 'react';
import { Alert,AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Modify() {
  const [alert,setAlert]=useState('')
   const navigate=useNavigate();
  const handleUpdateDAta = () => {

    setAlert('product Modified succesfully');
    setTimeout(() => {
      navigate('/adminpage');
    }, 3000);
    
    };
  return (
  <>
    <div>
       <AdminNavbar/>
    </div>
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
    sx={{
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    }}
    >
    
    <Box component="form" noValidate sx={{ mt: 3 }}>
    <h1>EDIT PRODUCT</h1>
    <Grid container spacing={2}>
    <Grid item xs={12} >
    <TextField
    autoComplete="given-name"
    name="name"
    required
    fullWidth
    id="name"
    label=" Name"
    autoFocus

    />
    </Grid>

    <Grid item xs={12}>
   <ProductmanupulationFilter/>
   </Grid>

    <Grid item xs={12} >
    <TextField
    required
    fullWidth
    id="ManuFacturer "
    label="ManuFacturer "
    name="ManuFacturer "
    autoComplete="ManuFacturer "
    
    /></Grid>





  
    <Grid item xs={12}>
    <TextField
    required
    fullWidth
    id="price"
    label="Price "
    name="price"
    autoComplete="price"
  
    />
    </Grid>

    <Grid item xs={12}>
    <TextField
    required
    fullWidth
    name="description"
    label="Description"
    type="description"
    id="description"
    autoComplete="new-Description"
 
    />
    </Grid>
    
    <Grid item xs={12}>
    <TextField
    required
    fullWidth
    name="url"
    label="image url"
    type="url"
    id="url"
    autoComplete="new-image url"

    />
    </Grid>
        
    </Grid>
    <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
    onClick={handleUpdateDAta}
    >
  Modify Product
    </Button>
    <Grid container justifyContent="flex-end">
    <Grid item>
    </Grid>
    </Grid>
    </Box>
    </Box>
    
    </Container>
    </ThemeProvider>

<div style={{position:'absolute',
right:'0',top:'0'}}>
{alert && (
<Alert severity="success">
<AlertTitle>Success</AlertTitle>
{alert}
</Alert>
)}
</div>
    </>
    );
    }
    
