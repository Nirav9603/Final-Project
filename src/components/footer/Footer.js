import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

function Footer(props) {

    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Name.").matches(/^[A-Za-z ]*$/, 'Please enter valid name').min(2),
        email: yup.string().email("Please Enter Email.").required("Please Enter Valid Email.")
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleSubmit, handleBlur, handleChange, errors, touched } = formikObj;

    return (
        <div>
            <footer className="footer-section">
                <div className="container relative">
                    <div className="sofa-img">
                        <img src="assets/images/sofa.png" alt="Image" className="img-fluid" />
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="subscription-form">
                                <h3 className="d-flex align-items-center"><span className="me-1"><img src="assets/images/envelope-outline.svg" alt="Image" className="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>
                                <Formik values={formikObj}>
                                    <Form onSubmit={handleSubmit} className="row g-3">
                                        <div className="col-auto">
                                            <input onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" placeholder="Enter your name" />
                                            <p>{errors.name && touched.name ? errors.name : ""}</p>
                                        </div>
                                        <div className="col-auto">
                                            <input onChange={handleChange} onBlur={handleBlur} type="email" className="form-control" placeholder="Enter your email" />
                                            <p>{errors.email && touched.email ? errors.email : ""}</p>
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn btn-primary">
                                                <span className="fa fa-paper-plane" />
                                            </button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                            <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Furni<span>.</span></a></div>
                            <p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
                            <ul className="list-unstyled custom-social">
                                <li><a href="#"><span className="fa fa-brands fa-facebook-f" /></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-twitter" /></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-instagram" /></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-linkedin" /></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <div className="row links-wrap">
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><NavLink to={'/about'}>About us</NavLink></li>
                                        <li><NavLink to={'/service'}>Services</NavLink></li>
                                        <li><NavLink to={'/blog'}>Blog</NavLink></li>
                                        <li><NavLink to={'/contact'}>Contact us</NavLink></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Knowledge base</a></li>
                                        <li><a href="#">Live chat</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Jobs</a></li>
                                        <li><a href="#">Our team</a></li>
                                        <li><a href="#">Leadership</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Nordic Chair</a></li>
                                        <li><a href="#">Kruzo Aero</a></li>
                                        <li><a href="#">Ergonomic Chair</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-top copyright">
                        <div className="row pt-4">
                            <div className="col-lg-6">
                                <p className="mb-2 text-center text-lg-start">Copyright ©. All Rights Reserved. — Designed with love by <a href="https://untree.co">Untree.co</a> {/* License information: https://untree.co/license/ */}
                                </p>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end">
                                <ul className="list-unstyled d-inline-flex ms-auto">
                                    <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default Footer;