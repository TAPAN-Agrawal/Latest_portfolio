import React from "react";
import classes from './Contact.module.scss';
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button, Heading,Label,Option,Span} from './Contact.styled'


function Contact() {

    const initialValue = {
        name: '',
        email: '',
        password: '',
        gender: '',
        country: ''
    }

    const validationSchema = yup.object().shape({
        name: yup.string().required("Name required"),
        email: yup.string().required("Email required"),
        password: yup.string().required("Password required"),
        gender: yup.string().required("Gender required"),
        // country: yup.string().required("Country required")


    })
    const submitHandler = (values: any) => {
        console.log("hello")
        localStorage.setItem("details", JSON.stringify(values))
        toast("data stored successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    return <div className={classes.parent}>
        <ToastContainer position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />
        <Heading>ContactUs</Heading>
        <div className={classes.main_container}>

            <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={submitHandler}>
                <Form >
                    <div className={classes.element}>
                        <Label>Name</Label><br />
                        <Field type="text" name="name" placeholder="Enter name"  className={classes.child_element}/>
                        <Span ><br />
                            <ErrorMessage name="name" className={classes.EEr}/>
                        </Span>
                    </div>
                    <div className={classes.element}>
                        <Label>Email</Label><br />
                        <Field type="text" name="email" placeholder="Enter email"  className={classes.child_element}/>
                        <Span ><br />
                            <ErrorMessage name='email' />
                        </Span>
                    </div>
                    <div className={classes.element}>
                        <Label>Password</Label><br />
                        <Field type="password" name="password" placeholder="Enter password"  className={classes.child_element}/>
                        <Span ><br />
                            <ErrorMessage name='password' />
                        </Span>
                    </div>


                    <div className={classes.element}>
                        <Label>Gender</Label><br />

                        <Label>
                            <Field type="radio" name="gender" value="male" />
                            Male
                        </Label><br />
                        <Label>
                            <Field type="radio" name="gender" value="female" />
                            Female
                        </Label><br />

                        <Span  ><br />
                            <ErrorMessage name="gender" />
                        </Span>
                    </div>
                    <div className={classes.element}>
                        <Label>Country</Label><br />
                        <Field name="selectedOption" as="select" className={classes.child_element}>

                            <option value="" >Please Select a country</option>
                            <option value="option 1">Australia</option>
                            <option value="option 2"> china</option>
                            <option value="option 3">Japan</option>
                            <option value="option 4">Korea</option>

                        </Field>
                        <Span  >
                            <br />
                            <ErrorMessage name="Country" />
                        </Span>
                    </div>


                    <div >
                        <Button type='submit' >Submit</Button>
                    </div>

                </Form>
            </Formik>
        </div>;
    </div>
}

export default Contact;