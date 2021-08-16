import React from "react";

import { Link } from "react-router-dom";


function Login() {
  
  return (
    <section className={classes.section}>
      <article>
        <Card className={classes.card}>
          <Typography className={classes.title}>Bountiful Dogs</Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="dense"
              name="username"
              label="User Name"
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="dense"
              type="password"
              name="password"
              label="Password"
              fullWidth
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.auth}
            >
              Sign In
            </Button>
          </form>

          <div className={classes.signuparea}>
            <Typography>
              Don't have an account?{" "}
              <Link style={{ textDecoration: "none" }} to="/accounts/signup">
                <span className={classes.signup}>Sign Up</span>
              </Link>
            </Typography>
          </div>
        </Card>
      </article>
    </section>
  );
}

export default Login;
