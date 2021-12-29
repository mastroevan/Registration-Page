import React from 'react';

const Attendees = (props) => {
  const {attendees, editor} = props;
    return (
      <div className="attendees">
        <h2>Attendees</h2>
        <h3>Beginner</h3>
        {
          attendees.beginners.map((attendent) => {
            return (<div key={attendent.id} onClick={editor.bind(this, attendent.id)}>{attendent.firstName} {attendent.lastName}</div>)
          })
        }
        <h3>Intermediate</h3>
        {
          attendees.intermediates.map((attendent) => {
            return (<div key={attendent.id} onClick={editor.bind(this, attendent.id)}>{attendent.firstName}  {attendent.lastName}</div>)
          })
        }
        <h3>Expert</h3>
        {
          attendees.experts.map((attendent) => {
            return (<div key={attendent.id} onClick={editor.bind(this, attendent.id)}>{attendent.firstName} {attendent.lastName}</div>)
          })
        }
        </div>
    );
}

export default Attendees;