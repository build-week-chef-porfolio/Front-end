import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import axiosWithAuth from './authorization/axiosWithAuth';


function Login({ errors, touched}){
    
    return (
       <div>
           <Form>
               <div>
               {touched.username && <p>{errors.username}</p>}
                   <Field
                    type='text'
                    name='username'
                    placeholder='username'
                   />
               </div>
               <div>
               {touched.password && <p>{errors.password}</p>}
                   <Field
                    type='text'
                    name='password'
                    placeholder='password'
                   />
               </div>
               <button>Submit</button>
           </Form>
       </div>       
      );
    }
    
    export default withFormik({
        mapPropsToValues () {
          return {
            username: "",
            password: ""
          };
        },

        validationSchema: Yup.object().shape({
            username: Yup.string()
              .max(15)
              .required(),
            password: Yup.string()
              .min(7, 'Password must be 7 or more characters.')
              .required(),
          }),
        
          
          
      
        handleSubmit(values, formikBag) {
          console.log(values)
          axiosWithAuth()
            .post("/register", values)
            .then(res => {
             formikBag.props.setInitialToken(res.data.token)
             formikBag.props.history.push("/display")
            })
            .catch(err => {
              console.log("error", err); 
            });
            
        }

    }
    )(Login)

