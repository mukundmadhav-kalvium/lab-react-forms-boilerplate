import React, { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Forms = () => {
  //state to check if the form is submitted
  const [formSubmit, setFormSubmit] = useState(false);

  //state to keep track of all errors
  const [formError, setFormError] = useState({});

  //state to keep all formData
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
  });

  /*  const firstNameHandler = (e) => {
    setFormData({
      ...formData,
      firstName: e.target.value,
    });
    console.log(formData.firstName);
  };

  const lastNameHandler = (e) => {
    setFormData({
      ...formData,
      lastName: e.target.value,
    });
    console.log(formData.lastName);
  };

  const emailHandler = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
    console.log(formData.email);
  };

  const phoneHandler = (e) => {
    setFormData({
      ...formData,
      phone: e.target.value,
    });
    console.log(formData.phone);
  };
*/

  //handle all input values in the form
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData);
  };

  //Submit Function
  const formSubmitHandler = (e) => {
    e.preventDefault();

    let errors = validate(formData);
    setFormError(errors);

    let errorKeyArray = Object.keys(errors);

    if (errorKeyArray.length == 0) {
      setFormSubmit(true);
    }
  };

  //validate Data function
  const validate = (data) => {
    let error = {};
    if (data.firstName.trim() == "") {
      error.firstName = "Please enter your First Name";
    }
    if (data.lastName.trim() == "") {
      error.lastName = "Please enter your Last Name";
    }
    if (data.email.trim() == "") {
      error.email = "Please enter your Email";
    }
    if (data.phone.trim().length != 10) {
      error.phone = "Please enter your 10-digit Phone Number";
    }
    return error;
  };

  return (
    <div className="form-container">
      <fieldset>
        <legend>Fill this form</legend>
        <form onSubmit={formSubmitHandler}>
          {formSubmit && (
            <div className="success">
              <p>Registration Successful</p>
            </div>
          )}
          <label>First Name:</label>
          <input type="text" name="firstName" onChange={handleInputChange} />
          {formError.firstName && (
            <p className="error">{formError.firstName}</p>
          )}

          <label>Last Name:</label>
          <input type="text" name="lastName" onChange={handleInputChange} />
          {formError.lastName && <p className="error">{formError.lastName}</p>}

          <label>Email:</label>
          <input type="email" name="email" onChange={handleInputChange} />
          {formError.email && <p className="error">{formError.email}</p>}

          <label>Phone:</label>
          <input type="number" name="phone" onChange={handleInputChange} />
          {formError.phone && <p className="error">{formError.phone}</p>}
          <input type="submit" value={"Register"} onClick={formSubmitHandler} />
        </form>
      </fieldset>
    </div>
  );
};

export default Forms;
