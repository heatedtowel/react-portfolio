import './assets/css/style.css'
import React from "react";
import { useState } from "react";
import { validateEmail } from "./assets/helpers/helper";

export default function ContactMe() {

  const [focused, setFocused] = useState(false);

  const handleFocus = (event) => {
    event.target(setFocused(true));
  };
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (res) => {
    const { target } = res;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'comment') {
      setComment(inputValue)
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Please input a valid email address');
      return;
    } else {
      setErrorMessage('');
    }

    setName('');
    setComment('');
    setEmail('');
  }

  return (
    <div className="row justify-content-center align-items-center text-center col-11 col-lg-6 m-auto">
      <form className="form container col-12 col-lg-9 bg-light m-2 p-5 rounded-3">
        <div>
          <h4 className="text-light text-center">Contact Me</h4>
          <input
            className="text-dark col-10 fs-5 border border-danger rounded-3 p-2"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            onBlur={handleFocus}
            focused={focused.toString()}
            required
            minLength={2}
          />
        </div>
        <span className="error">{name.length > 0 ? 'Invalid Name' : ' '}</span>
        <div>
          <h4 className="text-light mt-4 text-start"> </h4>
          <input
            className="text-dark col-10 fs-5 border border-danger rounded-3 p-2"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            onBlur={handleFocus}
            focused={focused.toString()}
            required
          />
        </div>
        <span className="error text-dark">{email.length > 0 ? 'Invalid Email' : ' '}</span>
        <div>
          <h4 className="text-light mt-4 text-start"> </h4>
          <textarea
            rows="3"
            className="text-dark col-10 fs-5 border border-danger rounded-3 p-2"
            value={comment}
            name="comment"
            onChange={handleInputChange}
            type="text"
            placeholder="Comments"
            onBlur={handleFocus}
            focused={focused.toString()}
            required
            minLength={2}
          />
        </div>
        <span className="error">{comment.length > 0 ? 'Invalid comment' : ' '}</span>
        <div>
          <button
            className="col-6 btn btn-info btn-lg mt-4 fw-bold rounded-3"
            type="button"
            onClick={handleFormSubmit}
            onChange={handleInputChange}
          >
            enter
          </button>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text text-danger fs-5 mt-5">{errorMessage}</p>
          </div>
        )}
      </form>

    </div>
  );
}