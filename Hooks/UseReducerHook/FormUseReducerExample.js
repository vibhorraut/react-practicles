import React, { useReducer } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { indianCities } from '../../FormHandling/states';

// Initial state for the form fields
const initialState = {
  fname: '',
  lname: '',
  ContactNo: '',
  address: '',
  city: '',
};

// Reducer function to update state based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const FormUseReducerExample = () => {
  // Use useReducer hook to manage state and dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to handle form submission
  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
    console.log(values);
  };

  // Define your form validation schema
  const validationSchema = yup.object({
    fname: yup.string().min(4, "Name too short").max(10, "Name too long").required("First Name Required"),
    lname: yup.string().min(4, "Name too short").max(10, "Name too long").required("Last Name Required"),
    ContactNo: yup.string().required("Contact No. Required"),
    address: yup.string().min(4, "Address too short").max(10, "Address too long").required("Address Required"),
    city: yup.string().required("City is required"),
  });

  return (
    <div className='container-fluid'>
      <h3>Use Reducer Example in form</h3>
      <hr />

      {/* Formik component for form management and validation */}
      <Formik
        initialValues={state}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="row">
              <div className="col-md-3">
                <label htmlFor="fname">First Name</label> <span className="text-danger">*</span>
                <Field 
                  type="text" 
                  className="form-control" 
                  id="fname" 
                  name="fname" 
                  value={values.fname} 
                  onChange={(e) => {
                    setFieldValue('fname', e.target.value);
                    dispatch({ type: 'SET_FIELD', field: 'fname', value: e.target.value });
                  }} 
                />
                <ErrorMessage name="fname" component="div" className="text-danger" />
              </div>
              <div className="col-md-3">
                <label htmlFor="lname">Last Name</label> <span className="text-danger">*</span>
                <Field 
                  type="text" 
                  className="form-control" 
                  id="lname" 
                  name="lname" 
                  value={values.lname} 
                  onChange={(e) => {
                    setFieldValue('lname', e.target.value);
                    dispatch({ type: 'SET_FIELD', field: 'lname', value: e.target.value });
                  }} 
                />
                <ErrorMessage name="lname" component="div" className="text-danger" />
              </div>

              <div className="col-md-3">
                <label htmlFor="ContactNo">Contact Number</label> <span className="text-danger">*</span>
                <Field 
                  type="text" 
                  className="form-control" 
                  id="ContactNo" 
                  name="ContactNo" 
                  value={values.ContactNo} 
                  onChange={(e) => {
                    setFieldValue('ContactNo', e.target.value);
                    dispatch({ type: 'SET_FIELD', field: 'ContactNo', value: e.target.value });
                  }} 
                />
                <ErrorMessage name="ContactNo" component="div" className="text-danger" />
              </div>

              <div className="col-md-3">
                <label htmlFor="address">Address </label> <span className="text-danger">*</span>
                <Field 
                  type="text" 
                  className="form-control" 
                  id="address" 
                  name="address" 
                  value={values.address} 
                  onChange={(e) => {
                    setFieldValue('address', e.target.value);
                    dispatch({ type: 'SET_FIELD', field: 'address', value: e.target.value });
                  }} 
                />
                <ErrorMessage name="address" component="div" className="text-danger" />
              </div>
              <div className="col-md-3">
                <label htmlFor="city">Select City </label>
                <Field 
                  as="select" 
                  className="form-control" 
                  id="city" 
                  name="city" 
                  value={values.city} 
                  onChange={(e) => {
                    setFieldValue('city', e.target.value);
                    dispatch({ type: 'SET_FIELD', field: 'city', value: e.target.value });
                  }} 
                >
                  <option value="" disabled> Select City</option>
                  {
                    indianCities.map((city, index) => (
                      <option value={city} key={index}>{city}</option>
                    ))
                  }
                </Field>
                <ErrorMessage name="city" component="div" className="text-danger" />
              </div>
              <div className="d-flex justify-content-end">
                <div className="col-md-3">
                  <button type="submit" className="btn btn-danger">Submit</button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormUseReducerExample;