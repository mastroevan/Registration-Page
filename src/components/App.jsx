import React from "react";
import Registration from "./Registration.jsx";
import Attendees from "./Attendees.jsx";
import Editor from "./Editor.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: {
        beginners: [],
        intermediates: [],
        experts: [],
      },
      editorOpen: false,
      idSelected: {
        firstName: "",
        lastName: "",
        email: "",
        shirt: "",
        skillLevel: "",
        id: 0,
      },
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        shirt: "",
        skillLevel: "",
        id: 0,
      },
    };

    this.updateForm = this.updateForm.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.sorter = this.sorter.bind(this);
    this.updateAttendant = this.updateAttendant.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.editor = this.editor.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
    this.updateEditor = this.updateEditor.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      attendees: {
        beginners: [],
        intermediates: [],
        experts: [],
      },
    });
    fetch("/attendees")
      .then((data) => data.json())
      .then((data) => {
        return data.map((value) => this.sorter(value));
      });
  }

  updateForm(event) {
    let theState = this.state;
    theState.formData[event.target.getAttribute("id")] = event.target.value;
    this.setState(theState);
  }

  sorter(attendent) {
    var attendeesObj = this.state.attendees;
    if (attendent.skillLevel === "Expert" || attendent.skillLevel === "expert")
      attendeesObj.experts.push(attendent);
    else if (
      attendent.skillLevel === "Intermediate" ||
      attendent.skillLevel === "intermediate"
    )
      attendeesObj.intermediates.push(attendent);
    else attendeesObj.beginners.push(attendent);
    this.setState({
      attendees: attendeesObj,
    });
  }

  formSubmit() {
    fetch("http://localhost:3000/attendees", {
      method: "POST",
      body: JSON.stringify(this.state.formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        this.sorter(data);
      });
  }

  editor(id, evt) {
    let attendentAll = this.state.attendees;
    let attendentArr = attendentAll.beginners.concat(
      attendentAll.intermediates,
      attendentAll.experts
    );
    let attendentSelected = attendentArr.find((element) => {
      return element.id === id;
    });
    this.setState({
      editorOpen: true,
      idSelected: attendentSelected,
    });
  }

  closeEditor(evt) {
    this.setState({
      editorOpen: false,
    });
  }

  updateEditor(evt) {
    let theState = this.state;
    theState.idSelected[evt.target.getAttribute("id")] = evt.target.value;
    this.setState(theState);
  }

  updateAttendant() {
    fetch(`http://localhost:3000/attendees/${this.state.idSelected.id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.idSelected),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      this.fetchData();
    });
  }

  render() {
    const { formData, attendees, idSelected, editorOpen } = this.state;
    return (
      <div className="main">
        <Registration
          formData={formData}
          updateForm={this.updateForm}
          formSubmit={this.formSubmit}
        />
        <Attendees attendees={attendees} editor={this.editor} />
        {editorOpen ? (
          <Editor
            edit={this.updateAttendant}
            idSelected={idSelected}
            closeEditor={this.closeEditor}
            updateEditor={this.updateEditor}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
