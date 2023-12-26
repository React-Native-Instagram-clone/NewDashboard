import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import LoginPic from "../../assets/login.svg"
const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
        //to check if user exists in localstorage based on username and password
        const user = JSON.parse(localStorage.getItem("users"));
        const userName = user.map((user) => user.username);
        const password = user.map((user) => user.password);
        const userExists = userName.includes(values.username);
        const passExists = password.includes(values.password);
        //check the assigned role of user and alert with login message
        const assignedRoles = JSON.parse(localStorage.getItem("assignedRoles"));
        const assignedRole = assignedRoles.filter((role) => role.user === values.username);
        console.log(assignedRole, "assignedRole")
        if (userExists && passExists) {
            alert("Login Successful as " + assignedRole[0].role + "");
        } else {
            alert("Invalid Username or Password");
        }
        localStorage.setItem("signedInUser", JSON.stringify(assignedRole[0].role))

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
                            gridTemplateColumns={isNonMobile ? "1fr 2fr" : "1fr"}
                        >
                            <img src={LoginPic} alt='login-pic' width={350} />
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns={isNonMobile ? "1fr 1fr 1fr" : "1fr"}
                            >
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

    username: yup.string().required("Username is required"),

});

const initialValues = {
    password: "",
    username: "",

};

export default Form;
