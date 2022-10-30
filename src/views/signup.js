import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";


//context API
import { useContext } from "react";
import AuthContext from "../context/auth/context";
import UiContext from "../context/UI/context";


import google from '../assets/media/Google__G__Logo.svg.png'
import twitter from '../assets/media/Twitter-logo.svg.png'




export const SignUp = () => {
  const { userSignup } = useContext(AuthContext);

  let { setAlert } = useContext(UiContext);

  //creating  intialvalues for formik
  const intialValues = {
    email: "", // for title field
    password: "",
    confirm_password: "",
  };

  //validationSchema--- to integrate validations on the form using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
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
  });



  const onSubmit = (data, { resetForm }) => {
    setAlert({ msg: null, type: "loading" });

    setTimeout(async () => {
      if (data.confirm_password !== data.password) {
        setAlert({ msg: "Password doesnot match!", type: "fail" });
      } else {
        let details = { email: data.email, password: data.password };
        let signingup = await userSignup(details);
        if (signingup) {
          setAlert({ msg: "Registration Successfull", type: "success" });
        }
      }
    }, 2000);
  };

  return (
    <>

      <div className='space-y-2'>
        <h2 className='text-xl font-extrabold text-center'> Sign Up</h2>
        <p className='font-medium text-center text-slate-400'>Create an account</p>
      </div>


      <div className='md:flex gap-6 justify-center space-y-2 md:space-y-0'>
        <div>
          <a href="https://tweetclips-test.herokuapp.com/api/v1/googleoauth"
            className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
          >
            <img src={google} alt="img" className="w-4 mr-3" />
            Sign in with Google
          </a>
        </div>

        <div>
          <a href="nothing"
            className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
          >
            <img src={twitter} alt="img" className="w-4 mr-3" />
            Sign in with Twitter
          </a>
        </div>
      </div>

      <div className='flex justify-center items-center gap-6'>
        <div className='bg-slate-200 h-0.5 w-1/4  md:w-1/3'></div>
        <p className='font-medium text-slate-400 text-xs md:text-sm'>Or with email</p>
        <div className='bg-slate-300 h-0.5 w-1/4 md:w-1/3'></div>
      </div>

      <div className="space-y-4">
        <Formik
          initialValues={intialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="my-4 md:mt-0 lg:py-1.5">
              <label className="block text-sm">
                <span className="text-gray-700">
                  Email Address
                </span>
                <Field
                  type="email"
                  name="email"
                  className="block w-full mt-1 border p-3 text-sm font-medium  focus:border-sky-400 focus:outline-none focus:shadow-outline-purple rounded"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500"
                />{" "}
                {/*to display the error message for the field*/}
              </label>
            </div>

            <div className="my-4 md:mt-0 lg:py-1.5">
              <label className="block text-sm">
                <span className="text-gray-700">
                  Password
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

            <button
              className="block w-full px-4 py-2.5 shadow-md shadow-purple-300 mt-4 text-sm font-medium text-center text-white transition-colors duration-150 bg-sky-600 border border-transparent rounded-lg active:bg-sky-600 hover:bg-sky-700 focus:outline-none focus:shadow-outline-blue"
              type="submit"
            >
              Create Account
            </button>
          </Form>
        </Formik>
      </div>
      <p className='font-medium text-center text-xs md:text-sm'>Already have an Account? <Link to="login" className='text-sky-600'>Sign in</Link></p>

    </>
  );
};
