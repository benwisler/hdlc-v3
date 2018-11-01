import React, { Component } from "react";
import { Container, Card } from 'reactstrap';
import "./footer.css";

class Footer extends Component {
    render (){
        return(
        <section id="foot">
        <Container>
                <h4 id= "footText" className="text-center">
                    &nbsp;
                    2018 Wisler Web Development&copy;

                </h4>
        </Container>
    </section>
        )
    }
};


export default Footer;