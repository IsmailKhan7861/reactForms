import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [currName, setName] = useState("");
  const [nameEdit, setNameEdit] = useState(false);

  const nameValid = currName.trim() !== "";
  let isNameValid = !nameValid && nameEdit;
  let isFormValid = false;

  if (nameValid) {
    isFormValid = true;
  }
  const nameInputHandler = (event) => {
    setName(event.target.value);
    setNameEdit(true);
  };

  const onBlurHandler = (event) => {
    setNameEdit(true);
    if (!nameValid) {
      return;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setNameEdit(true);
    if (!nameValid) {
      return;
    }

    setName("");
    setNameEdit(false);
  };

  let content = <p className="error-text">Name is Not Valid</p>;

  let nameInputClasses = isNameValid ? "form-control invalid" : "form-control";
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
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
