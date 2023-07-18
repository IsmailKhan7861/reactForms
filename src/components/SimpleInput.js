import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [currName, setName] = useState("");
  const [currEmail, setEmail] = useState("");
  const [nameEdit, setNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);

  const nameValid = currName.trim() !== "";
  const emailValid = currEmail.trim().includes("@");

  let isNameValid = !nameValid && nameEdit;
  let isEmailValid = !emailValid && emailEdit;

  let isFormValid = false;
  //OVERALL FORM
  if (nameValid && emailValid) {
    isFormValid = true;
  }

  //NAME
  const nameInputHandler = (event) => {
    setName(event.target.value);
    setNameEdit(true);
  };
  const emailInputHandler = (event) => {
    setEmail(event.target.value);
    setNameEdit(true);
  };
  const onBlurHandler = (event) => {
    setNameEdit(true);
    if (!nameValid) {
      return;
    }
  };

  const onBlurEmailHandler = (event) => {
    setEmailEdit(true);
  };
  let content = <p className="error-text">Name is Not Valid</p>;
  let emailContent = <p className="error-text">Email is Not Valid</p>;
  let nameInputClasses = isNameValid ? "form-control invalid" : "form-control";
  let emailInputClasses = isEmailValid
    ? "form-control invalid"
    : "form-control";

  const submitHandler = (event) => {
    event.preventDefault();
    setNameEdit(true);
    setEmailEdit(true);
    if (!nameValid || !emailValid) {
      return;
    }

    setName("");
    setEmail("");
    setNameEdit(false);
    setEmailEdit(false);
  };

  //EMAIL

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          value={currName}
          onBlur={onBlurHandler}
        />
      </div>
      {isNameValid && content}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
          value={currEmail}
          onBlur={onBlurEmailHandler}
        />
      </div>
      {isEmailValid && emailContent}

      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
