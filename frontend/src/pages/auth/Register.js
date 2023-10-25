import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import CustomInput from '../../components/CustomInput/CustomInput';

const Register = () => {
  let schema = yup.object().shape({
    email: yup.string()
      .email("Email should be in valid format")
      .required("Email is required")
      // .matches("^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")
    ,
    password: yup.string()
      .required("Password is required")
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:schema,
  })



    return (
    <Layout title="Register-E-commerce">
    <div className="flex items-center justify-center bg-gray-900" >
        {/* // style={{ backgroundImage: `url(bg.png)`, */}
        {/* //         backgroundPosition: "center",  */}
        {/* //         minHeight: "100vh"}}> */}
      <div className="my-5 rounded-md p-4 bg-green-400 shadow-green" >
           {/* style={{background: "#2dce65", boxShadow:"0 0 20px #2dce65"}}> */}
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <div className='error text-center'>
          {/* {message === "Rejected" ? "You are not an Admin" : "" } */}
        </div>
        <form className='flex flex-col items-center justify-center' onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name = 'email'
            label="Enter your email..."
            id="email"
            value={formik.values.email}
            onchange={formik.handleChange('email')}
          />
          <div className='error'>
            {formik.touched.email && formik.errors.email
            ? (<div>{formik.errors.email}</div>)
            : null
           }
          </div>
          <CustomInput
            type="password"
            name = 'password'
            label="Enter your password..."
            id="pass"
            value={formik.values.password}
            onchange={formik.handleChange('password')}
          />
          <div className='error'>
            {formik.touched.password && formik.errors.password
            ? (<div>{formik.errors.password}</div>)
            : null
            }
          </div>
          <div className=' text-end'>
            <Link to="forgot-password" className=''>
              Forgot Password?
            </Link>
          </div>
          <button
            className="border-0 rounded-3 px-3 mt-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#1a1a1a" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div> 
            </div>
    </Layout>
  )
}

export default Register