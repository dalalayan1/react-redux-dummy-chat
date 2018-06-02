
import React, { Component } from "react";

const UserInputForm = ({ userid, inputId, inputClass, buttonClass, buttonValue, formClassName, placeholder, onSubmitCallback}) => (
  <form className={formClassName} onSubmit={onSubmitCallback}>
    <input type="text" id={inputId} className={inputClass} placeholder={placeholder} />
    <input type="submit" className={buttonClass} value={buttonValue} />
  </form>
);

export default UserInputForm;
