import React from "react";
import { Col, Row, Container } from "../Components/Grid/Grid";
import Jumbotron from "../Components/Jumbotron/Jumbotron";

function NoMatch () {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>
                            404 Page Can Not Be Found!
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default NoMatch;