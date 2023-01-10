import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
// import uuid from "uuid";
// import { v4 as uuid } from "uuid";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    errors: {},
  };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    console.log(this.state);
    const { name, email, phone } = this.state;

    // check for errors
    if (!name || !email || !phone) {
      // console.log(this.name);
      this.setState({
        errors: {
          message: "Please fill out all the fields",
        },
      });
      return;
    }

    // if (name === "") {
    //   this.setState({
    //     errors: {
    //       message: "Please enter your name",
    //     },
    //   });
    //   return;
    // }
    // if (email === "") {
    //   this.setState({
    //     errors: {
    //       message: "Please enter your email",
    //     },
    //   });
    //   return;
    // }
    // if (phone === "") {
    //   this.setState({
    //     errors: {
    //       message: "Please enter your phone",
    //     },
    //   });
    //   return;
    // }
    const newContact = {
      // id: uuid(),
      name,
      email,
      phone,
    };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({
      type: "ADD_CONTACT",
      payload: res.data,
    });
    // console.log(newContact);

    //used to clear the input fields from the frontend
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });
    this.props.history.push("/");
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //   onNameChange = (e) => {
  //     this.setState({ name: e.target.value });
  //   };
  //   onEmailChange = (e) => {
  //     this.setState({ email: e.target.value });
  //   };
  //   onPhoneChange = (e) => {
  //     this.setState({ phone: e.target.value });
  //   };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-header text-center">Add Contact</div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      {/* <div className="form-group">
                        <label htmlFor="name">Name</label> <br />
                        <input
                          type="text"
                          className="form-control form-control-lg mt-2"
                          placeholder="Enter Name..."
                          name="name"
                          value={name}
                          onChange={this.onChange}
                        />
                      </div> */}
                      <TextInputGroup
                        label="Name"
                        name="name"
                        value={name}
                        placeholder="Enter Name..."
                        onChange={this.onChange}
                        error={errors.message}
                      />
                      {/* <div className="form-group">
                        <label htmlFor="email" className="mt-2">
                          Email
                        </label>{" "}
                        <br />
                        <input
                          type="email"
                          className="form-control form-control-lg mt-2"
                          placeholder="Enter Email..."
                          name="email"
                          value={email}
                          onChange={this.onChange}
                        />
                      </div> */}
                      <TextInputGroup
                        label="Email"
                        name="email"
                        type="email"
                        value={email}
                        placeholder="Enter Email..."
                        onChange={this.onChange}
                        error={errors.message}
                      />
                      {/* <div className="form-group">
                        <label htmlFor="phone" className="mt-2">
                          Phone
                        </label>{" "}
                        <br />
                        <input
                          type="tel"
                          className="form-control form-control-lg mt-2"
                          placeholder="Enter Phone Number..."
                          name="phone"
                          value={phone}
                          onChange={this.onChange}
                        />
                      </div> */}
                      <TextInputGroup
                        label="Phone"
                        name="phone"
                        value={phone}
                        placeholder="Enter Phone..."
                        onChange={this.onChange}
                        error={errors.message}
                      />
                      <input
                        type="submit"
                        value="Add Contact"
                        className="btn btn-light btn-block mt-3"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
    // return (
    //   <div className="row">
    //     <div className="col-md-4"></div>
    //     <div className="col-md-4">
    //       <div className="card mb-3">
    //         <div className="card-header">Add Contact</div>
    //         <div className="card-body">
    //           <form onSubmit={this.onSubmit}>
    //             <div className="form-group">
    //               <label htmlFor="name">Name</label> <br />
    //               <input
    //                 type="text"
    //                 className="form-control form-control-lg mt-2"
    //                 placeholder="Enter Name..."
    //                 name="name"
    //                 value={name}
    //                 onChange={this.onChange}
    //               />
    //             </div>
    //             <div className="form-group">
    //               <label htmlFor="email" className="mt-2">
    //                 Email
    //               </label>{" "}
    //               <br />
    //               <input
    //                 type="email"
    //                 className="form-control form-control-lg mt-2"
    //                 placeholder="Enter Email..."
    //                 name="email"
    //                 value={email}
    //                 onChange={this.onChange}
    //               />
    //             </div>
    //             <div className="form-group">
    //               <label htmlFor="phone" className="mt-2">
    //                 Phone
    //               </label>{" "}
    //               <br />
    //               <input
    //                 type="tel"
    //                 className="form-control form-control-lg mt-2"
    //                 placeholder="Enter Phone Number..."
    //                 name="phone"
    //                 value={phone}
    //                 onChange={this.onChange}
    //               />
    //             </div>
    //             <input
    //               type="submit"
    //               value="Add Contact"
    //               className="btn btn-light btn-block mt-3"
    //             />
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default AddContact;
