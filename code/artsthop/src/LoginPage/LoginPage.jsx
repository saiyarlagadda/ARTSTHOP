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
import './LoginPage.css';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from "firebase/auth"

const LoginPage = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
        signInWithEmailAndPassword(auth, data.get("email"), data.get("password")).then((userCredential) => {
          const user = userCredential.user;
          console.log("User Has Been Authenticated!!");
          console.log(user);
          // alert("User Has Been Authenticated!!!!!!")
          // const profilePic = result.user.photoURL;
          // use local storage if you want.

          localStorage.setItem("user", JSON.stringify(user));
          // localStorage.setItem("profilePic", profilePic);
          if(user) {
            window.location = '/';
          }
      }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error Code: " + errorCode);
          console.log("Error Message: " + errorMessage);
          alert(errorMessage)
      })
    };

    return (
        <Container id='login-container' component="main" maxWidth="sm">
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
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                        Sign In
                    </Button>

                    {/* <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={signInWithGoogle}
                    >
                        Sign In with Google
                    </Button> */}
                    
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="./register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default LoginPage