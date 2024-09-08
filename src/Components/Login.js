import React, { useContext } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/userContext";


export default function Login() {
    const navigate = useNavigate();
    const {userData , setUserData} = useContext(UserContext);
    // Function to handle form submission
    async function login(values) {
         // Log the form values
        try {
            const response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values);
            
            if (response.data.message === 'success') {
                localStorage.setItem('userToken', response.data.token);
                 
                setUserData(response.data.token); 
                navigate('/home'); 
            
            } else {
                alert("Login failed. Please check your credentials.");
            }
        } catch (error) {
            if (error.response) {
                console.error("An error occurred:", error.response.data.message);
                alert("An error occurred during login. Please try again.");
            } else {
                console.error("Network error:", error);
                alert("A network error occurred. Please check your connection and try again.");
            }
        }
    }

    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid Email').required('Email Is Required'),
        password: Yup.string().required('Password Is Required')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, 'Password must be at least 6 characters long and include both letters and numbers'),
    });

    // useFormik hook to handle form state and submission
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: login,
        validationSchema,
    });

    return (
    <>
        <div className="login p-5">
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="name@example.com"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="alert alert-danger p-2 m-1" role="alert">
                            {formik.errors.email}
                        </div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="alert alert-danger p-2 m-1" role="alert">
                            {formik.errors.password}
                        </div>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-success">Login</button>
            </form>
        </div>
    </>
    );
}
