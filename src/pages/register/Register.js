import { Button, Container, Stack, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import RegisterService from "../../services/RegisterService";
import { showSnackbar } from "../../store/actions/settingActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../store/actions/authActions";
export default function Login() {
  const registerService = new RegisterService();
  const navigate = useNavigate();
  const registerDispatch = useDispatch();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      roleId: 3,
    },
    onSubmit: async (values) => {
      console.log(values);
      registerDispatch(logIn(values));
      registerService.postOneRegister(values).then((resp) => {
        showSnackbar({
          message: "User register success",
          severity: "success",
        });
      });
      navigate("/");
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Container sx={{ mt: 3 }} maxWidth="xs">
        <Stack spacing={3}>
          <TextField
            name="userName"
            required
            label="User Name"
            variant="outlined"
            onChange={handleChange}
            value={values.userName}
          ></TextField>
          <TextField
            name="password"
            type="password"
            required
            label="Password"
            variant="outlined"
            onChange={handleChange}
            value={values.password}
          ></TextField>
          <TextField
            name="firstName"
            type="firstName"
            required
            label="firstName"
            variant="outlined"
            onChange={handleChange}
            value={values.firstName}
          ></TextField>
          <TextField
            name="lastName"
            type="lastName"
            required
            label="lastName"
            variant="outlined"
            onChange={handleChange}
            value={values.lastName}
          ></TextField>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </Container>
      {/* {JSON.stringify(values)} */}
    </form>
  );
}
