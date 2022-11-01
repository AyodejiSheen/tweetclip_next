import { ErrorMessage, Field, Form, Formik } from "formik"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import AuthContext from "../../context/auth/context";
import UiContext from "../../context/UI/context";





export const UpdatePassword = () => {


    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [otpToken, setOtpToken] = useState("");


    let { setAlert } = useContext(UiContext);
    let { user, updatePassword } = useContext(AuthContext);


    //creating  intialvalues for formik
    const intialValues = {
        password: "",
        confirm_password: "",
    }


    //validationSchema--- to integrate validations on the form using Yup
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
                message: "Password too weak",
            })
            .required("Enter password"),
        confirm_password: Yup.string()
            .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
                message: "Password too weak",
            }).required("Enter password").when("password", {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Password doesnot match!"
                )
            }),
    })


    const handleChange = (e, index) => {
        setOtp([...otp.map((d, idx) => (idx === index ? e.value : d))]);
        if (e.nextSibling) {
            e.nextSibling.focus();
        }
        setOtpToken(+otp.join("") + e.value);
    }



    const onSubmit = (data, { resetForm }) => {
        setAlert({ msg: null, type: "loading" });

        setTimeout(() => {
            console.log(otpToken)
            console.log(parseInt(otpToken))
            updatePassword({...data, code:parseInt(otpToken)})
        }, 2000)
    }





    return (
        <>


            <div>
                <h2 className="text-center font-bold text-2xl">Setup New Password</h2>
                <p className="text-slate-400 font-medium text-center text-sm">Have you already reset the password ? <Link to="/login" className="text-sky-600">Sign In</Link></p>
            </div>

            <div>
                <Formik initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>

                        <p className="text-sm text-center">Enter the code sent to {user.email}</p>
                        <div className='my-4 md:mt-0 lg:py-1.5 flex justify-center'>
                            {
                                otp.map((x, index) => (
                                    <input
                                        type="number"
                                        onChange={(e) => handleChange(e.target, index)}
                                        onFocus={(e) => e.target.select()}
                                        key={index}
                                        value={x}
                                        name="token"
                                        maxLength={1}
                                        className="w-10 h-10 md:w-14 md:h-14 mx-3 border-2 rounded-md text-xl md:text-2xl font-medium text-center"
                                    />
                                ))
                            }
                        </div>

                        <div className="my-4 md:mt-0 lg:py-1.5">
                            <label className="block text-sm">
                                <span className="text-gray-700">
                                    New Password
                                </span>
                                <Field
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border p-3 text-sm font-medium  focus:border-sky-400 focus:outline-none focus:shadow-outline-purple rounded"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="span"
                                    className="text-red-500"
                                />{" "}
                                {/*to display the error message for the field*/}
                            </label>
                            <p className="text-xs text-slate-300">Use 8 or more characters with a mix of letters, numbers & symbols.</p>
                        </div>

                        <div className="my-4 md:mt-0 lg:py-1.5">
                            <label className="block text-sm">
                                <span className="text-gray-700 ">
                                    Confirm Password
                                </span>
                                <Field
                                    type="password"
                                    name="confirm_password"
                                    className="block w-full mt-1 border p-3 text-sm font-medium  focus:border-sky-400 focus:outline-none focus:shadow-outline-purple rounded"
                                />
                                <ErrorMessage
                                    name="confirm_password"
                                    component="span"
                                    className="text-red-500"
                                />{" "}
                                {/*to display the error message for the field*/}
                            </label>
                        </div>

                        <div className="space-x-4 flex justify-center">
                            <button
                                className=" px-8 py-3 shadow-md shadow-sky-100 mt-6 text-sm font-semibold text-center text-white transition-colors duration-150 bg-sky-600 border border-transparent rounded-lg active:bg-sky-600 hover:bg-sky-700 focus:outline-none focus:shadow-outline-blue" type='submit'
                            >Submit</button>

                            <Link to="/"
                                className=" px-8 py-3 shadow mt-6 text-sm font-semibold text-center transition-colors duration-150 bg-slate-200 border border-transparent rounded-lg  focus:outline-none focus:shadow-outline-blue" type='submit'
                            >Cancel</Link>
                        </div>


                    </Form>
                </Formik>
            </div>



        </>
    )
}