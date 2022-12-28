import React from 'react';
import { Formik , Form} from 'formik';
import { TextField } from './Textfields';
import * as Yup from 'yup';

export const Signup= () =>{
    const validate = Yup.object ({
  
        firstName : Yup.string()
        .max(15,'Must be 15 or less Characters')
        .required('First Name  is Required'),  
  
       lastName : Yup.string()
       .max(15,'Must be 15 or less Characters')
       .required('Last Name  is Required'),  
  
         email : Yup.string()
         .email('email is invalid ')
         .required('Email is Required'),  
  
         password : Yup.string()
         .max(15,'Must be 8 or More Characters')
         .required('Password is Required'),

         phone : Yup.int()
         .max(10,'Must be 10 digits')
         .required('Phone No. is Required'),  

         country: Yup.string()
         .required('Country is Required'),

         city : Yup.string()
         .required('City is Required'),
        })

        return(
            <Formik
                initialvalues={{
                    firstName : '',
                    lastName : '',
                    email : '',
                    password : '',
                    phone : '', 
                    country :'',
                    city : '',
                  }}
                validationSchema ={validate}
                onSubmit={values => {
                    console.log(values)
                }}
                >
                    {formik =>{
                        <div>
                            <h1 className="'my-4 font-weight-bold .display -4">Signup</h1>
                              <form>
                                <TextField label = "First Name" name = "firstName" type ="text" />
                                <TextField label = "Last Name" name = "lastName" type ="text" />
                                <TextField label = "Email" name = "email" type ="email" />
                                <TextField label = "Password" name = "password" type ="password" />
                                <TextField label = "Phone" name = "phone" type ="int" />
                                <TextField label = "Country" name = "country" type ="text" />
                                <TextField label = "City" name = "city" type ="text" />
                                
                                <button className = "btn btn dark mt-3" type = "Submit"/>
                                <button className = "btn btn dark mt-3" type = "Reset"/>
                                </form>                       
                        </div>
                    }}
            </Formik>
        )
}
