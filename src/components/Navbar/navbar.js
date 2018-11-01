import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import axios from "axios";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"; // https://reactstrap.github.io/components/navbar/

class Navbar2 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      username: "pop",
      isOpen: false
    };
    this.logout = this.logout.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  // constructor(props) {
  //   super(props);

  //   this.toggleNavbar = this.toggleNavbar.bind(this);
  //   this.state = {
  //     collapsed: true
  //   };
  // }

  // toggleNavbar() {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);


    return (
      <div>
        <style>
          {
            `.navStyle {
          font-weight:bold;font-style:bold;font-variant:small-caps;color:#461754;letter-spacing:-2pt;word-spacing:1pt;font-size:49px;text-align:center;font-family:times new roman, times, serif;line-height:1;
          background-color: "#3C3C3C";


              
        }
        .navStyle2 {
          font-weight:bold;font-style:bold;font-variant:small-caps;color:#461754;letter-spacing:-2pt;word-spacing:1pt;font-size:29px;text-align:center;font-family:times new roman, times, serif;line-height:1;
          background-color: "#3C3C3C";
        }
        .dropdownStyle {
          margin-top: 2.4%;
        }
        `
          }
        </style>
        <section id="navMargin">
          <Navbar light expand="md">
            <Nav className='navStyle'>
            <Link to="/" className="navStyle">
            <span className='navStyle'>
            Honey Do List Contractors, LLC
                        </span>
            </Link>
              </Nav>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {loggedIn ? (
                  <section className="float-left">
                    <NavItem className='logoutBtn'>
                      <Link to="/" id="navText" onClick={this.logout}>
                        <span className='navStyle'>
                          Logout
                        </span>
                      </Link>
                    </NavItem>

                  </section>
                ) : (
                    <section>
                      <section className="float-left">
                        <NavItem className='loginBtn'>
                          <Link to="/login">
                            <span className='navStyle'>
                              Login
                          </span>
                          </Link>
                        </NavItem>
                      </section>
                      <section className="float-right">
                        <NavItem className='signupBtn'>
                          <Link to="/signup">
                            <span className='navStyle'>
                              Sign-Up
                          </span>
                          </Link>
                        </NavItem>
                      </section>
                    </section>
                  )}
                <section className="dropdownStyle">
                  <UncontrolledDropdown className="navStyle" nav inNavbar>
                    <DropdownToggle nav caret>
                      <span className='navStyle'>
                        Options
                    </span>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavItem>
                          <Link to="/gallery">
                          <span className='navStyle2'>
                              Gallery
                          </span>
                          </Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <Link to="/profile">
                          <span className='navStyle2'>
                              Profile
                          </span>
                          </Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <Link to="/workOrder">
                          <span className='navStyle2'>
                              File Work Order
                          </span>
                          </Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <Link to="/WoList">
                          <span className='navStyle2'>
                              View Work Orders
                          </span>
                          </Link>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <Link to="/messaging/">
                          <span className='navStyle2'>
                              Messages
                          </span>
                          </Link>
                        </NavItem>
                      </DropdownItem>
                    
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </section>

              </Nav>
            </Collapse>
          </Navbar>
        </section>
      </div>
    );
  }
}

export default Navbar2;
