import React, { useState } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../config'

function Auth(props) {

    const [userType, setUserType] = useState("Login");
    const [resetPass, setResetPass] = useState(false);

    const handleSignup = () => {
        setUserType('Signup')
        setResetPass(false)
    }

    const handleLogin = () => {
        setUserType('Login')
        setResetPass(false)
    }

    const handleResetPass = () => {
        setResetPass(true)
    }

    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Your Name.").matches(/^[A-Za-z ]*$/, 'Please enter valid name').min(2),
        email: yup.string().email("Please Enter Valid Email.").required("Plase Enter Your Email."),
        password: yup.string().required("Plase Enter Your Password.") .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, handleSubmit, errors, touched, handleBlur } = formikObj;

    const googleLogin = async () => {
        try{
            const data = await signInWithPopup(auth, provider)
            localStorage.setItem("login", JSON.stringify(data));
            Navigate("/home")
        }catch(error){  
            console.log(error);
        }
    }

    return (
        <div>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>
                                    {resetPass ? "Forgot Password" :

                                        userType === 'Login' ? "Login" : "Signup"

                                    }
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="untree_co-section">
                <div className="container">
                    <div className="block">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-8 pb-4">
                                <div className="row mb-5">
                                    <div className="col-lg-4">
                                        <div className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay={0}>
                                            <div className="service-icon color-1 mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                </svg>
                                            </div> {/* /.icon */}
                                            <div className="service-contents">
                                                <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                                            </div> {/* /.service-contents*/}
                                        </div> {/* /.service */}
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay={0}>
                                            <div className="service-icon color-1 mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                                </svg>
                                            </div> {/* /.icon */}
                                            <div className="service-contents">
                                                <p>info@yourdomain.com</p>
                                            </div> {/* /.service-contents*/}
                                        </div> {/* /.service */}
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay={0}>
                                            <div className="service-icon color-1 mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                </svg>
                                            </div> {/* /.icon */}
                                            <div className="service-contents">
                                                <p>+1 294 3925 3939</p>
                                            </div> {/* /.service-contents*/}
                                        </div> {/* /.service */}
                                    </div>
                                </div>
                                <div>
                                <GoogleLoginButton onClick={googleLogin()} />
                                </div>
                                
                                <Formik values={formikObj}>
                                
                                    <Form onSubmit={handleSubmit}>
                                        {
                                            userType === 'Login'
                                                ?
                                                ''
                                                :
                                                resetPass ? " "
                                                    :
                                                    <div className="form-group">
                                                        <label className="text-black" htmlFor="name">Name</label>
                                                        <input onChange={handleChange} onBlur={handleBlur} name='name' type="text" className="form-control" id="name" />
                                                        <p style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : ''}</p>
                                                    </div>
                                        }
                                        <div className="form-group">
                                            <label className="text-black" htmlFor="email">Email address</label>
                                            <input onChange={handleChange} onBlur={handleBlur} name='email' type="email" className="form-control" id="email" />
                                            <p style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : ''}</p>
                                        </div>
                                        {
                                            resetPass ? " "
                                                :
                                                <div className="form-group">
                                                    <label className="text-black" htmlFor="password">Password</label>
                                                    <input onChange={handleChange} onBlur={handleBlur} name='password' type="text" className="form-control" id="password" />
                                                    <p style={{ color: 'red' }}>{errors.password && touched.password ? errors.password : ''}</p>
                                                </div>
                                        }


                                        {
                                            userType === 'Login'
                                                ? <>{
                                                    resetPass ?
                                                        <button type="submit" className="btn btn-primary-hover-outline">Forgot Password</button>
                                                        :
                                                        <button type="submit" className="btn btn-primary-hover-outline">Login</button>
                                                }


                                                </>
                                                :
                                                <button type="submit" className="btn btn-primary-hover-outline">Signup</button>
                                        }


                                    </Form>
                                </Formik>
                                {
                                    userType === 'Login'
                                        ?
                                        <>
                                            <p>Create A New Account? <Link onClick={() => handleSignup()}>Signup</Link></p>


                                            {
                                                resetPass ? " " :

                                                    <p><Link onClick={() => handleResetPass()}>Forgot Password?</Link></p>
                                            }
                                        </>

                                        :
                                        <p>Already Have An Account <Link onClick={() => handleLogin()}>Login</Link></p>
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;