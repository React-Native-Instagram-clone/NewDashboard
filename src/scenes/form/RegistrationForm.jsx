import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="User Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Confirm Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmEmail}
                name="confirmEmail"
                error={!!touched.confirmEmail && !!errors.confirmEmail}
                helperText={touched.confirmEmail && errors.confirmEmail}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="User Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Confirm Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                name="confirmPassword"
                error={!!touched.confirmPassword && !!errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Website"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.website}
                name="website"
                error={!!touched.website && !!errors.website}
                helperText={touched.website && errors.website}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Username"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                name="username"
                error={!!touched.username && !!errors.username}
                helperText={touched.username && errors.username}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nickname"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nickname}
                name="nickname"
                error={!!touched.nickname && !!errors.nickname}
                helperText={touched.nickname && errors.nickname}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Display Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.displayName}
                name="displayName"
                error={!!touched.displayName && !!errors.displayName}
                helperText={touched.displayName && errors.displayName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Input Field"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.inputField}
                name="inputField"
                error={!!touched.inputField && !!errors.inputField}
                helperText={touched.inputField && errors.inputField}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px" gap='30px'>
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
              <Link to='/login'>
                <Button color="secondary" variant="contained">
                  Already Signed up? Login
                </Button>
              </Link>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref("email"), null], "Emails must match")
    .required("Confirm Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  website: yup.string().url("Invalid URL").required("Website is required"),
  username: yup.string().required("Username is required"),
  nickname: yup.string().required("Nickname is required"),
  displayName: yup.string().required("Display Name is required"),
  inputField: yup.string().required("Input Field is required"),
});

const initialValues = {
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  website: "",
  username: "",
  nickname: "",
  displayName: "",
  inputField: "",
};

export default Form;
