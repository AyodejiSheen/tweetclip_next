import { ErrorMessage, Field, Form, Formik } from "formik"
import { useContext } from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import AuthContext from "../../context/auth/context";
import UiContext from "../../context/UI/context";





export const ForgotPassword = () => {

    let { setAlert } = useContext(UiContext);
    let { ResetPassword } = useContext(AuthContext)

    //creating  intialvalues for formik
    const intialValues = {
        email: "",
    }

    //validationSchema--- to integrate validations on the form using Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
    })


    const onSubmit = (data, { resetForm }) => {
        setAlert({ msg: null, type: "loading" });
        setTimeout(() => {
            ResetPassword(data)
        }, 2000)
    }


    return (
        <>
            <div>
                <h2 className="text-center font-bold text-2xl">Forgot Password ?</h2>
                <p className="text-slate-400 font-medium text-center">Enter your email to reset your password.</p>
            </div>

            <div>
                <Formik initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>

                        <div className='my-4 md:mt-0 lg:py-1.5'>
                            <label className="block text-sm">
                                <span className="text-gray-700">Email Address</span>
                                <Field
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border p-3 text-sm font-medium focus:border-sky-400 focus:outline-none focus:shadow-outline-purple rounded"
                                />
                                <ErrorMessage name="email" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                            </label>
                        </div>

                        <div className="gap-4 lg:flex justify-center">
                            <button
                                className="block lg:flex lg:w-auto w-full px-8 py-3 shadow-md shadow-sky-100 mt-6 text-sm font-semibold text-center text-white transition-colors duration-150 bg-sky-600 border border-transparent rounded-lg active:bg-sky-600 hover:bg-sky-700 focus:outline-none focus:shadow-outline-blue" type='submit'
                            >Submit</button>

                            <Link to="/"
                                className="block lg:flex lg:w-auto w-full  px-8 py-3 shadow mt-6 text-sm font-semibold text-center transition-colors duration-150 bg-slate-200 border border-transparent rounded-lg  focus:outline-none focus:shadow-outline-blue"
                            >Cancel</Link>
                        </div>


                    </Form>
                </Formik>
            </div>

        </>
    )
}