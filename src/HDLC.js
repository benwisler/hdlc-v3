import React, { Component } from "react";

import axios from "axios";
import { Route } from "react-router-dom";
// components
import Signup from "./components/login/sign-up";
import LoginForm from "./components/login/login-form";
import Navbar2 from "./components/Navbar";

import Home from "./components/Home/home";
import WoForm from "./components/WorkOrder/WoForm"
import UserProfiles from "./components/pages/userprofiles";
import Browse from "./components/Listing/browse";
import Profile from "./components/Profile/profile";
// import Ranking from './components/pages/topusers';
import Listing from './components/Listing/addListing'
import {Container, Card, CardBody} from 'reactstrap'
import WoList from "./components/WorkOrder/WoList"
import Messaging from './components/Message/messaging';
// import singleListing from './components/singleListing/singleListing.js';
import DemoCarousel from './components/Carousel/carousel'
//import Router from ReactRouter.Route;
//import Switch from ReactRouter.Switch;
// import Wrapper from './components/Wrapper';
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      id: null,
      username: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          id: response.data.user.id,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          id: null,
          username: null
        });
      }
    });
  }

  render() {
    return (
      
      <section className="App Site">
                <Route
            path="/userprofile/:username"
            render={props => (
              <UserProfiles username={props.match.params.username} />
            )}
          />
        {/* <Wrapper> */}
        <section className="Site-Content">
          <Navbar2
            updateUser={this.updateUser}
            loggedIn={this.state.loggedIn}
          />
          {/* greet user if logged in: */}
          {this.state.loggedIn && (
            <Container>
              <Card>
                <CardBody>
                  <h1>
                    WELCOME, {this.state.username.toUpperCase()} TO SKILLTRADE!
                  </h1>
                </CardBody>
              </Card>
            </Container>
          )}
          {/* Routes to different components */}
          {!this.state.loggedIn && <Route exact path="/" component={Home} />}
          {!this.state.loggedIn && (
            <Route
              path="/login"
              render={() => <LoginForm updateUser={this.updateUser} />}
            />
          )}
          {!this.state.loggedIn && (
            <Route
              path="/signup"
              render={() => <Signup signup={this.signup} />}
            />
          )}
          {this.state.loggedIn && <Route path="/browse" component={Browse} />}
          {this.state.loggedIn && (
            <Route
              path="/profile"
              render={() => (
                <Profile username={this.state.username} id={this.state.id} />
              )}
            />
          )}

          {this.state.loggedIn && (
            <Route
              path="/workOrder"
              render={() => (
                <WoForm username={this.state.username} id={this.state.id} />
              )}
            />
          )}
          
          {this.state.loggedIn && (
            <Route
              path="/WoList"
              render={() => (
                <WoList username={this.state.username} id={this.state.id} />
              )}
            />
          )}
          {this.state.loggedIn && (
            <Route
              path="/messaging"
              render={() => <Messaging username={this.state.username} />}
            />
          )}
          {/* {this.state.loggedIn && (
            <Route
              path="/browse"
              // render={() => <Browse username={this.state.username} />}
            />
          )} */}
            <Route
              path="/gallery"
              render={() => <DemoCarousel username={this.state.username} />}
            />
        </section>
        <Footer />
      </section>
    );
  }

}

export default App;
