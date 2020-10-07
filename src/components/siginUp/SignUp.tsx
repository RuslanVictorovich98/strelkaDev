import React from 'react'
import {Formik, Field} from 'formik';
import './SignUp.css'
import {Button} from 'antd';
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
                        <label htmlFor="name">Name</label>
                        <input
                            className="formInput"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <label htmlFor="surname">Surname</label>
                        <input
                            className="formInput"
                            type="surname"
                            name="surname"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.surname}
                        />
                        <div className="genderInput">
                            <label htmlFor="email">Gender</label>
                            <span>
                                <span>Мужской</span>
                            {/*<input*/}
                            {/*    className="formInput"*/}
                            {/*    type="radio"*/}
                            {/*    name="gender"*/}
                            {/*    onClick={() => {values.gender = true}}*/}
                            {/*    onBlur={handleBlur}*/}
                            {/*    checked={values.gender || initialValues.gender}*/}
                            {/*    // value={values.gender}*/}
                            {/*/>*/}
                                <Field type="checkbox" name="gender" value = "mean" />
                            </span>
                            <span>
                              <span>женский</span>
                                {/*<input*/}
                                {/*    className="formInput"*/}
                                {/*    type="radio"*/}
                                {/*    name="gender"*/}
                                {/*    onClick={() => {console.log('нажав');values.gender = false}}*/}
                                {/*    onBlur={handleBlur}*/}
                                {/*    checked ={values.gender || initialValues.gender}*/}
                                {/*    // value={values.email}*/}
                                {/*/>*/}
                                <Field type="checkbox" name="gender" value = "female" />
                          </span>

                        </div>
                        <label htmlFor="surname">Email Address</label>
                        <input
                            className="formInput"
                            type="text"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <label htmlFor="password">Password</label>
                        <input
                            className="formInput"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
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