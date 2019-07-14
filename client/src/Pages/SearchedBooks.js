import React, { Component } from "react";
import API from "../Utils/API";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import { Container, Row, Col } from "../Components/Grid/Grid";
import SearchForm from "../Components/SearchForm/SearchForm";
import SearchResult from "../Components/SearchResult/SearchResult";

class SearchBooks extends Component {
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    let results = res.data.items
                    results = results.map(result => {
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    
}