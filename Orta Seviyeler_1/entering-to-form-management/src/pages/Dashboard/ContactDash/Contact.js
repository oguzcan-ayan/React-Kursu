import React from 'react';
import { /* Formik, */ useFormik } from 'formik';
import Validation from './Validation';
import './styles.css';

function Contact() {

  const { handleSubmit, handleChange, handleBlur, values, errors, touched, isSubmitting } = useFormik({

    initialValues:{ email: '', password: '', message: ''},

    onSubmit: async (values, bag) => {
         await new Promise((r) => setTimeout(r, 1000))   
        // alert(JSON.stringify(values, null, 2));

      if(values.email === "oguzcanayan43@hotmail.com"){
        return bag.setErrors({ email : "This e-mail address has already been using. Please, enter an another e-mail address."});
      }
      console.log(values);
      bag.resetForm();
    },

   validationSchema: Validation,
  })
  return (
  <>
  {/* <Formik
       initialValues={{ email: '', password: '', message: ''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={async (values, bag) => {
         await new Promise((r) => setTimeout(r, 1000))
          //  alert(JSON.stringify(values, null, 2));
           console.log(values);
           bag.resetForm();
        }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
        // and other goodies 
       }) => (
         <form onSubmit={handleSubmit} className='form'>
          <label htmlFor='email'>Enter your e-mail</label>
           <input
             type="email"
             name="email"
             id='email'
             placeholder='write your e-mail address'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             disabled={isSubmitting}
           />
           {errors.email && touched.email && errors.email}
           <label htmlFor='password'>Enter your password</label>
           <input
             type="password"
             name="password"
             id='password'
             placeholder='enter your password'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             disabled={isSubmitting}
           />
           {errors.password && touched.password && errors.password}
           <label htmlFor='message'>Write your messages</label>
           <textarea
             name="message"
             id='message'
             placeholder='write your message'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.message}
             disabled={isSubmitting}
           />
          <div>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
          </div>
         </form>
       )}
     </Formik> */}

         <form onSubmit={handleSubmit} className='form'>
          <label htmlFor='email'>Enter your e-mail</label>
           <input
             type="email"
             id='email'
             name="email"
             placeholder='write your e-mail address'
             onChange={handleChange("email")}
             onBlur={handleBlur("email")}
             value={values.email}
             disabled={isSubmitting}
           />
           {errors.email && touched.email && <div className='error'>{errors.email}</div>}
           <label htmlFor='password'>Enter your password</label>
           <input
             type="password"
             id='password'
             name="password"
             placeholder='enter your password'
             onChange={handleChange("password")}
             onBlur={handleBlur("password")}
             value={values.password}
             disabled={isSubmitting}
           />
           {errors.password && touched.password && <div className='error'>{errors.password}</div>}
           <label htmlFor='message'>Write your messages</label>
           <textarea
             name="message"
             id='message'
             placeholder='write your message'
             onChange={handleChange("message")}
             onBlur={handleBlur("message")}
             value={values.message}
             disabled={isSubmitting}
           />
           {errors.message && touched.message && <div className='error-message'>{errors.message}</div>}
          <div>
           <button type="submit" className='submit-button' disabled={isSubmitting}>
             Submit
           </button>
          </div>
         </form>

  </>
  )
}

export default Contact;