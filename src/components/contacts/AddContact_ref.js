import React, { Component } from "react";

class AddContact extends Component {
    constructor(props) {
    super(props);
    this.nameInput = React.createRef()
    this.emailInput = React.createRef()
    this.phoneInput = React.createRef()
  //   state = {
  //     name: "",
  //     email: "",
  //     message: "",
  //   };
  onSubmit = (e) => {
    e.preventDefault();
    //   console.log(this.state);
    const contact = {
        name: this.nameInput.current.value,
        email: this.emailInput.current.value,
        phone: this.phoneInput.current.value,
    }
      console.log(contact);

  };
  //   onChange = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  //   onNameChange = (e) => {
  //     this.setState({ name: e.target.value });
  //   };
  //   onEmailChange = (e) => {
  //     this.setState({ email: e.target.value });
  //   };
  //   onPhoneChange = (e) => {
  //     this.setState({ phone: e.target.value });
  //   };

  static defaultProps = {
    name: "",
    email: "",
    phone: "",
    
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-header">Add Contact</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label> <br />
                  <input
                    type="text"
                    className="form-control form-control-lg mt-2"
                    placeholder="Enter Name..."
                    name="name"
                    defaultValue={name}
                    ref={this.nameInput}
                    // onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label> <br />
                  <input
                    type="email"
                    className="form-control form-control-lg mt-2"
                    placeholder="Enter Email..."
                    name="email"
                    defaultValue={email}
                    ref={this.emailInput}

                    // onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label> <br />
                  <input
                    type="tel"
                    className="form-control form-control-lg mt-2"
                    placeholder="Enter Phone Number..."
                    name="phone"
                    defaultValue={phone}
                    ref={this.phoneInput}

                    // onChange={this.onChange}
                  />
                </div>
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
  }
}

export default AddContact;
