import Logo from '../assets/media/logo.jpg'
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

//notiflix
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { Loading } from 'notiflix/build/notiflix-loading-aio'


//context API
import { useContext } from 'react';
import AuthContext from '../context/auth/context';



//icons
import { FcGoogle } from "react-icons/fc"








export const SignUp = () => {


    const navigate = useNavigate();
    const { userSignup } = useContext(AuthContext)




    //creating  intialvalues for formik
    const intialValues = {
        fullname: "", // for title field
        email: "", // for title field
        password: "",
        confirm_password: "",
    }



    //validationSchema--- to integrate validations on the form using Yup
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required("Please input your firstname"),  //i.e it must be a string and its required
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(4).max(20).required("Enter password"),
        confirm_password: Yup.string().min(4).max(20).required("Enter password"),
    })


    const onSubmit = (data, { resetForm }) => {

        Loading.dots();


        setTimeout(async () => {
            if (data.confirm_password !== data.password) {
                Loading.remove();
                Notify.failure("Password does not match")
            } else {
                let signingup = await userSignup(data);
                if (signingup) {
                    Notify.success("Registration successful")
                    Loading.remove();

                } else {
                    Notify.failure("Registration not successful")
                    Loading.remove();
                }
            }
        }, 2000)

    }






    return (
        <>

            <section className="h-screen w-screen m-0 flex">
                <div className="m-auto shadow-lg bg-white p-8 rounded-lg space-y-6 w-5/6 md:w-3/5 xl:w-1/3">
                    <div className='space-y-2'>
                        <img src={Logo} className="w-44 m-auto" alt='logo' />
                        <div>
                            <h2 className='text-center font-extrabold text-3xl'>Create an account</h2>
                            <p className='font-medium text-center'>Or <Link to="login" className='text-blue-500'>login</Link></p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <Formik initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                            <Form>

                                <div className='my-4 md:mt-0 lg:py-1.5'>
                                    <label className="block text-sm">
                                        <span className="text-gray-700 dark:text-gray-400">Full Name</span>
                                        <Field
                                            type="text"
                                            name="fullname"
                                            className="block w-full mt-1 border p-3 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:blue-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray rounded"
                                        />
                                        <ErrorMessage name="fullname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>


                                <div className='my-4 md:mt-0 lg:py-1.5'>
                                    <label className="block text-sm">
                                        <span className="text-gray-700 dark:text-gray-400">Email Address</span>
                                        <Field
                                            type="email"
                                            name="email"
                                            className="block w-full mt-1 border p-3 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-blue-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray rounded"
                                        />
                                        <ErrorMessage name="email" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>


                                <div className='my-4 md:mt-0 lg:py-1.5'>
                                    <label className="block text-sm">
                                        <span className="text-gray-700 dark:text-gray-400">Password</span>
                                        <Field
                                            type="password"
                                            name="password"
                                            className="block w-full mt-1 border p-3 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-blue-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray rounded"
                                        />
                                        <ErrorMessage name="password" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>

                                <div className='my-4 md:mt-0 lg:py-1.5'>
                                    <label className="block text-sm">
                                        <span className="text-gray-700 dark:text-gray-400">Password</span>
                                        <Field
                                            type="password"
                                            name="confirm_password"
                                            className="block w-full mt-1 border p-3 text-sm font-medium dark:border-gray-600 dark:bg-gray-700 focus:border-blue-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray rounded"
                                        />
                                        <ErrorMessage name="confirm_password" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>

                                <button
                                    className="block w-full px-4 py-2.5 shadow-md shadow-purple-300 dark:shadow-gray-900 mt-4 text-sm font-medium text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue" type='submit'
                                >Create Account</button>

                            </Form>
                        </Formik>

                        <div>
                            <Link to="#"
                                className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                            >
                                <FcGoogle className='mr-3 text-lg' />
                                Signup with Google
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}