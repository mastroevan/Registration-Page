import React from "react";

const Editor = (props) => {
  const { edit, closeEditor, updateEditor, idSelected } = props;
  return (
    <div className="editor">
      <div className="modal-content">
        <h1 className="modal-title">Edit Attendee Info</h1>
        <div className="modal-body">
          <form>
            <label>
              {" "}
              First Name:
              <input
                id="firstName"
                type="text"
                onChange={updateEditor}
                defaultValue={idSelected.firstName}
              />
            </label>
            <label>
              {" "}
              Last Name:
              <input
                id="lastName"
                type="text"
                onChange={updateEditor}
                defaultValue={idSelected.lastName}
              />
            </label>
            <label>
              {" "}
              email
              <input
                id="email"
                type="text"
                onChange={updateEditor}
                defaultValue={idSelected.email}
              />
            </label>
            <label>
              Shirt Size:
              <br />
              <select
                id="shirt"
                onChange={updateEditor}
                defaultValue={idSelected.shirt}
              >
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
              <select
                id="skillLevel"
                onChange={updateEditor}
                defaultValue={idSelected.skillLevel}
              >
                <option value=""></option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
              <br />
            </label>
          </form>
          <button className="modal-button" onClick={edit}>Save Edit(s)</button>
          <button className="modal-button" onClick={closeEditor}>Close Editor</button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
