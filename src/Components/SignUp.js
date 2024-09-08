import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/userContext";



export default function SignUp() {
    const navigate = useNavigate();
    const {userData , setUserData} = useContext(UserContext);
    // Function to handle form submission
    async function register(values) {
         // Log the form values
        try {
            const response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values);
            
            if (response.data.message === 'success') {
                localStorage.setItem('userToken', response.data.token);
                setUserData(response.data.token); 
                navigate('/login');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 409) {
                    console.error("This email is already registered. Please use a different email.");
                    alert("This email is already registered. Please use a different email.");
                } else {
                    console.error("An error occurred:", error.response.data.message);
                    alert("An error occurred during registration. Please try again.");
                }
            } else {
                console.error("Network error:", error);
                alert("A network error occurred. Please check your connection and try again.");
            }
        }
    }
    

    // object to vaildate form
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3 ,'Name Must Be 3 Letters Minimum').max(10 ,'Name Must Be 10 Letters Maximum').required('Name Is Required'),
        email: Yup.string().email('Invaild Email').required('Email Is Required'),
        password:Yup.string().required('Password Is Required').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/ , 'Password must be at least 6 characters long and include both letters and numbers'),
        rePassword:Yup.string().required('Re-Password Is Required').oneOf([Yup.ref('password')], 'Passwords must match'),
        phone:Yup.string().required('Phone Is Required').matches(/^01[0125][0-9]{8}$/,'Enter a valid Egyptian phone number')
    })

    

    // useFormik hook to handle form state and submission
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: ''
        },
        onSubmit: register,
        validationSchema,

    });

    return (
    <>
        <div className="signUp p-5">
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name?(
                      <div class="alert alert-danger p-2 m-1" role="alert">
                            {formik.errors.name}
                      </div>
                    ):null
                    }
                </div>
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
                    {formik.touched.email && formik.errors.email?(
                      <div class="alert alert-danger p-2 m-1" role="alert">
                            {formik.errors.email}
                      </div>
                    ):null
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password?(
                      <div class="alert alert-danger p-2 m-1" role="alert">
                            {formik.errors.password}
                      </div>
                    ):null
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="rePassword" className="form-label">Re-Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="rePassword" 
                        name="rePassword"
                        placeholder="Re-Password"
                        onChange={formik.handleChange}
                        value={formik.values.rePassword}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.rePassword && formik.errors.rePassword?(
                      <div class="alert alert-danger p-2 m-1" role="alert">
                            {formik.errors.rePassword}
                      </div>
                    ):null
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        name="phone"
                        placeholder="Phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone?(
                      <div class="alert alert-danger p-2 m-1" role="alert">
                            {formik.errors.phone}
                      </div>
                    ):null
                    }
                </div>
                <button type="submit" className="btn btn-success">Register</button>
            </form>
        </div>
    </>
    );
}
