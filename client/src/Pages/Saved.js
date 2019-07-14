import React, {Component } from "react";
import API from "../Utils/API";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import { Container } from "../Components/Grid/Grid";
import SavedBooks from "../Components/SavedBooks";

class SaveBook extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        API.getBooks()
        .thenn(res => this.setState({ savedBooks: res.data }))
        .catch(err => console.log(err))
    }

    handleDeleteButton = id => {
        API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container">
                <Jumbotron />
                <Container>
                    <SavedBooks savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}

export default Saved;