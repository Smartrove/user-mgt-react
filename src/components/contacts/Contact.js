import React, { Component } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({
        type: "DELETE_CONTACT",
        payload: id,
      });
    } catch (e) {
      dispatch({
        type: "DELETE_CONTACT",
        payload: id,
      });
    }

    // console.log("clicked");
    // this.props.deleteClickHandler();
  };

  // onShowClick = (name, e) => {
  //   // console.log("Hello World!");
  //   // console.log(this.state);
  //   // console.log(e.target);\
  //   // console.log(name);
  //   this.setState({
  //     showContactInfo: !this.state.showContactInfo,
  //   });
  // };  // function embedded in the onclick handler below.
  // contactPropTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired,
  // };  // another method was put above the export function down below.
  render() {
    // const { contact } = this.props;//ca be done like this or like below.
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="card card-body mb-3">
                  <h4>
                    {name}{" "}
                    <i
                      onClick={() => {
                        this.setState({
                          showContactInfo: !this.state.showContactInfo,
                        });
                      }}
                      className="fas fa-sort-down"
                      style={{ cursor: "pointer" }}
                    ></i>
                    <i
                      className="fas fa-times"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        color: "red",
                      }}
                      // onClick={this.onDeleteClick}
                      onClick={this.onDeleteClick.bind(this, id, dispatch)}
                    ></i>
                    <Link to={`contact/edit/${id}`}>
                      <i
                        className="fas fa-pencil-alt"
                        style={{
                          cursor: "pointer",
                          float: "right",
                          color: "black",
                          marginRight: "1rem",
                        }}
                      ></i>
                    </Link>
                  </h4>
                  {showContactInfo ? (
                    <ul className="list-group">
                      <li className="list-group-item">Email: {email}</li>
                      <li className="list-group-item">Phone: {phone}</li>
                      {/* <li className="list-group-item">id: {id}</li> */}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  // deleteClickHandler: PropTypes.func.isRequired,
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired,
};
export default Contact;
