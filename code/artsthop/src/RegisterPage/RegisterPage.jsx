import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../Firebase.js"
import './RegisterPage.css';

const RegisterPage = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            fname:data.get("fname"),
            lname:data.get("lname"),
            email: data.get("email"),
            password: data.get("password"),
        });
        createUserWithEmailAndPassword(auth, data.get("email"), data.get("password")).then((userCredential) => {
            const user = userCredential.user;
            console.log("User Has Been Created!!");
            console.log(user);
            alert("Success!!!!")
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error Code: " + errorCode);
            console.log("Error Message: " + errorMessage);
            alert(errorMessage)
        })
    };

    return (
        <Container id='register-container' component="main" maxWidth="sm">
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 6,
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="fname"
                        label="First Name"
                        name="lname"
                        autoComplete="fname"
                        autoFocus
                    />
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="lname"
                        label="Last Name"
                        name="lname"
                        autoComplete="lname"
                        autoFocus
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        style={{ backgroundColor: 'black' }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="./login" variant="body2">
                                {"Already a User? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default RegisterPage