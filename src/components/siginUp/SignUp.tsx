import React from 'react'
import {Formik, Field} from 'formik';
import './SignUp.css'
import {Button} from 'antd';
import {Input, TextField} from '@material-ui/core';
import 'antd/dist/antd.css'
import {initialState} from "../../store/reducers/training";
// export const SignUp = () => {
//     return <div>
//         <p>registration Form</p>
//     </div>
// }


export const SignUp = () => (
    <div className={"formWrapper"}>
        <h1 className="titleForm">Регистрация</h1>
        <Formik
            initialValues={{name: '', surname: '', gender: "mean", email: '', password: ''}}
            validate={values => {
                // const errors = {};
                // if (!values.email) {
                //     errors.email = 'Required';
                // } else if (
                //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                // ) {
                //     errors.email = 'Invalid email address';
                // }
                // return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}

        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  initialValues,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>

                    <div className={"formBodyWrapper"}>
                        <TextField
                            className="fieldInputs"
                            id="outlined-password-input"
                            label="Name"
                            type="name"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                        <TextField
                            className="fieldInputs"
                            id="outlined-password-input"
                            label="Surname"
                            type="Surname"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                        <TextField
                            className="fieldInputs"
                            id="outlined-password-input"
                            label="Email"
                            type="password"
                            // autoComplete="current-password"
                            variant="outlined"
                        />
                        <TextField
                            className="fieldInputs"
                            id="outlined-password-input"
                            label="password"
                            type="password"
                            // autoComplete="current-password"
                            variant="outlined"
                        />
                        {/*<TextField*/}
                        {/*    id="outlined-password-input"*/}
                        {/*    label="Password"*/}
                        {/*    type="password"*/}
                        {/*    autoComplete="current-password"*/}
                        {/*    variant="outlined"*/}
                        {/*/>*/}
                        {errors.password && touched.password && errors.password}
                        {/*<button type="submit" disabled={isSubmitting}>*/}
                        {/*    Submit*/}
                        {/*</button>*/}
                        <Button type="primary" onClick={() => handleSubmit()}
                                className="formButton">Зарегистрировать</Button>
                    </div>
                </form>

            )}
        </Formik>
    </div>
);

