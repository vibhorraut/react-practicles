import { Field, Formik, Form } from "formik";
import { indianStates } from "../FormHandling/states";
import "../App.css";


export function StudentForm({student,formSubmit}) {
    return<>

<div className="card card-body">
                <Formik 
                enableReinitialize={true}
                initialValues={{
                    fname:student?.fname || '',
                    lastname:student?.lastname || '',
                    email: student?.email || '',
                    ContactNo: student?.ContactNo || '',
                    address: student?.address || '',
                    state: student?.state || '',
                    pin: student?.pin || '',
                }}
                    onSubmit={(value, { resetForm }) => {
                        console.log(value);
                        formSubmit(value,student?.id ,{resetForm})  
                        
                    }}
                >
                    <Form>
                        <div className="row">
                            <div className="col-md-3">
                                <label htmlFor="fname">First Name</label> <span className="text-danger">*</span>
                                <Field type="text" className="form-control" id="fname" name="fname" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="lastname">Last Name</label> <span className="text-danger">*</span>
                                <Field type="text" className="form-control" id="lastname" name="lastname" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="email">Email</label> <span className="text-danger">*</span>
                                <Field type="email" className="form-control" id="email" name="email" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="ContactNo">Mobile</label> <span className="text-danger">*</span>
                                <Field type="text" className="form-control" id="ContactNo" name="ContactNo" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="ContactNo">Address</label> <span className="text-danger">*</span>
                                <Field type="text" className="form-control" id="address" name="address" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="course">Select State</label>
                                <Field as="select" className="form-control" id="state" name="state">
                                    <option disabled> Select Course</option>
                                    {indianStates.map((state, index) => (
                                        <option value={state} key={index}>{state}</option>
                                    ))}
                                </Field>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="pin">Pin</label> <span className="text-danger">*</span>
                                <Field type="text" className="form-control" id="pin" name="pin" />
                            </div>
                            <div className="d-flex justify-content-end">
                                <div className="col-md-3">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>

            </div>
    
    </>
}