import 'react'
import { Link } from 'react-router-dom'
import '../../../styles/common.css'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { register } from '../../../services/auth'
import toast, { Toaster } from 'react-hot-toast'

const SignUp = () => {
const [ requestError, setRequestError ] = useState(false);
const initialValues = {
  name: '',
  email: '',
  password: ''
}

const schema = Yup.object().shape({
  name: Yup.string().required("Enter valid names").max(255).min(2),
  email: Yup.string().email("Invalid Email").required("Enter valid email").max(255).min(5),
  password: Yup.string().required("Enter valid password").max(25).min(5)
})

const formik = useFormik({
  initialValues,
  validationSchema: schema
})

const { handleChange, values, errors, touched, getFieldProps, isValid  } = formik
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await register(values);
  if(!response?.success) {
    return setRequestError(response.message || "Something went wrong");
  }
  toast.success("Account created successfully");
}

const errorInputStyle = {
  border: '1px solid red'
}
  return (
    <div className="container">
      <div className='form-container'>
        <form>
          <Toaster/>
          {requestError && <div className='error-message'>{requestError}</div>}
          <h1>Sign up </h1>
          <input name='name' type="text" placeholder="Full name"
          {...getFieldProps('name')}
          style={errors.names && touched.names ? errorInputStyle : {}}
          />
          { touched.names && errors.names && <label>{errors.names}</label>}

          <input name='email' type="email" placeholder="email" 
          {...getFieldProps('email')}
          style={errors.email && touched.email ? errorInputStyle: {}}
          />
          { touched.email && errors.email && <label>{errors.email}</label>}

          <input name='password' type="password" placeholder="password" 
          {...getFieldProps('password')}
          style={ errors.password && touched.password ? errorInputStyle : {}}
          />
          { touched.password && errors.password && <label>{errors.password}</label>}
          
          <button 
          type='submit' 
          disabled={!isValid || Object.values(touched).every(e => e === '')}
          style={ !isValid || Object.values(touched).every(e => e === '') ? {backgroundColor: '#ccc'} : {}}
          onClick = {handleSubmit}
          >Signup</button>

          <Link to='/'>
              <p style={{marginTop: '2em'}}>Have account ? <span>Login</span></p>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp
