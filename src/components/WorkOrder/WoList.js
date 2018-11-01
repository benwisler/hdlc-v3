import React, { Component } from 'react';
import API from '../utils/API';
import {Button} from 'reactstrap'
import ReactDOM from 'react-dom';
class WoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.username,
            workOrders: null
        }

    }
    provideMessages = () => {
        // document.getElementById("messageDiv").innerHTML = "";
        // if (this.state.workOrders.length === 0) {
        //     console.log("no work orders")
        // } else {
          console.log(this.state.workOrders);
          let data = this.state.workOrders;
          const listItems = data.map(d => (
            // <li receiver={d.data.}
//             address: ""
// aptNumber: ""
// city: ""
// location: "Green Brier"
// password: "vd"
// priority: ""
// typeSelect: ""
// username: "vd"
// zipCode: ""
            <div className="messageClass" id={d._id} key={d._id}>
              <p>From: {d.username}</p>
              <p>Address: {d.address}</p>
              <p>Apartment Number: {d.aptNumber}</p>
              <p>City: {d.city}</p>
              <p>Zip Code: {d.zipCode}</p>
              <p>Location: {d.location}</p>
              <p>Priority: {d.priority}</p>
              <p>Work Type: {d.typeSelect}</p>







            </div>
          ));
          console.log(listItems);
          ReactDOM.render(listItems, document.getElementById("messageDiv"));
          this.forceUpdate();
        // }
        // return listItems;
      };
    getWorkOrders = (event) => {
        event.preventDefault();
        API.getWorkOrders().then(res=> {
            console.log(res)
            this.setState({
                workOrders: res.data
            })
            this.provideMessages()
        })
        .catch(err => {
            console.log(err)
        }) 
        
    }
    render() {

        var workOrderList = (
            <div>
                <p></p>

            </div>
        )
            
        return (
        (this.state.username === "polo" || "admin" || "rachel" ? (
            <div id="center">
            <button onClick={this.getWorkOrders}>View Work Orders</button>
<div id="messageDiv"></div>
        </div>
        ):(<div>nope</div>))
        )

    }

}
export default WoList;