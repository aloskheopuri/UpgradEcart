import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';





const defaultTheme = createTheme();
export default function Address() {

const handleSubmit = (event) => {
event.preventDefault();
const data = new FormData(event.currentTarget);

//for validation to move to next step
const firstName = data.get('firstName');
const lastName = data.get('lastName');
const state = data.get('state');
const city = data.get('city');
const landmark = data.get('Landmark');
const zipCode = data.get('Zip-Code');
const phone = data.get('phone');

if (!firstName || !lastName || !state || !city || !landmark || !zipCode || !phone) {
alert('Please fill out all required fields.')
return;
}

console.log({
email: data.get('email'),
password: data.get('password'),
});
};

return (
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

<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
<Grid container spacing={2}>
<Grid item xs={12} >
<TextField
autoComplete="given-name"
name="firstName"
required
fullWidth
id="firstName"
label="First Name"
autoFocus
/>
</Grid>
<Grid item xs={12} >
<TextField
required
fullWidth
id="lastName"
label="Last Name"
name="lastName"
autoComplete="family-name"
/>
</Grid>
<Grid item xs={12}>
<TextField
required
fullWidth
id="state"
label="state "
name="state"
autoComplete="state"
/>
</Grid>
<Grid item xs={12}>
<TextField
required
fullWidth
name="city"
label="city"
type="city"
id="city"
autoComplete="new-city"
/>
</Grid>

<Grid item xs={12}>
<TextField
required
fullWidth
name="Landmark"
label="Landmark"
type="Landmark"
id="Landmark"
autoComplete="new-landmark"
/>
</Grid>

<Grid item xs={12}>
<TextField
required
fullWidth
name="Zip-Code"
label="Zip-Code"
type="Zip-Code"
id="Zip-Code"
autoComplete="new-Zip-Code"
/>
</Grid>

<Grid item xs={12}>
<TextField
required
fullWidth
name="phone"
label="Contact Number"
type="phone"
id="phone"
autoComplete="new-phone"
/>
</Grid>

</Grid>
<Button
type="submit"
fullWidth
variant="contained"
sx={{ mt: 3, mb: 2 }}
>
Save Address
</Button>
<Grid container justifyContent="flex-end">
<Grid item>
</Grid>
</Grid>
</Box>
</Box>

</Container>
</ThemeProvider>
);
}
