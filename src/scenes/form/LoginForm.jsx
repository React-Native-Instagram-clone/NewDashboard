import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box m="20px">
            <Header title="Login USER" subtitle="Login to your user account" />

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
                            display='grid'
                            gap="30px"
                            gridTemplateColumns={isNonMobile ? "1fr 1fr" : "1fr"}
                        >
                        <h1>Image or a GIF-animation to go here</h1>
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns={isNonMobile ? "1fr 1fr 1fr" : "1fr"}
                            >
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
                                    sx={{ gridColumn: "span 4" }}
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
                                    sx={{ gridColumn: "span 4" }}
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
                                    sx={{ gridColumn: "span 4" }}
                                />
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px" gap='30px'>
                            <Button type="submit" color="secondary" variant="contained">
                                Sign In
                            </Button>
                            <Link to='/registration'>
                                <Button type="submit" color="secondary" variant="contained">
                                    Don't have a account? Create Account
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

    password: yup.string().required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    username: yup.string().required("Username is required"),

});

const initialValues = {
    password: "",
    confirmPassword: "",
    username: "",

};

export default Form;
