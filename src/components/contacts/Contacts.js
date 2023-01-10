import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  // state = {
  //   contacts: [
  //     {
  //       id: 1,
  //       name: "John Doe",
  //       email: "john@doe.com",
  //       phone: "555-555-5555",
  //     },
  //     {
  //       id: 2,
  //       name: "Johnson Potter",
  //       email: "johnson@doe.com",
  //       phone: "222-222-2222",
  //     },
  //     {
  //       id: 3,
  //       name: "Smith Harry",
  //       email: "smith@doe.com",
  //       phone: "444-444-4444",
  //     },
  //   ],
  // };
  // deleteContact = (id) => {
  //   // console.log(id);
  //   const { contacts } = this.state;
  //   const newContacts = contacts.filter((contact) => contact.id !== id);
  //   this.setState({ contacts: newContacts });
  // };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <h1 className="display-4 text-center">
                    <span className="text-danger">Contact</span> List
                  </h1>
                </div>
              </div>
              {contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                  // name={contact.name}
                  // email={contact.email}
                  // phone={contact.phone}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
    // const { contacts } = this.state;
    // return (
    //   <React.Fragment>
    //     {contacts.map((contact) => (
    //       <Contact
    //         key={contact.id}
    //         contact={contact}
    //         deleteClickHandler={this.deleteContact.bind(this, contact.id)}
    //         // name={contact.name}
    //         // email={contact.email}
    //         // phone={contact.phone}
    //       />
    //     ))}
    //   </React.Fragment>
    // );
  }
}

export default Contacts;
