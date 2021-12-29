import React from "react";

const Registration = (props) => {
  const { updateForm, formSubmit } = props;
  return (
    <div className="attendee-form">
      <h2>Register Attendee</h2>
      <form>
        <label>
          {" "}
          First Name:
          <input id="firstName" type="text" onChange={updateForm} />
        </label>
        <label>
          {" "}
          Last Name:
          <input id="lastName" type="text" onChange={updateForm} />
        </label>
        <label>
          {" "}
          email
          <input id="email" type="text" onChange={updateForm} />
        </label>
        <label>
          Shirt Size:
          <br />
          <select id="shirt" onChange={updateForm}>
            <option value=""></option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          <br />
        </label>
        <label>
          Experience Level:
          <br />
          <select id="skillLevel" onChange={updateForm}>
            <option value=""></option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
          <br />
        </label>
      </form>
      <button onClick={formSubmit}>REGISTER</button>
    </div>
  );
};

export default Registration;
